import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"
import { useTitle } from '../hooks/useTitle'
import { Card } from "../components/Card";

export const Search = ({ apiPath }) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies } = useFetch(apiPath, queryTerm)

  useTitle(`Search results for ${queryTerm}`)
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-lg text-black text-lg dark:text-white">
          {movies.length===0 ? `No Result found for '${queryTerm}'`:`Result for '${queryTerm}'` }
        </p>
      </section>

      <section className="max-w-7xl mx-auto ">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) =>
            <Card key={movie.id} movie={movie} />
          )}
        </div>
      </section>
    </main >
  )
}