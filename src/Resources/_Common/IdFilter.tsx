import { FC } from "react";
import { NumberInput } from "react-admin";

type Props = {
  label: string;
  key?: string;
};
export const IdFilter: FC<Props> = ({ key = "id" }) => {
  return <NumberInput name={key} source={key} label="ID" />;
};
