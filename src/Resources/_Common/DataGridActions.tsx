import { DeleteButton, EditButton } from "react-admin";

export const DataGridActions = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <EditButton label="" />
      <DeleteButton label="" />
    </div>
  );
};
