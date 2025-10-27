import { Route, Routes } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Write from './pages/Read'
import Read from './pages/Read'

function App() {

  return (
    <>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/read/:id' element={<Read/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
