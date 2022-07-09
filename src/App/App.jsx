import React from "react";
import { ThemeProvider } from 'styled-components'
import Toggle from '../components/Toggle'
// import Routes from '../Routes'
import { GlobalStyle } from '../styles/globalStyles'
import { lightTheme, darkTheme } from '../styles/theme'
import {useDarkMode} from '../hooks/useDarkMode'
import { Container,  WrapperTitleDark, WrapperTitleLight, WrapperToggle } from './styles'
import HomePage from "../pages/HomePage";

function App() {

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;



  return (
    <Container>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <HomePage/>
        {/* <WrapperTitleLight >

        {theme === 'light' && <span >Light theme</span>}
        </WrapperTitleLight> */}
       {/* <WrapperToggle>

        <Toggle theme={theme} toggleTheme={themeToggler}/>
       </WrapperToggle> */}
       {/* <WrapperTitleDark>

       {theme === 'dark' && <span >Dark theme</span>}
       </WrapperTitleDark> */}


        {/* <Routes/> */}
       </ThemeProvider>
    </Container>



  )
}

export default App
