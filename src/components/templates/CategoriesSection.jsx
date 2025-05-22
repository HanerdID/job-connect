// src/components/templates/CategoriesSection.jsx
import { Row, Col } from "antd";
import SectionHeader from "../molecules/SectionHeader";
import CategoryCard from "../organisms/CategoryCard";

const categories = [
  { id: 1, name: "Information Technology", icon: "💻" },
  { id: 2, name: "Design & Creative", icon: "🎨" },
  { id: 3, name: "Marketing", icon: "📊" },
  { id: 4, name: "Finance", icon: "💼" },
  { id: 5, name: "Customer Service", icon: "🙋‍♀️" },
  { id: 6, name: "Healthcare", icon: "🏥" },
  { id: 7, name: "Education", icon: "🎓" },
  { id: 8, name: "Engineering", icon: "⚙️" },
];

const CategoriesSection = () => {
  return (
    <section style={{ backgroundColor: "#FAF9F6", padding: "4rem 0" }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Jelajahi Kategori"
          subtitle="Temukan posisi yang sesuai dengan keahlian dan minat Anda"
        />
        <Row gutter={[24, 24]}>
          {categories.map((category) => (
            <Col key={category.id} xs={12} sm={8} md={6}>
              <CategoryCard category={category} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default CategoriesSection;
