import React from 'react';
import { Home } from './Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { Switch, Route } from 'react-router-dom';
import { About } from './About';
import { MyTodoList } from './MyTodoList';
import { NotFound } from './404';
import { Nav } from './Nav';
const App: React.FC = () => {
  
  return <>
    <Nav/>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact >
        <Home/>
      </Route>
      <Route path='/about' exact >
        <About/>
      </Route>
      <Route path='/todo/:todoSlug'>
        <MyTodoList/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
    </BrowserRouter>
  </>
}

export default App;