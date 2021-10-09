import { styled } from "@mui/system";
import { Section } from "./Section";
import Video from "url:../assets/videos/video.mp4";
import { Typography } from "@mui/material";
import { useT } from "../translations";

const Root = styled("video")`
  height: 100%;
  width: 100%;
  object-fit: fill;
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
  const t = useT();
  return (
    <Section>
      <Root autoPlay muted loop src={Video} />
      <Content>
        <Typography variant="h1">Soffacto</Typography>
        <Typography variant="h4">{t("description")}</Typography>
      </Content>
    </Section>
  );
};
