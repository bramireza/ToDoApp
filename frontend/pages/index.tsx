import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Icons Imports
import Google from "mdi-material-ui/Google";
import Github from "mdi-material-ui/Github";
import Twitter from "mdi-material-ui/Twitter";
import Facebook from "mdi-material-ui/Facebook";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));
// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",

  // For V1 Blank layout pages
  "& .content-center": {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
  },

  // For V2 Blank layout pages
  "& .content-right": {
    display: "flex",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
}));
export default function Home() {
  // ** Hook
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box>
      <Box
        className="app-content"
        sx={{ minHeight: "100vh", overflowX: "hidden", position: "relative" }}
      >
        <Box className="content-center">
          <Card sx={{ zIndex: 1 }} >
            hola
          </Card>
          
        </Box>
        
      </Box>
    </Box>
    /*<BlankLayoutWrapper className="layout-wrapper">
      <Box
        className="app-content"
        sx={{ minHeight: "100vh", overflowX: "hidden", position: "relative" }}
      >
        <Box className="content-center">
          <Card sx={{ zIndex: 1 }}>
            <CardContent
              sx={{
                padding: (theme) => `${theme.spacing(12, 9, 7)} !important`,
              }}
            >
              <Box
                sx={{
                  mb: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: 1,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "1.5rem !important",
                  }}
                >
                  INICIO DE SESIÓN
                </Typography>
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: 1.5 }}
                >
                  Bienvenido Brayian!
                </Typography>
                <Typography variant="body2" >Inicia sesión pe</Typography>
              </Box>
              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
              >
                <TextField
                  autoFocus
                  fullWidth
                  id="email"
                  label="Correo"
                  sx={{ marginBottom: 4 }}
                />
                <FormControl fullWidth>
                  <InputLabel htmlFor="auth-login-password">
                    Contraseña{" "}
                  </InputLabel>
                  <OutlinedInput
                    label="Password"
                    id="auth-login-password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="toggle password visibility"
                        ></IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Box
                  sx={{
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Recuerdame Mamá Coco"
                  />
                  <Link passHref href="/">
                    <LinkStyled onClick={(e) => e.preventDefault()}>
                      Olvidé mi Contraseña
                    </LinkStyled>
                  </Link>
                </Box>
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ marginBottom: 7 }}
                  onClick={() => router.push("/")}
                >
                  Iniciar Sesión
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                    ¿Nuevo Aquí?
                  </Typography>
                  <Typography variant="body2">
                    <Link passHref href="/pages/register">
                      <LinkStyled>Crear Cuenta</LinkStyled>
                    </Link>
                  </Typography>
                </Box>
                <Divider sx={{ my: 5 }}>o</Divider>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Facebook sx={{ color: "#497ce2" }} />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Twitter sx={{ color: "#1da1f2" }} />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Github
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? "#272727"
                              : theme.palette.grey[300],
                        }}
                      />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Google sx={{ color: "#db4437" }} />
                    </IconButton>
                  </Link>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </BlankLayoutWrapper>*/
  );
}
