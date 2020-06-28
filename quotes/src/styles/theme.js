import React from "react";
import { createMuiTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"


export default theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const quoteFont = "'Mallana', 'Times', 'serif'"
  const authorFont = "'Cormont Garamond', 'Garamond'"

  return React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
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
      [prefersDarkMode],
    )
  
}