// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar(props) {
//   const openMenu = () => {
//     document.querySelector(".sidebar").classList.add("open");
//   };

//   const closeMenu = () => {
//     document.querySelector(".sidebar").classList.remove("open");
//   };
//   return (
//     <React.Fragment>
//       <nav className="navbar head">
//           <div className="container-fluid">
            
//             <div className="navbar-header">
//               <button onClick={openMenu} className="">
//                   <span class="">&#9776;</span>
//               </button>
//                 <Link to = "/" className="navbar-brand text-white"><h1>WemmieScents</h1></Link>
//             </div>
        
//             <ul className="navbar-expand d-flex mt-2 ">
//               <Link to="/cart.html" className="text-white">Cart</Link>
//               &nbsp; &nbsp;
//               <Link to = "/signin.html" className="text-white">Sign In</Link>
//               &nbsp; &nbsp;              
//               <Link to = "/signup.html" className="text-white">Sign Up</Link> 
//               &nbsp; &nbsp;
//               <Link to = "/about.html" className="text-white">About us</Link>
//             </ul>
//         </div>
//       </nav>

//       <aside className="sidebar" id="sidebar">
//         <h3>Shopping Categories</h3>
//         <button className="sidebar-close-button" onClick={closeMenu}>
//           &times;
//         </button>
//         <ul>
//           <li>
//             <a href="index.html">Zara man</a>
//           </li>
//           <li>
//             <a href="index.html">Storm spray</a>
//           </li>
//           <li>
//             <a href="index.html">Victoria secret</a>
//           </li>
//           <li>
//             <a href="index.html">Bombshell</a>
//           </li>
//         </ul>
//       </aside>
//     </React.Fragment>
//   );
// }
// export default Navbar;
