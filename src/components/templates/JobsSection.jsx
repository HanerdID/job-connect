// src/components/templates/JobsSection.jsx
import { useState } from "react";
import { jobs } from "../../data/jobs";
import { Typography, Row, Col, Input, Space, Button } from "antd";
import JobCard from "../organisms/JobCard";

const { Title, Paragraph } = Typography;

const JobsSection = () => {
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
    // Implementasi filter berdasarkan state searchParams
    console.log("Search for:", searchParams);
  };

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "4rem 0" }}>
      <div className="container mx-auto px-4">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Title level={2} style={{ color: "#3E3A74" }}>
            Latest Jobs
          </Title>
          <Paragraph>
            Pekerjaan terbaru yang mungkin sesuai dengan keahlian Anda
          </Paragraph>
        </div>

        <form onSubmit={handleSearch}>
          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col xs={24} md={10}>
              <Input
                placeholder="Posisi atau keyword..."
                onChange={(e) =>
                  setSearchParams({ ...searchParams, query: e.target.value })
                }
              />
            </Col>
            <Col xs={24} md={10}>
              <Input
                placeholder="Lokasi..."
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
              />
            </Col>
            <Col xs={24} md={4}>
              <Button type="primary" htmlType="submit" block>
                Search
              </Button>
            </Col>
          </Row>
        </form>

        <Row gutter={[24, 24]}>
          {jobs.map((job, index) => (
            <Col key={job.id} xs={24} md={12} lg={8}>
              <JobCard job={job} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default JobsSection;
