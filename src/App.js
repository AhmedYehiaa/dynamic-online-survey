import React from 'react';
import {
  Route, Redirect, Switch, BrowserRouter,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import LandingPage from './containers/LandingPage';
import NotFound from './components/NotFound';
import SurveyForm from './containers/SurveyForm';
import Summary from './containers/Summary';

const App = () => {
  const title = 'Product Survey';
  const subTitle = 'Your feedback is highly appreciated';

  return (
    <div className="container">
      <Header
        title={title}
        subTitle={subTitle}
      />
      <div className="app-wrapper">
        <BrowserRouter>
          <Switch>
            <Route path="/survey" component={LandingPage} />
            <Route path="/surveyForm/:id" component={SurveyForm} />
            <Route path="/summary" component={Summary} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/survey" />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
