// import React from 'react'
// import { NavbarButtonContainer, NavigationContainer, NavigationMobileContainer } from './navigation.styles';
// import NavbarBottom from '../NavbarBottom/NavbarBottom';
// import { closeNavIcon, openNavIcon } from '../../constants/icons';
// import NavbarButton from '../NavbarButton/NavbarButton';
// import NavbarTop from '../NavbarTop/NavbarTop';


// export default function Navigation({ isOpen, windowWidth, toggleSidebar }) {

//   console.log('windowWidth:', windowWidth);
// console.log('isOpen:', isOpen);

//     return (
//         <>
//           {(windowWidth <= 1030) && (
//             <NavbarButtonContainer>
//               <NavbarButton icon={isOpen ? closeNavIcon.icon : openNavIcon.icon} toggleSidebar={toggleSidebar} />
//             </NavbarButtonContainer>
//           )}
//           {(windowWidth <= 1030) ? (
//             <NavigationMobileContainer isOpen={isOpen}>
//               {isOpen && (
//                 <>
//                   <NavbarBottom windowWidth={windowWidth} toggleSidebar={toggleSidebar}/>
//                   <NavbarTop windowWidth={windowWidth} />
//                 </>
//               )}
//             </NavigationMobileContainer>
//           ) : (
//             <NavigationContainer>
//               <NavbarTop windowWidth={windowWidth}/>
//               <NavbarBottom windowWidth={windowWidth} toggleSidebar={toggleSidebar}/>
//             </NavigationContainer>
//           )}
//         </>
//       );
    
// }


import React from 'react';
import { NavbarButtonContainer, NavigationContainer, NavigationMobileContainer } from './navigation.styles';
import NavbarBottom from '../NavbarBottom/NavbarBottom';
import { closeNavIcon, openNavIcon } from '../../constants/icons';
import NavbarButton from '../NavbarButton/NavbarButton';
import NavbarTop from '../NavbarTop/NavbarTop';

export default function Navigation({ isOpen, windowWidth, toggleSidebar }) {
    return (
        <>
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
                  {/* <NavbarTop windowWidth={windowWidth} /> */}
                </>
              )}
            </NavigationMobileContainer>
          ) : (
            <NavigationContainer>
              {/* <NavbarTop windowWidth={windowWidth}/> */}
              <NavbarBottom windowWidth={windowWidth} toggleSidebar={toggleSidebar}/>
            </NavigationContainer>
          )}
        </>
    );
}
