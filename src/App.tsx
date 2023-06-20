import React from 'react';

import { useRoutes } from 'react-router-dom';
import { routers } from './routers/Index'
import "./App.scss";
const App: React.FC = () => {

//   <div className="App">

// </div>
{/* <div>https://www.jianshu.com/p/9be34e058c3c</div>; */}
  return   useRoutes(routers);
  
};

export default App;