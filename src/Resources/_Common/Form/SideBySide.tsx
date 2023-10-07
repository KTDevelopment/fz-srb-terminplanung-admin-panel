import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode[];
};
export const SideBySide: FC<Props> = ({ children }) => (
  <Box display="flex">
    <Box flex={1} mr="0.5em">
      {children[0]}
    </Box>
    <Box flex={1} ml="0.5em">
      {children[1]}
    </Box>
  </Box>
);
