import { styled, dark } from "../stitches.config";
import ReadingsPageContainer from "./readings/ReadingsPageContainer";
import AboutPage from "./about/AboutPage";
import Footer from "./footer/Footer";
import { Route, Switch } from "react-router-dom";
import SettingsPage from "./settings/SettingsPage";
import { useState } from "react";
import { Theme } from "../data/interfaces";

const ThemeWrapper = styled("div", {
  background: "$background",
  fontFamily: "inter",
  height: "100%",
});

const PositionWrapper = styled("div", {
  height: "100%",
  padding: "30px",
  marginBottom: "-55px", // the footer height.  TODO fix this, this is gross. Might not even need two wrappers if we do it right with flex or grid
});

const App = () => {
  const [theme, setTheme] = useState(Theme.MORNING);
  function updateTheme(theme: Theme): void {
    setTheme(theme);
  }

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
                updateTheme={updateTheme}
                theme={theme}
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
