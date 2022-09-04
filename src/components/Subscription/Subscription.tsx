import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTrailer } from '../../fetchApi/fetchApi';
import { toast } from 'react-hot-toast';
import { TrailerBox } from './Subsription.styled';
import ReactPlayer from 'react-player';
import Loader from '../Loader';




export function StreamingService() {
    const [trailer, setTrailer] = useState<{ [key: string]: string | any } | null>(null);
    const { moviesId } = useParams();
    const [loading, setLoading] = useState<boolean>(false);

    const url = 'https://www.youtube.com/watch?v=' + trailer;


    useEffect(() => {
        setLoading(true);

        fetchTrailer(moviesId).then(data => {
            const { data: { results } } = data;          


            setTrailer(results[0].key);
            
        })
            .catch(error => {
                console.log('Whoops, something went wrong...', error);
                return toast.error('There are no treilers...');
            })
        
            .finally(() => setTimeout(() => {
                setLoading(false);
            }, 1500));
        
    }, [moviesId]);

    return (
        <>
        {trailer && (
             <TrailerBox>
                {loading && <Loader />}
                        <ReactPlayer
                            url={url}
                            controls
                        />
            </TrailerBox>    
        )}
        </>
        
    )

}