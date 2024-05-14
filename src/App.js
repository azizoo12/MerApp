// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from './AuthPage';
import TaskifyApp from './TaskifyApp';
import TaskForm from './TaskForm';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route exact path='/'>
            <AuthPage />
          </Route>
          <Route path='/taskify'>
            <TaskifyApp />
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
