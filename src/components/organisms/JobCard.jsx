import { Card, Typography, Tag, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { COLORS } from "../../constants/theme";
import { useJob } from "../../context/JobContext";

const { Title, Paragraph, Text } = Typography;

const JobCard = ({ job }) => {
  const isRemote = job.location?.toLowerCase().includes("remote");
  const { saveJob, applyJob } = useJob();

  return (
    <Card hoverable style={{ borderRadius: 12 }} bodyStyle={{ padding: 20 }}>
      <Title level={4} style={{ marginBottom: 4, color: COLORS.PRIMARY }}>
        {job.position}
      </Title>

      <Paragraph style={{ marginBottom: 4 }}>
        <Text strong>{job.company}</Text> · <Text>{job.location}</Text>
      </Paragraph>

      <Tag color={isRemote ? "gold" : "blue"} style={{ marginBottom: 12 }}>
        {isRemote ? "Remote" : job.type || "Full-time"}
      </Tag>

      <Paragraph ellipsis={{ rows: 2 }} style={{ fontSize: 14, color: "#666" }}>
        {job.description}
      </Paragraph>

      <Paragraph style={{ color: COLORS.ACCENT, fontWeight: 500 }}>
        {job.salary}
      </Paragraph>

      <Space wrap>
        <Link to={`/jobs/${job.id}`}>
          <Button type="link">Details</Button>
        </Link>
        <Button onClick={() => saveJob(job)}>Simpan</Button>
        <Button type="primary" onClick={() => applyJob(job)}>
          Lamar
        </Button>{" "}
      </Space>
    </Card>
  );
};

export default JobCard;
