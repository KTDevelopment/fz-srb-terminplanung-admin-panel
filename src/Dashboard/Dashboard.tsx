import { Title } from "react-admin";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";

export const Dashboard = () => (
  <Box mt={4}>
    <Container>
      <Card>
        <Title title="Dashboard" />
        <CardHeader title="Willkommen zur Administration der Terminplanung" />
        <CardContent>
          <Typography variant="h6" component="div">
            Was ist neu?
          </Typography>
          <Typography variant="body2">
            Der neue Bereich &quot;Statistik&quot; beinhaltet eine Übersicht
            über alle Statistik-Einträge und deren zugehöriger Teilnahmen.
          </Typography>
          <Typography variant="body2">
            Die Anzeige sämtliche Listen ist jetzt Konfigurierbar. Es wurden
            viele neue Filter hinzugefügt.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </Box>
);
