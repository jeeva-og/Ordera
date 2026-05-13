// src/components/Sidebar.jsx
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  SettingOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { PATHS } from "../routes/paths";
import Logo from "./Logo";
import { colors } from "../theme";

const menuItems = [
  {
    key:   PATHS.DASHBOARD,
    icon:  <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key:   "purchase-orders",
    icon:  <ShoppingCartOutlined />,
    label: "Purchase Orders",
    children: [
      { key: PATHS.PO_LIST,     icon: <FileTextOutlined />,    label: "All POs"    },
      { key: PATHS.PO_CREATE,   icon: <FileTextOutlined />,    label: "Create PO"  },
      { key: PATHS.PO_APPROVAL, icon: <CheckCircleOutlined />, label: "Approvals"  },
    ],
  },
  {
    key:   PATHS.REPORTS,
    icon:  <BarChartOutlined />,
    label: "Reports",
  },
  {
    key:   PATHS.SETTINGS,
    icon:  <SettingOutlined />,
    label: "Settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>

      {/* Logo area */}
      <div style={{
        padding: "20px 16px",
        borderBottom: `1px solid rgba(255,255,255,0.08)`
      }}>
        <Logo width={130} />
      </div>

      {/* Menu */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={["purchase-orders"]}
        onClick={({ key }) => navigate(key)}
        items={menuItems}
        style={{ flex: 1, borderRight: 0, paddingTop: 8 }}
      />

    </div>
  );
}