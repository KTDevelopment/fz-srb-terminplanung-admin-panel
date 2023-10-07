import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const Contact = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 60,
    }}
  >
    <Card>
      <CardContent>
        <h1>Kontakt</h1>
        <p>Kevin Thürmann</p>
        <p>kevin.thuermann@web.de</p>
      </CardContent>
    </Card>
  </div>
);
