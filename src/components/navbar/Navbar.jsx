import { useState } from 'react';
import './navbarStyles.css';

const navbarOptions = [
    { text: 'Home', route: '#home' },
    { text: 'about', route: '#about' },
    { text: 'contact', route: '#contact' }
]

export const Navbar = () => {

    const [ activeLink, setActiveLink ] = useState( null );

    return (
        <div className='navContainer'>
            <nav className="nav">

                <ul>
                    {
                        navbarOptions.map(( option, index ) => (
                            <li
                                key={ index }
                                onClick={ () => setActiveLink( index ) }
                            >
                                <a 
                                    href={ option.route }
                                    className={ `navLinks ${ activeLink === index ? 'active' : '' }` }
                                >{ option.text }</a>
                            </li>
                        ) )
                    }
                </ul>

            </nav>
        </div>
    )
}
