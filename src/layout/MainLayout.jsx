// src/layouts/MainLayout.jsx
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";   // ← import
import TopBar  from "../components/TopBar";    // ← import
import { colors } from "../theme";

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>

      {/* Sidebar */}
      <Sider
        width={220}
        style={{
          background:  colors.primary,
          overflow:    "auto",
          height:      "100vh",
          position:    "fixed",    // stays fixed while content scrolls
          left:        0,
          top:         0,
          bottom:      0,
        }}
      >
        <Sidebar />
      </Sider>

      {/* Main area */}
      <Layout style={{ marginLeft: 220 }}>  {/* offset by sidebar width */}

        {/* Header */}
        <Header style={{
          padding:    0,
          background: colors.bgPrimary,
          height:     64,
          position:   "sticky",   // sticks to top when scrolling
          top:        0,
          zIndex:     10,
        }}>
          <TopBar />
        </Header>

        {/* Page content */}
        <Content style={{
          padding:    24,
          background: colors.bgSecondary,
          minHeight:  "calc(100vh - 64px)",
        }}>
          {children}
        </Content>

      </Layout>
    </Layout>
  );
}