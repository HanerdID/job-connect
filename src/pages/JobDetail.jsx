// src/pages/JobDetail.jsx
import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { Row, Col, Typography, Card, Button, Tag, Divider, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <Card>
          <Title level={3}>Lowongan tidak ditemukan</Title>
          <Paragraph>
            Maaf, lowongan yang Anda cari tidak tersedia atau telah dihapus.
          </Paragraph>
          <Link to="/">
            <Button type="primary">Kembali ke Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const isRemote = job.location.toLowerCase().includes("remote");

  return (
    <div className="container mx-auto px-4 py-12">
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card
            style={{ borderRadius: 12 }}
            bodyStyle={{ padding: 24 }}
            bordered={false}
          >
            <Space direction="vertical" size={4} style={{ width: "100%" }}>
              <Title level={3} style={{ color: "#3E3A74", marginBottom: 0 }}>
                {job.position}
              </Title>
              <Text strong>{job.company}</Text>
              <Text type="secondary">{job.location}</Text>
              <Tag color={isRemote ? "gold" : "blue"}>
                {job.type || "Full-time"}
              </Tag>
              <Paragraph style={{ color: "#FFC857", fontWeight: 500 }}>
                {job.salary}
              </Paragraph>
            </Space>

            <Divider />

            <Title level={4}>Deskripsi Pekerjaan</Title>
            <Paragraph>{job.description}</Paragraph>

            <Title level={4}>Persyaratan</Title>
            <ul>
              {job.requirements.map((req, index) => (
                <li key={index}>
                  <Text>{req}</Text>
                </li>
              ))}
            </ul>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Card bordered={false}>
              <Button type="primary" block style={{ marginBottom: 8 }}>
                Lamar Sekarang
              </Button>
              <Button block>Simpan Pekerjaan</Button>
            </Card>

            <Card bordered={false} title="Tentang Perusahaan">
              <Paragraph>
                {job.company} adalah perusahaan terkemuka di bidangnya.
              </Paragraph>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Kunjungi website
              </a>
            </Card>

            <Card bordered={false} title="Lowongan Serupa">
              <ul>
                <li>
                  <Link to="/jobs/2">UI/UX Designer - Creative Agency</Link>
                </li>
                <li>
                  <Link to="/jobs/3">Product Designer - Tech Company</Link>
                </li>
                <li>
                  <Link to="/jobs/4">Graphic Designer - Marketing Firm</Link>
                </li>
              </ul>
            </Card>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default JobDetail;
