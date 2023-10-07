import { TextInput } from "react-admin";
import { Box, Typography } from "@mui/material";

export const SensitiveInformationSection = () => {
  return (
    <Box flex={2} mr="1em">
      <Typography variant="h6">Sensible</Typography>
      <Box display="flex">
        <TextInput
          style={{ width: "100%" }}
          source="password"
          name="password"
        />
      </Box>
      <Typography variant="body2" color="error">
        Vorsicht, wird hier das Passwort eingegeben wir das aktuelle Passwort
        des Nutzers überschrieben
      </Typography>
      <Box mt="1em" />
    </Box>
  );
};
