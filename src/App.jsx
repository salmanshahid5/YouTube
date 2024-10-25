import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/Signup";
import { darkTheme, lightTheme } from "./utils/Theme";
import {  Routes, Route } from "react-router-dom";
import Video from "./pages/Videos";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg}; // Ensure 'bg' is defined in your theme
`;

const Wrapper = styled.div`
  padding: 22px 60px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route index element={<Home />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="video/:id" element={<Video />} />
            </Routes>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
