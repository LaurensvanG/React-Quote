import React from "react";
import { createMuiTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"



export default theme => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  return React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    )
  
}