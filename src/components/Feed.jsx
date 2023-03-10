import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Sidebar, Videos } from "../components";
import { FetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('ReactJS');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
        setVideos(data.items)
      );
    }
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "coulmn", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "inherit" }}
        >
          Copyright 2023
          <Link
            className="link"
            to="https://github.com/Yehya22"
            target="_blank"
            sx={{ color: "inherit" }}
          >
            Yehya22
          </Link>
        </Typography>
      </Box>


      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {selectedCategory && (
          <>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              {selectedCategory}{" "}
              <span style={{ color: "#F31503" }}>Videos</span>
            </Typography>
            <Videos videos={videos} />
          </>
        )}
      </Box>
    </Stack>
  );
};

export default Feed;
