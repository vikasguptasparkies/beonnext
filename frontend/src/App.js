import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PagePage from './pages/PagePage';
import MediaPage from './pages/MediaPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/posts" component={PostPage} />
            <Route path="/pages" component={PagePage} />
            <Route path="/media" component={MediaPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/dashboard" component={DashboardPage} />
          </Switch>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
