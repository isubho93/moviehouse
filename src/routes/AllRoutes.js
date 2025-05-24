import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetail, PageNotFound, Search } from '../pages';

export const AllRoutes = () => {
    return (
        <div className="bg-white dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />}></Route>
                <Route path="movie/:id" element={<MovieDetail />}></Route>
                <Route path="movie/popular" element={<MovieList apiPath="movie/popular" title="Popular" />}></Route>
                <Route path="movie/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}></Route>
                <Route path="movie/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}></Route>
                <Route path="search" element={<Search apiPath="search/movie" />}></Route>
                <Route path="*" element={<PageNotFound  />}></Route>
            </Routes>
        </div>
    )
}