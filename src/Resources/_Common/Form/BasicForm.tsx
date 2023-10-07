import { SimpleForm } from "react-admin";
import { SimpleFormProps } from "ra-ui-materialui/src/form/SimpleForm";

export const BasicForm = ({ children }: SimpleFormProps) => (
  <SimpleForm margin="normal">{children}</SimpleForm>
);
