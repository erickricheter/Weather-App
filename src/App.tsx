import { ThemeProvider } from "styled-components";
import Search from "./pages/Search/Search";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Search></Search>
      </div>
    </ThemeProvider>
  );
}
export default App;
