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
  flexDirection: "column",

});

const ContentWrapper = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "30px"
});

const InDevBanner = styled("div", {
  backgroundColor: "mediumpurple",
  padding: "10px"
})

const App = () => {
  const [theme, setTheme] = useState(Theme.MORNING); // TODO auto calculate
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
      <InDevBanner>Still in development</InDevBanner>
      <ContentWrapper>
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
        <Footer />
      </ContentWrapper>

    </ThemeWrapper>
  );
};

export default App;
