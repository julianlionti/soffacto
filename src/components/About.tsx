import { HorizontalDiv } from "./common/HorizontalDiv";
import CodeInspection from "../assets/icons/code_inspection.svg";
import { Section } from "./Section";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { useT } from "../translations";
import { FlexDiv } from "./common/FlexDiv";

const ImgDiv = styled("img")`
  width: auto;
  height: 250px;
`;

export const About = () => {
  const t = useT();
  return (
    <Section center>
      <HorizontalDiv>
        <FlexDiv>
          <Typography>{t("about.title")}</Typography>
          <Typography variant="h4">{t("about.maintitle")}</Typography>
        </FlexDiv>
        <FlexDiv>
          <ImgDiv src={CodeInspection} />
        </FlexDiv>
      </HorizontalDiv>
    </Section>
  );
};
