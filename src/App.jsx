//import routes componant for routing
import {Routes, Route} from 'react-router'

//import the pages
import Home from './pages/Home'
//import layout and other componants
import { Layout } from './layout/Layout'


function App() {

  return (
    <Layout>
    <Routes>
      <Route path="/" Component={Home} />
      
    </Routes>
    </Layout>
  )
}

export default App
