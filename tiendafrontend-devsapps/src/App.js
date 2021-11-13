import React from 'react';
import './App.css';
import CreateProduct from './components/Products/CreateProduct'; 
import ReadProduct   from './components/Products/ReadProduct';
import UpdateProduct from './components/Products/UpdateProduct';

import CreateSale from './components/Sales/CreateSale';
import DetailSale  from './components/Sales/DetailSale';
import ReadSale from './components/Sales/ReadSale';
import UpdateSale from './components/Sales/UpdateSale';
 


import CreateUsers from './components/Users/CreateUsers';
import ReadUsers from './components/Users/ReadUsers';
import UpdateUsers from './components/Users/UpdateUsers';


import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'; 

function App() {   
  return (
    
    <>
              
      <Router> <div className="main">   
   

       <Route exact path='/createprod' component={CreateProduct}/> 
       <Route exact path='/readprod' component={ReadProduct} /> 
        <Route exact path='/updateprod' component={UpdateProduct} />

        <Route exact path='/createsale' component={CreateSale}/> 
        <Route exact path='/detailsale' component={DetailSale} />
       <Route exact path='/readsale' component={ReadSale} /> 
        <Route exact path='/updatesale' component={UpdateSale} />

        <Route exact path='/createusers' component={CreateUsers} />
        <Route exact path='/readusers' component={ReadUsers} />
        <Route exact path='/updateusers' component={UpdateUsers} />
   
        <Route exact path='/Home' component={Home} />
       
      </div>        
    </Router>
    </>
  );
}
export default App;