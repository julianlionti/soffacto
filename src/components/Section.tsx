import { styled } from "@mui/system";
import { PropsWithChildren, useCallback } from "react";

type StyleProps = Partial<{ noOffset: boolean }>;
const Root = styled("div")<StyleProps>(({ noOffset }) => ({
  height: "100vh",
  paddingTop: noOffset ? 0 : 80,
  paddingLeft: 32,
  paddingRight: 32,
}));

const Content = styled("div")`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

type Props = PropsWithChildren<Partial<{ center: boolean; noOffset: boolean }>>;
export const Section = (props: Props) => {
  const { children, center, noOffset } = props;

  const renderChildren = useCallback(() => {
    if (center) return <Content>{children}</Content>;

    return children;
  }, []);

  return <Root noOffset={noOffset}>{renderChildren()}</Root>;
};
