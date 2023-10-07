import { ChipField, TextField } from "react-admin";

export const FullMemberNameChip = (props: any) => {
  let record = { fullName: fullNameRender(props.record), id: props.record.id };
  return <ChipField source="fullName" record={record} />;
};

export const FullMemberNameTextField = () => {
  return (
    <>
      <TextField source="firstName" /> <TextField source="lastName" />
    </>
  );
};

export const fullNameRender = (member: any) =>
  `${member.firstName} ${member.lastName}`;
