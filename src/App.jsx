import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import AdminHome from './admin-pages/AdminHome';
import Login from './admin-pages/Login';
import Signup from './admin-pages/Signup';
import Createpost from './admin-pages/CreatePost';
import MyBlogs from './admin-pages/MyBlog';
import AdminNavbar from './components/AdminNavbar';

// USER PAGES
import Unavbar from './userComponents/Unavbar';
import Uhome from './user-pages/Uhome';
import Uabout from './user-pages/Uabout';
import Ublogs from './user-pages/Ublogs';
import Ulogin from './user-pages/Ulogin';
import Usignup from './user-pages/Usignup';

function App() {
  return (
      <Routes>
        {/* Admin routes */}
        <Route path= '/adminpage' element= {<> <AdminNavbar /> <AdminHome/></> } />
        <Route path= '/login' element= { <Login/> } />
        <Route path= '/signup' element= { <Signup/> } />
        <Route path= '/logout' element= { <> <AdminNavbar /> <AdminHome /> </> } />
        <Route path= '/new-post' element= { <><AdminNavbar/> <Createpost/></> } />
        <Route path= '/myblogs' element= { <> <AdminNavbar/> <MyBlogs/></> } />
        <Route path= '/back' element= { <> <AdminNavbar/> <AdminHome/></> } />


        {/* Users routes */}
        
        <Route path= '/' element= { <> <Unavbar /> <Uhome/> </> } />
        <Route path= '/userAbout' element= { <> <Unavbar /> <Uabout/> </> } />
        <Route path= '/userBlogs' element= { <> <Unavbar /> <Ublogs/> </> } />
        <Route path= '/userLogin' element= { <> <Unavbar /> <Ulogin/> </> } />
        <Route path= '/userSignup' element= { <> <Unavbar /> <Usignup/> </> } />
        <Route path= '/back' element= { <> <Unavbar /> <Uhome/> </> } />
        <Route path= '/signout' element= { <> <Unavbar /> <Uhome/> </> } />
      </Routes>
  )
}

export default App
