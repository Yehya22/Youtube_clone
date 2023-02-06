import React from "react";
import { Stack, Box } from "@mui/system";
import { VideoCard, ChannelCard } from "./";
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos && videos.length > 0
        ? videos.map((item, idx) => (
            <Box key={idx}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          ))
        : null}
    </Stack>
  );
};

export default Videos;
