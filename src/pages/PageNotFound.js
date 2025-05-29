import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import Pagenotfound from '../assets/images/Pagenotfound.png';

export const PageNotFound = () => {

  useEffect(()=>{
    document.title= 'Page Not Found - Movie House';
  })

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4" >
          <p className='text-6xl text-black font-bold dark:text-white'>404, Oops!</p>
          <div className='max-w-xl'>
            <img className='rounded py-6' src={Pagenotfound} alt="404 Page Not Found" />
          </div>
        </div>

        <div className='flex justify-center my-4'>
          <Link to='/'>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}