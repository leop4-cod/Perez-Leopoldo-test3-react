import { Paper, Typography, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";

export default function NuevaCategoria() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [guardado, setGuardado] = useState(false);

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();
    setGuardado(true);
    setTimeout(() => setGuardado(false), 2000);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3, maxWidth: 400 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Nueva Categoría
      </Typography>
      <form onSubmit={handleGuardar}>
        <TextField
          label="Nombre de la Categoria"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          label="Descripcion"
          value={descripcion}
          onChange={e => setDescripcion(e.target.value)}
          fullWidth
          multiline
          minRows={2}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="success" fullWidth>
          Guardar Categoria
        </Button>
      </form>
      {guardado && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Guardado correctamente
        </Alert>
      )}
    </Paper>
  );
}
