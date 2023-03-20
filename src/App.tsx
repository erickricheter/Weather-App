import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { WeatherDetailProvider } from "./context/WeatherDetailContext";
import Search from "./pages/Search/Search";
import WeatherDetails from "./pages/WeatherDetails/WeatherDetails";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <BrowserRouter>
          <WeatherDetailProvider>
            <Routes>
              <Route index element={<Search />} />
              <Route path="weatherDetails" element={<WeatherDetails />} />
              <Route path="*" element={<Search />} />
            </Routes>
          </WeatherDetailProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
