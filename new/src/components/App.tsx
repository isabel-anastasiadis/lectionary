import { styled, dark, font } from "../stitches.config";
import ReadingsPageContainer from "./readings/ReadingsPageContainer";
import AboutPage from "./about/AboutPage";
import Footer from "./footer/Footer";
import { Route, Switch } from "react-router-dom";
import SettingsPage from "./settings/SettingsPage";
import { useState } from "react";
import { Theme } from "../data/interfaces";
import { getTodaysDateKey } from "../data/dateKeyService";

const ThemeWrapper = styled("div", {
  background: "$background",
  fontFamily: "inter",
  height: "100%",
  display: "flex",
  flexDirection: "column"
});

const PositionWrapper = styled("div", {
  height: "100%",
  padding: "30px",
  display: "flex",
  flexDirection: "column"
});

const App = () => {
  const [theme, setTheme] = useState(Theme.MORNING); // TODO
  const [dateKey, setDateKey] = useState(getTodaysDateKey());

  function updateTheme(theme: Theme): void {
    setTheme(theme);
  }

  function updateDateKey(dateKey: string): void {
    setDateKey(dateKey);
  }

  font();

  return (
    <ThemeWrapper className={theme === Theme.EVENING ? dark : ""}>
      <PositionWrapper>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <ReadingsPageContainer
                {...props}
                theme={theme}
                updateTheme={updateTheme}
                dateKey={dateKey}
                updateDateKey={updateDateKey}
              />
            )}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </PositionWrapper>
      <Footer />
    </ThemeWrapper>
  );
};

export default App;
