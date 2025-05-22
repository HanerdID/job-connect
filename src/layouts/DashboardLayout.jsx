// src/layouts/DashboardLayout.jsx
import { Layout, Menu, Typography, Button } from "antd";
import {
  UserOutlined,
  FileDoneOutlined,
  LogoutOutlined,
  StarOutlined,
  PlusOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const DashboardLayout = ({ children, role = "user" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  // Navigation items based on role
  const userNavItems = [
    {
      key: "/dashboard",
      icon: <HomeOutlined />,
      label: "Beranda",
    },
    {
      key: "/dashboard/applied",
      icon: <FileDoneOutlined />,
      label: "Riwayat Lamaran",
    },
    {
      key: "/dashboard/saved",
      icon: <StarOutlined />,
      label: "Disimpan",
    },
  ];

  const recruiterNavItems = [
    {
      key: "/recruiter",
      icon: <HomeOutlined />,
      label: "Lowongan Saya",
    },
    {
      key: "/recruiter/post",
      icon: <PlusOutlined />,
      label: "Posting Lowongan",
    },
  ];

  const menuItems = role === "recruiter" ? recruiterNavItems : userNavItems;

  const onMenuClick = ({ key }) => {
    navigate(key);
  };

  useEffect(() => {
    if (!location.pathname.startsWith(`/dashboard`) && role === "user") {
      navigate("/dashboard");
    }
    if (!location.pathname.startsWith(`/recruiter`) && role === "recruiter") {
      navigate("/recruiter");
    }
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={220}
        style={{
          background: "#3E3A74",
        }}
      >
        <div className="logo" style={{ padding: 16 }}>
          <Title level={4} style={{ color: "white", marginBottom: 0 }}>
            {collapsed ? "JC" : "JobConnect"}
          </Title>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={onMenuClick}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 24px",
            background: "#FAF9F6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Title level={5} style={{ margin: 0 }}>
            {role === "recruiter" ? "Recruiter Dashboard" : "User Dashboard"}
          </Title>
          <Button
            icon={<LogoutOutlined />}
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px",
            background: "white",
            padding: 24,
            borderRadius: 12,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
