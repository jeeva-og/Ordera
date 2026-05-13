// src/components/TopBar.jsx
import { Layout, Typography, Avatar, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { colors, typography } from "../theme";

const { Text } = Typography;

const menuItems = [
  { key: "profile",  icon: <UserOutlined />,    label: "Profile"  },
  { key: "settings", icon: <SettingOutlined />,  label: "Settings" },
  { type: "divider" },
  { key: "logout",   icon: <LogoutOutlined />,   label: "Logout", danger: true },
];

export default function TopBar() {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === "logout")   { navigate(PATHS.LOGIN);    return; }
    if (key === "profile")  { navigate(PATHS.PROFILE);  return; }
    if (key === "settings") { navigate(PATHS.SETTINGS); return; }
  };

  return (
    <div style={{
      display:         "flex",
      alignItems:      "center",
      justifyContent:  "space-between",
      width:           "100%",
      height:          "100%",
      padding:         "0 24px",
      background:      colors.bgPrimary,
      borderBottom:    `1px solid ${colors.gray200}`,
    }}>

      {/* Left — Page title */}
      <Text style={{ ...typography.h5, color: colors.textPrimary, margin: 0 }}>
        Ordera
      </Text>

      {/* Right — User avatar */}
      <Dropdown
        menu={{ items: menuItems, onClick: handleMenuClick }}
        placement="bottomRight"
        trigger={["click"]}
      >
        <Avatar
          icon={<UserOutlined />}
          style={{ background: colors.primary, cursor: "pointer" }}
        />
      </Dropdown>

    </div>
  );
}