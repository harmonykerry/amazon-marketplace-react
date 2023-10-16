import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AppRoute from "./AppRoute";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BasketProvider from "./context/BasketProvider";

function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <Stack sx={{ minHeight: "100vh" }}>
          <Box sx={{ height: "10vh", background: "#232f3e" }}>
            <NavigationBar />
          </Box>
          <Box sx={{ backgroundColor: "#ffff" }}>
            <AppRoute />
          </Box>
        </Stack>
      </BrowserRouter>
    </BasketProvider>
  );
}

export default App;
