import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "components/Header";
import Routes from "router/Routes";
import GlobalStyles from "styles/global";
import theme from "styles/theme/defaultTheme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="mainContainer">
          <Header />
          <Routes />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
