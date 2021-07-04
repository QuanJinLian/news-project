import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {NavLink, Switch} from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import PageNavigation from "./component/Navigation/PageNavigation";
import News from "./component/News/News";
import './App.css';
import routes from "./api/routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";


function App() {
    let num;

  return (
      <>
          <header>
              <div>여기 헤더</div>
          </header>
          <nav>
            <Navigation/>
          </nav>
          <section className="back_section">
              <div className="section">
                  <Switch>
                      {routes.map((route) => (
                          <RouteWithSubRoutes key={num++} {...route}/>
                      ))}
                  </Switch>
                  {/*<News keyword="Country" value="kr" />*/}
              </div>
          </section>
      </>
  );
}

export default App;
