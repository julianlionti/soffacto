import { styled } from "@mui/system";
import { Section } from "./Section";
import { Typography } from "@mui/material";
import { useT } from "../translations";
import Video from "url:../assets/videos/video.mp4";
import PreloadImg from "url:../assets/images/preload.jpg";
import { useEffect, useRef } from "react";

const Root = styled("video")`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;

const Content = styled("div")`
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const VideoBg = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const t = useT();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.onloadeddata = () => {
        videoRef.current?.play();
      };
    }
  }, []);

  return (
    <Section>
      <Root
        ref={(e) => (videoRef.current = e)}
        muted
        preload="none"
        poster="img/cover.jpg"
        width="300"
      >
        <source src={Video} type="video/mp4" />
      </Root>
      <Content>
        <Typography variant="h1">Soffacto</Typography>
        <Typography variant="h4">{t("description")}</Typography>
      </Content>
    </Section>
  );
};
