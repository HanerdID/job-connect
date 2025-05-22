// src/components/molecules/SectionHeader.jsx
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const SectionHeader = ({ title, subtitle, className = "" }) => (
  <div className={className} style={{ textAlign: "center", marginBottom: 48 }}>
    <Title level={2} style={{ color: "#3E3A74", display: "inline-block" }}>
      {title}
    </Title>
    {subtitle && (
      <Paragraph style={{ color: "#666", marginTop: 8 }}>{subtitle}</Paragraph>
    )}
  </div>
);

export default SectionHeader;
