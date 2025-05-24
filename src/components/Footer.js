export const Footer = () => {
  return (

    <footer className="p-2 bg-white shadow md:flex md:items-center md:justify-between  dark:bg-gray-800">
      <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Movie House. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/abhishek_bhowmick93/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abhishek-bhowmick-b97b17112/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
          </li>
          {/* <li>
            <a href="#" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Github</a>
          </li> */}
        </ul>
      </div>
    </footer>

  )
}
