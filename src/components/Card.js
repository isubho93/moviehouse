import { Link } from "react-router-dom"
import Backup from '../assets/images/Backup.png'

export const Card = ({ movie }) => {

  const { id, overview, title, poster_path } = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup

  return (
    <section className="py-3 ax-w-7xl mx-auto ">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m">
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        </div>
      </div>
    </section>
  )
}