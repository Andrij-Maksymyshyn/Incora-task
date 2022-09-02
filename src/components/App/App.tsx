import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";


const Layout = lazy(() => import('../Layout'));
const Cast = lazy(() => import('../CastInfo'));
const Reviews = lazy(() => import('../ReviewsInfo'));

const HomePage = lazy(() =>
  import('../../pages/HomePage').then(module => ({ default: module.HomePage })));
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage').then(module => ({ default: module.MoviesPage })));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage').then(module => ({ default: module.MovieDetailsPage })));  





export default function App() {
   return (
    <Suspense fallback=''>
     <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:moviesId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>             
           <Route path="*" element={<Navigate to="/" />} />
        </Route> 
      </Routes>
      </Suspense>
      
  )

  
};


