// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { antdTheme } from "./theme/antdTheme";
import AppRouter from "./routes/appRouter";
import "antd/dist/reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={antdTheme}>
        <AppRouter />
      </ConfigProvider>
    </BrowserRouter>
  );
}