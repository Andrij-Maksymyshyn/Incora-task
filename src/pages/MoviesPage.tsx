import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import Searchbar from '../components/Searchbar';
import { fetchMovieByKeyWord } from '../fetchApi/fetchApi';
import Loader from '../components/Loader';
import { noPosterImg } from './HomePage';
import { UlMovies, LinkMovies, LiMovies, ImgMovies, PMovies } from './MoviesPage.styled';



export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState<{ [key: string]: string }[]>([]);
  const [errorM, setErrorM] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const searchFilmValue = searchParams.get('value');
  const location = useLocation();

  

     const addSearchValue = (formData: string) => {
     setSearchParams({value: formData})   
  };

    useEffect(() => {
         if (searchFilmValue === '') {
      return;
        };
        
      if (searchFilmValue) {
          
        setLoading(true);
        
        
        fetchMovieByKeyWord(searchFilmValue)
          .then(data => {
          const { data: { results } } = data;

          if (results.length === 0) {
            return toast.error('Sorry, there are no movies. Try another request...');
          };

          setMovies(results);
          })
          
          .catch(error => {
            setErrorM(error);
        
          })
          
          .finally(() => {
            setTimeout(() => {
              setLoading(false);
            }, 1000)
          });   
      }         
    }, [searchFilmValue]);

    return (
    <div>
      <Toaster position="top-right" />
            <Searchbar propSubmit={addSearchValue} />
        {loading && <Loader />}
            <UlMovies>
                {movies.map(({id, title, name, poster_path}) => (
                  <LiMovies key={id}>
                    <LinkMovies to={`${id}`} state={{ from: location }}>
                      <ImgMovies src={poster_path ? ('https://image.tmdb.org/t/p/w500' + poster_path) : noPosterImg} alt={title ? title : name}/>
                      <PMovies>{title ? title : name}</PMovies>
                    </LinkMovies>
                  </LiMovies>
                ))}
            </UlMovies>
            {errorM && <h2>Whoops, something went wrong: error.</h2>}
    </div>
  );
};