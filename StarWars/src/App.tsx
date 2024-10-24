import { Box, ThemeProvider } from "@mui/material";
import theme from "./assets/theme";


const App: React.FC = () => { 
    return (
        <ThemeProvider theme={theme}>
            <Box>

            </Box>
        </ThemeProvider>
    )
}

export default App;