import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from '../../fetchApi/fetchApi';
import { toast } from 'react-hot-toast';
import Loader from '../Loader';
import { MainBox, LiItem, Img, Div1, Div2, P, P2 } from './CastInfo.styled';

const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';


function Cast() {
    const [castInfo, setCastInfo] = useState<{ [key: string]: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const { moviesId } = useParams();
    
   


    useEffect(() => {

        setLoading(true);

           fetchMovieCredits(moviesId)
               .then(data => {
                   
                    const { data: { cast } } = data;
                
                
                   setCastInfo(cast);

                                      
                   if (cast.length === 0) {
    return toast.error('There is no information about the cast...');
                   };
            })
            .catch(error => {
                console.log('Whoops, something went wrong...', error);
                 return toast.error('There is no information about the cast...');
            })
        .finally(() => {
            setTimeout(() => {
              setLoading(false);
            }, 1000)
          });
            
    }, [moviesId]);    


    return (
        <>
            {loading && <Loader />}
            {castInfo && (                
                    <MainBox>
                         {castInfo.map(({cast_id, name, character, profile_path}) => (
                        <LiItem key={cast_id}>
                                 
                            <Div1>
                                <Img src={profile_path ? 'https://image.tmdb.org/t/p/w500' + profile_path : noPosterImg} alt={name} />
                            </Div1>
                            <Div2>
                                 <P>{name}</P>
                                 {character && <P2>Character: {character}</P2>}
                            </Div2>
                                
                        </LiItem>
                    ))}
                   </MainBox>
                
            )}

        </>

    )
};

export default Cast;