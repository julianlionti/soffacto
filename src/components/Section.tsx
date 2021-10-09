import { styled } from "@mui/system";
import { PropsWithChildren } from "react";

const Root = styled("div")(() => ({
  height: "100vh",
}));

type Props = PropsWithChildren<unknown>;
export const Section = (props: Props) => {
  const { children } = props;
  return <Root>{children}</Root>;
};
