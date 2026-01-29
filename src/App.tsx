import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage.tsx";
import SumPage from "./pages/SumPage.tsx";
import MultiplyPage from "./pages/MultiplyPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/notfound.tsx";
import NuevaCategoria from "./pages/NuevaCategoria";

const linkBtnSx = {
  color: "white",
  textTransform: "none",
  borderRadius: 2,
  px: 2,
  "&.active": { bgcolor: "rgba(23, 202, 16, 0.83)" },
};

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#219653" }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mr: 2, color: 'white' }}>
            Gestión de categorías
          </Typography>

          <Button component={NavLink} to="/" end sx={linkBtnSx}>
            Home
          </Button>
          <Button component={NavLink} to="/categorias" sx={linkBtnSx}>
            Categorías
          </Button>
          <Button component={NavLink} to="/nueva-categoria" sx={linkBtnSx}>
            Nueva Categoría
          </Button>
          <Button component={NavLink} to="/calculos" sx={linkBtnSx}>
            Cálculos
          </Button>
          <Button component={NavLink} to="/acerca" sx={linkBtnSx}>
            Información
          </Button>

          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categorias" element={<ProductsPage />} />
          <Route path="/nueva-categoria" element={<NuevaCategoria />} />
          <Route path="/calculos" element={<SumPage />} />
          <Route path="/multiplica" element={<MultiplyPage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}


