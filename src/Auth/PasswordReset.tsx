import { useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import CardContent from "@mui/material/CardContent";
import { resetPassword } from "../Provider/AuthProvider";
import { Form, SaveButton, TextInput } from "react-admin";
import Typography from "@mui/material/Typography";
import { Colors } from "../Theme/Colors";
import { useSearchParams } from "react-router-dom";

export const PasswordResetPage = () => {
  const [searchParams] = useSearchParams();
  const account = searchParams.get("account");
  const passwordResetToken = searchParams.get("password_reset_token");
  const linkIsInvalid = !account || !passwordResetToken;
  const [globalError, setGlobalError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleValidate = (values: any) => {
    const errors: { password?: string; passwordConfirm?: string } = {};
    if (!values.password) {
      errors.password = "Passwort ist erforderlich.";
    }
    if (values.password && values.password.length < 8) {
      errors.password = "Passwort muss mindestens 8 Zeichen enthalten.";
    }

    if (values.password && values.password.length > 25) {
      errors.password = "Passwort darf maximal 25 Zeichen enthalten.";
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Passwort ist erforderlich.";
    }

    if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = "Passwörter stimmen nicht überein.";
    }

    return errors;
  };

  const handleSubmit = async (data: any) => {
    const { password } = data;
    try {
      await resetPassword(account!, passwordResetToken!, password);
      setSuccess(true);
    } catch (e) {
      setGlobalError("Anfrage ist fehlgeschlagen");
    }
  };

  const renderContent = () => {
    if (linkIsInvalid) {
      return (
        <Typography color={Colors.danger} variant={"h4"}>
          Benutzer Link ist nicht gültig.
        </Typography>
      );
    }

    if (success) {
      return (
        <Typography color={Colors.validGreen} variant={"h4"}>
          Passwort erneuert.
        </Typography>
      );
    }

    return (
      <Form onSubmit={handleSubmit} validate={handleValidate}>
        <Stack justifyContent="center" alignItems="center">
          <Typography style={{ paddingBottom: 24 }} variant={"h4"}>
            Passwort erneuern
          </Typography>
          <TextInput name={"password"} source={"password"} label={"Passwort"} />
          <TextInput
            name={"passwordConfirm"}
            source={"passwordConfirm"}
            label={"Passwort wiederholen"}
          />
          <SaveButton label="Abschicken" icon={<></>} />
          <Typography
            color={Colors.danger}
            variant={"h4"}
            hidden={globalError.length === 0}
          >
            {globalError}
          </Typography>
        </Stack>
      </Form>
    );
  };

  return (
    <div
      style={{
        maxWidth: 500,
        marginTop: 80,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card>
        <CardContent>{renderContent()}</CardContent>
      </Card>
    </div>
  );
};
