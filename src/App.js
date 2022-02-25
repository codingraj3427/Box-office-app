import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';



function App() {


  return(
  <Switch>
    <Route exact path="/">
        <Home />
   </Route>

   <Route exact path="/starred">
      <Starred />
   </Route>

   <Route exac path="/show/:id">

   </Route>

   <Route>
     <div>
       Page not Found
     </div>
   </Route>
  </Switch>
    
  );  
}

export default App;
