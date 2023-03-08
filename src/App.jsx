import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  VideoDetail,
  Feed,
  SearchFeed,
  ChannelDetail,
} from "./components";
import { Box } from "@mui/system";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import { CssBaseline } from "@mui/material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...(mode === "light" && {
        main: "#d21919",
        light: "rgb(219, 71, 71)",
        dark: "rgb(147, 17, 17)",
      }),
      ...(mode === "dark" && {
        main: "#d21919",
        light: "rgb(219, 71, 71)",
        dark: "rgb(147, 17, 17)",
      }),
    },
    secondary: {
      ...(mode === "light" && {
        main: "#f50057",
        light: "rgb(247, 51, 120)",
        dark: "rgb(171, 0, 60)",
      }),
      ...(mode === "dark" && {
        main: "#d21919",
        light: "rgb(219, 71, 71)",
        dark: "rgb(147, 17, 17)",
      }),
    },
    background: {
      ...(mode === "dark" && {
        default: "#121212",
        paper: "#121212",
      }),
      ...(mode === "light" && {
        default: "#FFF",
        paper: "#fff",
        
      }),
    },
    text: {
      ...(mode === "dark" && {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.5)",
      }),
      ...(mode === "light" && {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
      }),
    },
  },
});
const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "inherit" }}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: 0,
            right: 0,
            justifyContent: "center",
            color: "inherit",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            alignItems: "center",
            backgroundColor: "inherit",
            p: 1,
          }}
        >
          <IconButton
            sx={{
              top: 2,
              right: 0,
              left:5,
              ml: 1,
              padding: "0.2rem 0.4rem",
              border: "1px solid inherit ",
              borderRadius: "10px",
              p: 1.5,
            }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="video/:id" element={<VideoDetail />} />
          <Route path="channel/:id" element={<ChannelDetail />} />
          <Route path="search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
