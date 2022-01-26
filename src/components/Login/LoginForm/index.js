import { TextField, Button, Box } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { textFieldStyles } from "components/General/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Login, { loginFields } from "models/Login.model";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Login) });

  const handleSubmitLoginForm = async (values) => {
    try {
      setIsLoading(true);
      console.log(values);
      const res = await true;
      navigate("/clientes");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitLoginForm)}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* <TextField
      variant="outlined"
      label="xd"
      type="date"
      fullWidth
      InputLabelProps={{ shrink: true }}
    /> */}
        <TextField
          {...textFieldStyles}
          {...register(loginFields.username)}
          label="Usuario"
          type="text"
          error={errors[loginFields.username]?.message && true}
          helperText={errors[loginFields.username]?.message}
        />
        <TextField
          {...textFieldStyles}
          {...register(loginFields.password)}
          label="Contraseña"
          type="password"
          error={errors[loginFields.password]?.message && true}
          helperText={errors[loginFields.password]?.message}
        />
        <LoadingButton variant="contained" loading={isLoading} type="submit">
          Iniciar Sesión
        </LoadingButton>
      </Box>
    </form>
  );
};

export default LoginForm;
