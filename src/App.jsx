import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  VideoDetail,
  Feed,
  SearchFeed,
  ChannelDetail,
} from "./components";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Opacity } from "@mui/icons-material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{ backgroundColor: "#000" }}>
            <Navbar />
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                top: 0,
                right: 0,
                justifyContent: "center",
                color: "#fff",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                alignItems: "center",
                backgroundColor: "#000",
                p: 0.5,
              }}
            >
              <IconButton
                sx={{ ml: 1 }}
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
