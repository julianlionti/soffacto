import { styled } from "@mui/system";
import { Section } from "./Section";
import Video from "url:../assets/videos/video.mp4";

const Root = styled("video")`
  height: 100%;
  width: 100%;
  object-fit: fill;
  position: absolute;
`;

export const VideoBg = () => {
  return (
    <Section>
      <Root autoPlay muted loop src={Video} />
    </Section>
  );
};
