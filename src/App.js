import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home'
import Landing from './Components/Landing';
import Dashboard from './Components/Dashboard';
import Analytics from './Components/Analytics';
import Admin from './Components/Admin';
import React from 'react';
import ProtectedRoute from './Components/ProtecedRoute';
import { Button, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';

function App() {

  const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin', permissions: ['analyze'], roles: ['admin'] });
  const handleLogout = () => setUser(null);

  return (

    <Typography className='main' component={'div'} variant={'body2'}>
      <div className='title'>
        <h1>Protected Routes <SecurityIcon /> </h1>
        <div className='signIn'>
          {user ? (
            <Button
              className='signOut'
              variant='contained'
              onClick={handleLogout}>
              Sign Out <LockIcon />
            </Button>
          ) : (
            <Button
              className='signIn'
              variant='contained'
              onClick={handleLogin}>Sign In <LockOpenIcon />
            </Button>
          )}
        </div>
      </div>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="landing" element={<Landing />} />
          <Route path="home" element={<ProtectedRoute isAllowed={!!user}>
            <Home />
          </ProtectedRoute>} />
          <Route path="dashboard" element={<ProtectedRoute isAllowed={!!user}>
            <Dashboard />
          </ProtectedRoute>} />
          <Route path="analytics" element={<ProtectedRoute isAllowed={!!user}>
            <Analytics />
          </ProtectedRoute>} />
          <Route path="admin" element={<ProtectedRoute isAllowed={!!user}>
            <Admin />
          </ProtectedRoute>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </Typography>
  );
}

const Navigation = () => (

  <nav className='nav'>
    <Link to="/landing">Landing</Link>
    <Link to="/home">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/admin">Admin</Link>
  </nav>
);


export default App;
