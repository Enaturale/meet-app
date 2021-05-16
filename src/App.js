import "./index.css";

//it a compoment to define different paths in the url and which components should be loaded for each path
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetUpsPage from './pages/NewMeetUps';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    //creating paths for each page, attaching to the main url localhost:3000
  <div>
    <MainNavigation/>
    <Switch>
    <Route path = '/' exact>
       <AllMeetupsPage />
    </Route>

    <Route path ='/new-meetup'>
      <NewMeetUpsPage />
    </Route>

    <Route path = '/favorities-page'>
      <FavouritesPage />
    </Route>
    </Switch>
  </div>
  );
}

export default App;
