import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Projectp from './projects/Projectp';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn ajman 
//         </a>
//         <br />
//         <h6> This is ajman zone you can use it vany time you want </h6>
//       </header>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    // <div className="App">
    //   <h1>Hello World!</h1>
    //   <h2> This is our red line </h2>
      
    // </div>
  //   <blockquote cite="Benjamin Franklin">
  //     Tell me and I forget, teach me and I may remember, involve me and I learn.
  //  </blockquote>
  <div className="container"> 
  <ProjectsPage />
  <br/>
  < Projectp />
  </div>
   
  );
}

export default App;
