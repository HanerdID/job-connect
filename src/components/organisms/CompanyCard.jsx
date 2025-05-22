// src/components/organisms/CompanyCard.jsx
import { Card, Avatar, Typography, Tag, Row, Col } from "antd";

const { Title, Text } = Typography;

const CompanyCard = ({ company, category, positions, isFeatured }) => {
  const logoPath = `/images/${company.toLowerCase().replace(/\s+/g, "")}.webp`;

  return (
    <Card
      hoverable
      style={{ borderRadius: 12 }}
      bodyStyle={{ padding: 20 }}
      extra={isFeatured && <Tag color="gold">Featured</Tag>}
    >
      <Row gutter={16} align="middle">
        <Col>
          <Avatar
            src={logoPath}
            size={64}
            style={{ backgroundColor: "#ddd", fontWeight: 600 }}
          >
            {company.charAt(0)}
          </Avatar>
        </Col>
        <Col flex="auto">
          <Title level={5} style={{ marginBottom: 0 }}>
            {company}
          </Title>
          <Text type="secondary">{category}</Text>
        </Col>
      </Row>

      <div style={{ marginTop: 16 }}>
        <Text>{positions} open positions</Text>
      </div>
    </Card>
  );
};

export default CompanyCard;
