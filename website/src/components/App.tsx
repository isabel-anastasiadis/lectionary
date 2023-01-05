import { styled, dark, font } from "../stitches.config";
import ReadingsPageContainer from "./readings/ReadingsPageContainer";
import AboutPage from "./about/AboutPage";
import { Route, Routes } from "react-router-dom";
import SettingsPage from "./settings/SettingsPage";
import { useState } from "react";
import { Theme } from "../data/interfaces";
import { getTodaysDateKey } from "../data/dateKeyService";
import { pickDefaultTheme } from "../data/themeService";
import Footer from "./footer/Footer";

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

const App = () => {
  const [theme, setTheme] = useState(pickDefaultTheme()); 
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
      <ContentWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <ReadingsPageContainer
                theme={theme}
                updateTheme={updateTheme}
                dateKey={dateKey}
                updateDateKey={updateDateKey}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </ContentWrapper>
      <Footer links={ [{to: "/about", label: "About"}] }/>
    </ThemeWrapper>
  );
};

export default App;
