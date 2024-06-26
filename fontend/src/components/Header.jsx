import {Link, useLocation} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import {useSelector} from 'react-redux'

function Header() {
    const {currentUser} = useSelector(state=>state.user)
    const location = useLocation().pathname
  return (
    <div className='bg-slate-200 p-4 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto '>
            <Link to='/'>
                <h1 className='text-sm sm:text-xl font-semibold' ><span className='bg-gradient-to-r from-indigo-500 to-red-500 text-white rounded-md p-1 w-3'>Queen</span>Estate</h1>
            </Link>
            <form className='flex items-center bg-slate-100 p-2 rounded-lg px-2'>
                <input type="text" placeholder='Search..' className='bg-transparent outline-none w-28 sm:w-64 p-1 ' />
                <FaSearch className='text-slate-500'/>
            </form>
            <ul className='flex items-center gap-7 font-semibold text-slate-700'>
                <Link to='/'>
                    <li className={`hidden sm:inline hover:underline ${location==="/"? "text-red-500" : ""}`}>Home</li>
                </Link>
                <Link to='/about'>
                    <li className={`hidden sm:inline hover:underline ${location==="/about"? "text-red-500" : ""}`}>About</li>
                </Link>
                {
                    currentUser? (
                        <Link to='/profile'>
                           <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='size-9 rounded-full object-cover' /> 
                        </Link>
                    ):(
                        <Link to='/sign-in'>
                           <li className='hover:underline'>Sign In</li>
                        </Link>
                    )
                }
            </ul>
        </div>
        
    </div>
  )
}

export default Header