
import Header from './header/Header';
import ReadingsPage from './readings/ReadingsPage';
import AboutPage from './about/AboutPage';
import {Route, Switch} from 'react-router-dom';
import SettingsPage from './settings/SettingsPage';

const App = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={ReadingsPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/settings" component={SettingsPage}/>
      </Switch>
    </>
  );
}

export default App;
