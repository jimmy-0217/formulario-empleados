import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Paper,
  Box,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';

const tiposDocumento = ['Cédula de ciudadanía', 'Cédula de extranjería', 'Pasaporte'];
const tiposContrato = ['Término fijo', 'Término indefinido', 'Obra o labor'];
const eps = ['SURA', 'Sanitas', 'Compensar', 'Nueva EPS', 'Otra'];
const pensiones = ['Colpensiones', 'Protección', 'Porvenir', 'Skandia', 'Otra'];

const steps = ['Información personal', 'Información laboral'];

const EmployeeForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
    email: '',
    direccion: '',
    telefono: '',
    tipoContrato: '',
    salario: '',
    fechaIngreso: '',
    eps: '',
    pension: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Empleado registrado:', formData);
    alert('Empleado registrado correctamente');
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField label="Nombres" name="nombres" fullWidth margin="normal" value={formData.nombres} onChange={handleChange} required />
            <TextField label="Apellidos" name="apellidos" fullWidth margin="normal" value={formData.apellidos} onChange={handleChange} required />
            <TextField select label="Tipo de documento" name="tipoDocumento" fullWidth margin="normal" value={formData.tipoDocumento} onChange={handleChange} required>
              {tiposDocumento.map((tipo) => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
            </TextField>
            <TextField label="Número de documento" name="numeroDocumento" fullWidth margin="normal" value={formData.numeroDocumento} onChange={handleChange} required />
            <TextField label="Correo electrónico" name="email" type="email" fullWidth margin="normal" value={formData.email} onChange={handleChange} required />
            <TextField label="Dirección" name="direccion" fullWidth margin="normal" value={formData.direccion} onChange={handleChange} required />
            <TextField label="Teléfono" name="telefono" fullWidth margin="normal" value={formData.telefono} onChange={handleChange} required />
          </>
        );
      case 1:
        return (
          <>
            <TextField select label="Tipo de contrato" name="tipoContrato" fullWidth margin="normal" value={formData.tipoContrato} onChange={handleChange} required>
              {tiposContrato.map((tipo) => <MenuItem key={tipo} value={tipo}>{tipo}</MenuItem>)}
            </TextField>
            <TextField label="Salario" name="salario" type="number" fullWidth margin="normal" value={formData.salario} onChange={handleChange} required />
            <TextField label="Fecha de ingreso" name="fechaIngreso" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" value={formData.fechaIngreso} onChange={handleChange} required />
            <TextField select label="EPS" name="eps" fullWidth margin="normal" value={formData.eps} onChange={handleChange} required>
              {eps.map((entidad) => <MenuItem key={entidad} value={entidad}>{entidad}</MenuItem>)}
            </TextField>
            <TextField select label="Fondo de pensiones" name="pension" fullWidth margin="normal" value={formData.pension} onChange={handleChange} required>
              {pensiones.map((fondo) => <MenuItem key={fondo} value={fondo}>{fondo}</MenuItem>)}
            </TextField>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: 'white' }}>
          Registro Simplificado de Empleado
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box component="form" noValidate>
          {renderStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Atrás
            </Button>
            <Button variant="contained" onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Registrar' : 'Siguiente'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default EmployeeForm;





