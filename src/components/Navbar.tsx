import {NavLink} from 'react-router-dom'
// import {ExchangeRate} from './ExchangeRate'

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="mx-auto max-w-7xl px-2 flex h-16 items-center justify-between">
            
          <NavLink to="/" end>
            <h1 className="uppercase">Exchange rate&nbsp;
              <span className="text-violet-400">converter</span>
            </h1>
          </NavLink>

          <div className="flex space-x-4">
            <NavLink to="/" end className="hover:bg-gray-700 px-3 py-2 rounded-md">Home</NavLink>
            <NavLink to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</NavLink>
          </div>
          
          {/* <ExchangeRate /> */}
      </div>
    </nav>
  )
}