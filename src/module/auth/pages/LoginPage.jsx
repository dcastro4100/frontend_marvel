import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { LoginForm } from "../components";


export const LoginPage = () => {

    const theme = useTheme();
    return (
        <div>
        <LoginForm />
      </div>
    );
}