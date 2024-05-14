// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AuthPage from './AuthPage';
import TaskForm from './TaskForm';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path='/'>
            <AuthPage />
          </Route>
          <Route>
            <TaskForm />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
