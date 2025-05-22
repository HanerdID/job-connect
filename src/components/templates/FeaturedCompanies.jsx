// src/components/templates/FeaturedCompanies.jsx
import { Row, Col } from "antd";
import SectionHeader from "../molecules/SectionHeader";
import CompanyCard from "../organisms/CompanyCard";

const companies = [
  { name: "Accenture", category: "Technology", positions: 6, featured: true },
  { name: "Bukalapak", category: "E-commerce", positions: 4 },
  { name: "Citrix", category: "Technology", positions: 3 },
  { name: "Deloitte", category: "Finance", positions: 8, featured: true },
  { name: "Ericsson", category: "Technology", positions: 5 },
  { name: "Freeport", category: "Mining", positions: 2 },
  { name: "Gojek", category: "Technology", positions: 7, featured: true },
  { name: "HaloDoc", category: "Healthcare", positions: 4 },
];

const FeaturedCompanies = () => {
  return (
    <section style={{ backgroundColor: "#FAF9F6", padding: "4rem 0" }}>
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Companies"
          subtitle="Perusahaan terbaik yang berkolaborasi dengan kami"
        />
        <Row gutter={[24, 24]}>
          {companies.map((company, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <CompanyCard
                company={company.name}
                category={company.category}
                positions={company.positions}
                isFeatured={company.featured}
              />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
