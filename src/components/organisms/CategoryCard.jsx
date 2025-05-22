// src/components/organisms/CategoryCard.jsx
import { Card, Typography } from "antd";

const { Title } = Typography;

const CategoryCard = ({ category }) => {
  return (
    <Card
      hoverable
      style={{ borderRadius: 12, height: "100%" }}
      bodyStyle={{ padding: 24, textAlign: "center" }}
    >
      <div style={{ fontSize: 32, marginBottom: 12 }}>{category.icon}</div>
      <Title level={5} style={{ margin: 0, color: "#3E3A74" }}>
        {category.name}
      </Title>
    </Card>
  );
};

export default CategoryCard;
