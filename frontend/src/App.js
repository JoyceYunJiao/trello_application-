import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Workspaces from './pages/Workspaces';
import Navigation from './components/Navigation';
import './App.css';
import NewWorkspace from './pages/NewWorkspace';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ViewWorkspacePage from './pages/ViewWorkspacePage';
import NewBoard from './pages/NewBoard';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id='app'>
    <Router>
        <Navigation />
        
        {/* This "Routes" component allows different pages to be rendered depending on the URL */}
        <Routes>
          {/* Show workspaces page */}
          <Route path="/workspaces" element={<Workspaces/>} />
          {/* Show specific workspace page */}
          <Route path="/workspaces/:id" element={<ViewWorkspacePage/>} />
          {/* Show new board form for specific workspace page */}
          <Route path="/workspaces/:id/createBoard" element={<NewBoard/>} />
          {/* Show new workspace page */}
          <Route path="/newWorkspace" element={<NewWorkspace/>} />
          {/* Show user login page */}
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/forgotPassword" element={<ForgotPassword/>} />
          <Route path='/register' element={<Register/>} />


        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
