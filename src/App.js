import React from 'react';
import { 
  useRoutes,
  BrowserRouter as Router, 
} from 'react-router-dom';
import LandingPage from 'pages/LandingPage';

import './assets/scss/style.scss';

const AppRouter = () => {
  let routes = useRoutes([
    {path: "/", element: <LandingPage />},
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Router> 
        {/* <Route path="/" component={LandingPage}></Route> */}
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
