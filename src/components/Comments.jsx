import { Box, Stack, Typography } from "@mui/material";
import { FetchFromAPI } from "../utils/fetchFromAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
const Comments = () => {
  const [comments, setComments] = useState(null);
  const { id } = useParams();
  const theme = useTheme();

  useEffect(() => {
    FetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) =>
      setComments(data.items)
    );
  }, [id]);

  return (
    <Stack>
      <Box
        sx={{
          mt: 3,
          backgroundColor:
            theme.palette.mode === "dark" ? "inherit" : "inherit",
        }}
      >
        {comments &&
          comments.map((comment) => (
            <Box key={comment.id}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#343a40",
                  ml:1.5,
                  mt:1
                }}
              >
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </Typography>

              <Typography variant="body1" sx={{ mb: 'auto',mt:2,ml:1.5 }}>
                {comment.snippet.topLevelComment.snippet.textDisplay}
              </Typography>
              <Box
                sx={{
                  height: { sx: "auto", md: "2vh" },
                  borderBottom: "1px solid #3d3d3d",
                  px: { sx: 0, md: 2 },
                }}
              ></Box>
            </Box>
          ))}
      </Box>
    </Stack>
  );
};

export default Comments;
