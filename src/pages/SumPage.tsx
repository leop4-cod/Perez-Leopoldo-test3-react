import { useState } from "react";
import { TextField, Typography, Container, Card, CardContent, Button } from "@mui/material";

export default function SumPage() {
  // Triángulo
  const [triangleBase, setTriangleBase] = useState("");
  const [triangleHeight, setTriangleHeight] = useState("");
  const [triangleArea, setTriangleArea] = useState<number | null>(null);

  // Rectángulo
  const [rectangleLength, setRectangleLength] = useState("");
  const [rectangleWidth, setRectangleWidth] = useState("");
  const [rectangleArea, setRectangleArea] = useState<number | null>(null);

  // IVA
  const [ivaValue, setIvaValue] = useState("50");
  const [ivaResult, setIvaResult] = useState<number | null>(null);

  const calculateTriangleArea = () => {
    const base = parseFloat(triangleBase);
    const height = parseFloat(triangleHeight);
    if (!isNaN(base) && !isNaN(height)) {
      setTriangleArea((base * height) / 2);
    }
  };

  const calculateRectangleArea = () => {
    const length = parseFloat(rectangleLength);
    const width = parseFloat(rectangleWidth);
    if (!isNaN(length) && !isNaN(width)) {
      setRectangleArea(length * width);
    }
  };

  const calculateIVA = () => {
    const value = parseFloat(ivaValue);
    if (!isNaN(value)) {
      setIvaResult(value * 0.12);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom sx={{ mb: 4 }}>
        Cálculos Matemáticos y Comerciales
      </Typography>

      {/* Triangle Area */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Área de Triángulo
          </Typography>
          <TextField
            fullWidth
            label="Base:"
            type="number"
            value={triangleBase}
            onChange={(e) => setTriangleBase(e.target.value)}
            margin="normal"
            size="small"
          />
          <TextField
            fullWidth
            label="Altura:"
            type="number"
            value={triangleHeight}
            onChange={(e) => setTriangleHeight(e.target.value)}
            margin="normal"
            size="small"
          />
          <Button
            fullWidth
            variant="contained"
            onClick={calculateTriangleArea}
            sx={{ mt: 2 }}
          >
            Calcular
          </Button>
          {triangleArea !== null && (
            <Typography sx={{ mt: 2, p: 1, backgroundColor: "#e8f5e9", borderRadius: 1 }}>
              <strong>Área: {triangleArea.toFixed(2)}</strong>
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* Rectangle Area */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Área de Rectángulo
          </Typography>
          <TextField
            fullWidth
            label="Largo:"
            type="number"
            value={rectangleLength}
            onChange={(e) => setRectangleLength(e.target.value)}
            margin="normal"
            size="small"
          />
          <TextField
            fullWidth
            label="Ancho:"
            type="number"
            value={rectangleWidth}
            onChange={(e) => setRectangleWidth(e.target.value)}
            margin="normal"
            size="small"
          />
          <Button
            fullWidth
            variant="contained"
            onClick={calculateRectangleArea}
            sx={{ mt: 2 }}
          >
            Calcular
          </Button>
          {rectangleArea !== null && (
            <Typography sx={{ mt: 2, p: 1, backgroundColor: "#e8f5e9", borderRadius: 1 }}>
              <strong>Área: {rectangleArea.toFixed(2)}</strong>
            </Typography>
          )}
        </CardContent>
      </Card>

      {/* IVA Calculation */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Cálculo de IVA (12%)
          </Typography>
          <TextField
            fullWidth
            label="Valor del producto o servicio:"
            type="number"
            value={ivaValue}
            onChange={(e) => setIvaValue(e.target.value)}
            margin="normal"
            size="small"
          />
          <Button
            fullWidth
            variant="contained"
            onClick={calculateIVA}
            sx={{ mt: 2 }}
          >
            Calcular
          </Button>
          {ivaResult !== null && (
            <Typography sx={{ mt: 2, p: 1, backgroundColor: "#e8f5e9", borderRadius: 1 }}>
              <strong>IVA calculado: {ivaResult.toFixed(2)}</strong>
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}