import { Box, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";
import AppRoutes from "./routes/AppRoutes";


const App: React.FC = () => { 
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <AppRoutes />
            </Box>
        </ThemeProvider>
    )
}

export default App;