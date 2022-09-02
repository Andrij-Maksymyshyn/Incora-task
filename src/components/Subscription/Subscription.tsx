import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchTreiler } from '../../fetchApi/fetchApi';
import { toast } from 'react-hot-toast';
import { TreilerBox } from './Subsription.styled';
import ReactPlayer from 'react-player';




export function StreamingService() {
    const [treiler, setTreiler] = useState<{ [key: string]: string | any } | null>(null);
    const { moviesId } = useParams();
    const url = 'https://www.youtube.com/watch?v=' + treiler;


    useEffect(() => {
        fetchTreiler(moviesId).then(data => {
            const { data: { results } } = data;          


            setTreiler(results[0].key);
            
        })
            .catch(error => {
                console.log('Whoops, something went wrong...', error);
                return toast.error('There are no treilers...');
            })
    }, [moviesId]);

    return (
        <>
        {treiler && (
             <TreilerBox>
                        <ReactPlayer
                            url={url}
                            controls
                        />
            </TreilerBox>    
        )}
        </>
        
    )




}