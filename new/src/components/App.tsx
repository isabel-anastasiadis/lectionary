import ReadingsPageContainer from "./readings/ReadingsPageContainer";
import AboutPage from "./about/AboutPage";
import { Route, Switch } from "react-router-dom";
import SettingsPage from "./settings/SettingsPage";
import { useState } from "react";
import { Theme } from "../data/interfaces";

const App = () => {
  const [theme, setTheme] = useState(Theme.MORNING);
  function updateTheme(theme: Theme): void {
    setTheme(theme);
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <ReadingsPageContainer
            {...props}
            updateTheme={updateTheme}
            theme={theme}
          />
        )}
      />
      <Route path="/about" component={AboutPage} />
      <Route path="/settings" component={SettingsPage} />
    </Switch>
  );
};

export default App;
