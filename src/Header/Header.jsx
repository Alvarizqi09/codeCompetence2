import logo from '/src/assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='w-full h-screen bg-fixed bg-[url("/src/assets/background.png")] bg-no-repeat bg-cover'>
        <nav className='shadow-md bg-white sticky rounded-xl w-full py-3 z-10 flex justify-between top-0'>
            <div className='flex justify-start items-center space-x-10 text-black font-semibold'>
                <a className='w-24 h-8 ml-10' href='/'>
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className='flex justify-center items-center space-x-10 ml-12 text-black font-semibold'>
                <a className='p-2.5 no-underline cursor-pointer hover:bg-sky-800 hover:text-white rounded-xl' href='/login'>
                    Home
                </a>
                <a className='p-2.5 no-underline cursor-pointer hover:bg-sky-800 hover:text-white rounded-xl' href='/login'>
                    About
                </a>
                <a className='p-2.5 no-underline cursor-pointer hover:bg-sky-800 hover:text-white rounded-xl' href='/login'>
                    Services
                </a>
                <a className='p-2.5 no-underline cursor-pointer hover:bg-sky-800 hover:text-white rounded-xl' href='/login'>
                    Contact
                </a>
            </div>
            <div className='flex justify-end items-center space-x-10 mr-10 text-black font-semibold'>
                <a className= 'p-2.5 w-[90px] text-center rounded-xl no-underline cursor-pointer hover:bg-sky-800 hover:text-white text-sky-500'>
                    Login
                </a>
                <a className='p-2.5 w-[90px] text-center rounded-xl no-underline cursor-pointer bg-sky-600 hover:bg-sky-800 text-white'>
                    Sign Up
                </a>
            </div>
        </nav>
        <section className='mt-40'>
            <div className='grid grid-row-2 gap-4 place-content-center text-center font-semibold place-content-center'>
                <h3 className='text-4xl font-semibold text-gray-700 mb-6'>
                    Hello we are, Eventify!
                </h3>
                <p className='text-lg text-gray-600 mb-6'>
                    Temukan Keseruan dalam Sentuhan Satu Klik.
                </p>
                <div className="grid gap-4 place-items-center">
                    <a className='p-3 w-[150px]  rounded-full text-decoration-none text-white  bg-sky-600 hover:bg-sky-800 hover:text-white'>
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header