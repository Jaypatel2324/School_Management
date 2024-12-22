// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Admissions', href: '/admissions' },
//     { name: 'Results', href: '/results' },
//     { name: 'Faculty', href: '/faculty' },
//     { name: 'Gallery', href: '/gallery' },
//     { name: 'Resources', href: '/resources' },
//     { name: 'Calendar', href: '/calendar' },
//     { name: 'Contact', href: '/contact' },
//     // {name:'Login',href:'/login'},
//     // {name:'Sign up',href:'/signin'}
//   ];

//   return (
//     <nav className="bg-white shadow-lg">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <GraduationCap className="h-8 w-8 text-indigo-600" />
//               <span className="ml-2 text-xl font-bold text-gray-900">Modern Academy</span>
//             </Link>
            
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-4">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`px-3 py-2 rounded-md text-sm font-medium ${
//                   location.pathname === item.href
//                     ? 'text-indigo-600 bg-indigo-50'
//                     : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <button
//               className="ml-4 p-2 text-gray-600 hover:text-indigo-600 relative"
//               aria-label="Notifications"
//             >
//               <Bell className="h-5 w-5" />
//               <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className={`block px-3 py-2 rounded-md text-base font-medium ${
//                   location.pathname === item.href
//                     ? 'text-indigo-600 bg-indigo-50'
//                     : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
//                 }`}
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
   
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Results", href: "/results" },
    { name: "Faculty", href: "/faculty" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Calendar", href: "/calendar" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900">
              Modern Academy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium ${
                  location.pathname === item.href
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  location.pathname === item.href
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;