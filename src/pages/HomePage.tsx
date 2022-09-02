import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { fetchTrendCollection } from '../fetchApi/fetchApi';
import Loader from '../components/Loader';
import { Main, UlHome, LinkHome, ImgHome, LiHome, PHome, H1 } from './HomePage.styled';


export const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';



export function HomePage() {
    const [movies, setMovies] = useState<{ [key: string]: string }[]>([]);
    const [errorM, setErrorM] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const location = useLocation();
    

    
    useEffect(() => {
        setLoading(true);
        
        fetchTrendCollection().then(data => {
            const { data: { results } } = data;
            setMovies(results);
        })
            
            .catch(error => {
                setErrorM(error)
            })
            
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }); 

    }, []);


    return (
        <Main>
             {loading && <Loader/>}
            <H1>Trending today</H1>
            <UlHome>
                {movies.map(({id, title, name, poster_path}) => (
                    <LiHome key={id}>
                        <LinkHome to={`/movies/${id}`} state={{ from: location }}>                            
                                <ImgHome src={poster_path ? ('https://image.tmdb.org/t/p/w500' + poster_path) : noPosterImg} alt={title ? title : name} />
                                <PHome>{title ? title : name}</PHome>                           
                        </LinkHome>
                    </LiHome>
                ))}
            </UlHome>
            {errorM && <h2>Whoops, something went wrong: error.</h2>}
            </Main>
    )
};































