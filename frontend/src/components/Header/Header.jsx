// import React, { useEffect, useState } from 'react'
// import { HeaderContainer } from './header.styles';
// import Logo from '../Logo/Logo';
// import Navigation from '../Navigation/Navigation';

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => setWindowWidth(window.innerWidth);
//         window.addEventListener('resize', handleResize);

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <HeaderContainer>
//         <Logo />
//         <Navigation
//          isOpen={isOpen} windowWidth={windowWidth} toggleSidebar={toggleSidebar} />
//         </HeaderContainer>
//     );
// }

import React, { useEffect, useState } from 'react'
import { HeaderContainer } from './header.styles';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavbarTopBtn from '../NavbarTopBtn/NavbarTopBtn';
import { NavbarButtonContainer, NavigationContainer, NavigationMobileContainer } from '../Navigation/navigation.styles';
import NavbarButton from '../NavbarButton/NavbarButton';
import { closeNavIcon, openNavIcon } from '../../constants/icons';
import NavbarBottom from '../NavbarBottom/NavbarBottom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeaderContainer>
            <Logo />
            {(windowWidth <= 1030) && (
                <NavbarButtonContainer>
                    <NavbarButton icon={isOpen ? closeNavIcon.icon : openNavIcon.icon} toggleSidebar={toggleSidebar} />
                </NavbarButtonContainer>
            )}
            {(windowWidth <= 1030) ? (
                <NavigationMobileContainer isOpen={isOpen}>
                    {isOpen && (
                        <>
                        <NavbarBottom windowWidth={windowWidth} toggleSidebar={toggleSidebar}/>
                        <NavbarTopBtn windowWidth={windowWidth} />
                        </>
                    )}
                </NavigationMobileContainer>
            ) : (
                <>
                    <NavbarBottom windowWidth={windowWidth} toggleSidebar={toggleSidebar}/>
                    <NavbarTopBtn windowWidth={windowWidth} />
                </>
            )}

        </HeaderContainer>
    );
}
