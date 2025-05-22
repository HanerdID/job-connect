// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { Layout, Typography, Row, Col } from "antd";
import Navbar from "../components/organisms/Navbar";
import Logo from "../components/atoms/Logo";

const { Footer, Content } = Layout;
const { Text, Link: ALink } = Typography;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "#FFFFFF" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Content>
        <Outlet />
      </Content>

      {/* Footer */}
      <Footer
        style={{
          backgroundColor: "#3E3A74",
          color: "white",
          padding: "40px 24px 16px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[32, 24]}>
            <Col xs={24} md={8}>
              <Logo size="large" />
              <Text
                style={{
                  display: "block",
                  marginTop: 12,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                Platform pencarian lowongan kerja terbaik di Indonesia
              </Text>
            </Col>
            <Col xs={24} md={8}>
              <Text strong style={{ color: "white" }}>
                Navigasi
              </Text>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
                <li>
                  <ALink href="/" style={{ color: "#FFC857" }}>
                    Home
                  </ALink>
                </li>
                <li>
                  <ALink href="/post-job" style={{ color: "#FFC857" }}>
                    Post Job
                  </ALink>
                </li>
                <li>
                  <ALink href="/login" style={{ color: "#FFC857" }}>
                    Login
                  </ALink>
                </li>
              </ul>
            </Col>
            <Col xs={24} md={8}>
              <Text strong style={{ color: "white" }}>
                Kontak
              </Text>
              <Text
                style={{
                  display: "block",
                  marginTop: 12,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                info@jobconnect.id
                <br />
                +62 21 1234 5678
              </Text>
            </Col>
          </Row>

          <div
            style={{
              textAlign: "center",
              marginTop: 32,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            © 2025 JobConnect - Platform Lowongan Kerja Terbaik
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
