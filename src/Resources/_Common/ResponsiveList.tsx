import React, { FC, ReactElement } from "react";
import { Theme, useMediaQuery } from "@mui/material";
import {
  CreateButton,
  ExportButton,
  FilterButton,
  List,
  NumberInput,
  SelectColumnsButton,
  TopToolbar,
} from "react-admin";

type Props = {
  primaryIdentifier?: string;
  normalList: any;
  smallList: any;
  filters?: ReactElement[];
  hasCreate?: boolean;
};

type ListActionsProps = {
  showSelectColumns: boolean;
  hasCreate: boolean;
};

const ListActions: FC<ListActionsProps> = ({
  hasCreate,
  showSelectColumns,
}) => (
  <TopToolbar>
    {showSelectColumns && <SelectColumnsButton />}
    <FilterButton />
    {hasCreate && <CreateButton />}
    <ExportButton />
  </TopToolbar>
);

export const ResponsiveList = (props: Props) => {
  const isSmall = useMediaQuery<Theme>(
    (theme) => theme.breakpoints.down("sm"),
    { noSsr: true }
  );
  const {
    primaryIdentifier = "id",
    normalList,
    smallList,
    filters = [],
    hasCreate = true,
  } = props;

  const usedFilter: ReactElement[] = [
    <NumberInput
      key={1}
      name={primaryIdentifier}
      source={primaryIdentifier}
      label="ID"
    />,
    ...filters,
  ];

  return (
    <List
      filters={usedFilter}
      actions={
        <ListActions hasCreate={hasCreate} showSelectColumns={!isSmall} />
      }
    >
      {isSmall ? React.cloneElement(smallList) : React.cloneElement(normalList)}
    </List>
  );
};
