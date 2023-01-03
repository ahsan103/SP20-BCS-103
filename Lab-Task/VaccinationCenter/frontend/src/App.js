import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import Footer from "./Layout/Footer";
import { ThemeProvider } from '@mui/material'
import theme from "./Theme/Theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
