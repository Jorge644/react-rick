import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
