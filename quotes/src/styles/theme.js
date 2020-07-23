import React from "react";
import { createMuiTheme } from "@material-ui/core/styles"


export default (light, dark, type) => {
  const prefersDarkMode = type === "dark" ? true : false;
  const quoteFont = "'Mallanna', 'Times', 'serif'";
  const authorFont = "'Cormont Garamond', 'Garamond', 'sans-serif'";
  

  return React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            background: {
              default: prefersDarkMode ? dark : light
            },
            text: {
              primary: prefersDarkMode ? light : dark,
              
            },
            primary: {
              main: prefersDarkMode ? dark : light,
              contrastText: prefersDarkMode ? light : dark
            },
            secondary: {
              main: prefersDarkMode ? light : dark,
              contrastText: prefersDarkMode ? dark : light
            }
            
          },
          typography: {
            h1: {
              fontFamily: quoteFont,
              fontSize: "2.5em"
            },
             h4: {
              fontFamily: authorFont,
              fontSize: "1.5em"
            }
          }
        }),
      [prefersDarkMode, light, dark],
    )
  
}