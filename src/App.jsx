import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import TaskManager from './Components/Projects/TaskManager';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldAnimate =
    location.pathname === '/projects/taskmanager' ||
    location.state?.fromTaskManager;

  useEffect(() => {
    if (location.state?.fromTaskManager) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={shouldAnimate ? location.pathname : 'no-transition'}>
        <Route path='/*' element={<Dashboard />} />
        <Route path='/projects/taskmanager' element={<TaskManager />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
