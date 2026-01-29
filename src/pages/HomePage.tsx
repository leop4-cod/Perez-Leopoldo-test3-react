import { Paper, Typography, Container, Grid, Card, CardContent, Box } from "@mui/material";

export default function HomePage() {

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Banner Images */}
      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <img 
            src="https://picsum.photos/id/1065/800/300" 
            alt="Banner 1"
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </Box>
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <img 
            src="https://picsum.photos/id/1071/800/300" 
            alt="Banner 2"
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
        </Box>
      </Box>

      {/* Three Info Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Card 1: Listado de Categorías */}
        <Grid container item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", backgroundColor: "#f5f5f5" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Listado de Categorías
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Ahora se llena dinámicamente con personajes de Star Wars (con foto).
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2: Crear Categoría */}
        <Grid container item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", backgroundColor: "#f5f5f5" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Crear Categoría
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Agrega nuevas categorías matemáticas o temáticas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3: Cálculos Básicos */}
        <Grid container item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", backgroundColor: "#f5f5f5" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Cálculos Básicos
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Realiza áreas y cálculo de IVA. Sistema listo para gestionar categorías y cálculos básicos.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Important Message */}
      <Paper sx={{ p: 2, mb: 4, backgroundColor: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
        <Typography variant="body2" color="text.secondary">
          Recuerda ingresar al menos una categoría antes de usar las demás funciones.
        </Typography>
      </Paper>
    </Container>
  );
}