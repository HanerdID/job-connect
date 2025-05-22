// src/components/templates/Hero.jsx
import { Row, Col, Typography, Button, Image, Space } from "antd";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/theme";

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div
      style={{
        backgroundColor: `${COLORS.PRIMARY}0D`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Row gutter={[48, 32]} align="middle">
          {/* Text Content */}
          <Col xs={24} md={14}>
            <Space direction="vertical" size="middle">
              <Title
                level={1}
                style={{ color: COLORS.PRIMARY, marginBottom: 0 }}
              >
                Temukan Karir Impian <br />
                <span style={{ color: COLORS.ACCENT }}>Anda Sekarang!</span>
              </Title>
              <Paragraph style={{ color: "#666", maxWidth: 480 }}>
                Hubungkan karir dan passion Anda dengan ribuan peluang kerja di
                Indonesia yang sesuai dengan keahlian Anda.
              </Paragraph>

              <Space wrap>
                <Button type="primary" size="large">
                  <Link to="/login">Temukan Pekerjaan</Link>
                </Button>
                <Button type="default" size="large">
                  <Link to="/companies">Perusahaan</Link>
                </Button>
              </Space>

              {/* Statistics */}
              <Row gutter={32} style={{ marginTop: 40 }}>
                <Col>
                  <Title
                    level={3}
                    style={{ color: COLORS.PRIMARY, marginBottom: 4 }}
                  >
                    1,200+
                  </Title>
                  <Paragraph type="secondary">Pekerjaan Aktif</Paragraph>
                </Col>
                <Col>
                  <Title
                    level={3}
                    style={{ color: COLORS.PRIMARY, marginBottom: 4 }}
                  >
                    400+
                  </Title>
                  <Paragraph type="secondary">Perusahaan</Paragraph>
                </Col>
                <Col>
                  <Title
                    level={3}
                    style={{ color: COLORS.PRIMARY, marginBottom: 4 }}
                  >
                    3,000+
                  </Title>
                  <Paragraph type="secondary">Kandidat Terbantu</Paragraph>
                </Col>
              </Row>
            </Space>
          </Col>

          {/* Image */}
          <Col xs={24} md={10}>
            <Image
              src="/images/jobConnect-hero.png"
              alt="JobConnect"
              preview={false}
              style={{
                borderRadius: 16,
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              }}
            />
          </Col>
        </Row>
      </div>

      {/* Bottom Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 md:h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
            70.36-5.37,136.33-33.31,206.8-37.5,
            C438.64,32.43,512.34,53.67,583,72.05,
            c69.27,18,138.3,24.88,209.4,13.08,
            36.15-6,69.85-17.84,104.45-29.34,
            C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
