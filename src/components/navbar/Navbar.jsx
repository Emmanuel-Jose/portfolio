import { useState } from 'react';

const navbarOptions = [
    { text: 'Home', route: '#home' },
    { text: 'about', route: '#about' },
    { text: 'contact', route: '#contact' }
]

export const Navbar = () => {

    const [ activeLink, setActiveLink ] = useState( null );

    return (
        <div className='w-full flex justify-center items-center fixed top-3 md:top-6'>
            <nav className="w-11/12 h-11 md:h-20 bg-yellow rounded-3xl shadow-navbar-mobile md:shadow-navbar">

                <ul className='flex h-full justify-center md:justify-end gap-5 md:gap-9 items-center md:mr-9'>
                    {

                        navbarOptions.map(( option, index ) => (
                            <li
                                key={ index }
                                onClick={ () => setActiveLink( index ) }
                                className={ `font-black italic text-lg md:text-4xl text-black cursor-pointer ${ ( activeLink ) === index ? 'text-white drop-shadow-navbar-text' : '' }` }
                            >
                                <a href={ option.route }>{ option.text }</a>
                            </li>
                        ))
                    }
                </ul>

            </nav>
        </div>
    )
}
