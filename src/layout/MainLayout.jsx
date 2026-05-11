// layouts/MainLayout.jsx
import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider><Sidebar /></Sider>
      <Layout>
        <Header><TopBar /></Header>
        <Content style={{ padding: 24 }}>
          {children}   {/* pages render here */}
        </Content>
      </Layout>
    </Layout>
  );
}