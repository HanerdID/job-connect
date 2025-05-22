// src/pages/DashboardUser.jsx
import { useState } from "react";
import { Tabs, List, Card, Typography, Tag, Button, Space, Drawer } from "antd";
import { Link } from "react-router-dom";
import { jobs } from "../data/jobs";
import { useJob } from "../context/JobContext";
import DashboardLayout from "../layouts/DashboardLayout";

const { Title, Text, Paragraph } = Typography;

const DashboardUser = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const { appliedJobs, savedJobs, applyJob, removeSaved } = useJob();
  const [selectedJob, setSelectedJob] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = (job) => {
    setSelectedJob(job);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSelectedJob(null);
  };

  const tabItems = [
    {
      key: "jobs",
      label: "Lowongan Tersedia",
      children: (
        <List
          itemLayout="vertical"
          dataSource={jobs}
          renderItem={(job) => (
            <Card key={job.id} style={{ marginBottom: 16 }}>
              <Title level={5}>{job.position}</Title>
              <p>
                {job.company} · {job.location}
              </p>
              <Tag
                color={
                  job.location.toLowerCase().includes("remote")
                    ? "gold"
                    : "blue"
                }
              >
                {job.type}
              </Tag>
              <Space style={{ marginTop: 12 }}>
                <Button type="link" onClick={() => openDrawer(job)}>
                  Detail
                </Button>
                <Button onClick={() => applyJob(job)}>Lamar</Button>
              </Space>
            </Card>
          )}
        />
      ),
    },
    {
      key: "applied",
      label: "Riwayat Lamaran",
      children: (
        <List
          itemLayout="vertical"
          dataSource={appliedJobs}
          renderItem={(job) => (
            <Card key={job.id} style={{ marginBottom: 16 }}>
              <Title level={5}>{job.position}</Title>
              <Text>{job.company}</Text>
              <Tag color="processing" style={{ marginLeft: 8 }}>
                {job.status}
              </Tag>
              <div style={{ marginTop: 12 }}>
                <Button type="link" onClick={() => openDrawer(job)}>
                  Lihat Detail
                </Button>
              </div>
            </Card>
          )}
        />
      ),
    },
    {
      key: "saved",
      label: "Pekerjaan Disimpan",
      children: (
        <List
          itemLayout="vertical"
          dataSource={savedJobs}
          renderItem={(job) => (
            <Card key={job.id} style={{ marginBottom: 16 }}>
              <Title level={5}>{job.position}</Title>
              <Text>{job.company}</Text>
              <div style={{ marginTop: 12 }}>
                <Space>
                  <Button type="primary" onClick={() => applyJob(job)}>
                    Lamar Sekarang
                  </Button>
                  <Button danger onClick={() => removeSaved(job.id)}>
                    Hapus
                  </Button>
                </Space>
              </div>
            </Card>
          )}
        />
      ),
    },
  ];

  return (
    <DashboardLayout role="user">
      <Title level={3} style={{ marginBottom: 24 }}>
        Dashboard Pengguna
      </Title>
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

      {/* Drawer for job detail */}
      <Drawer
        title={selectedJob?.position}
        open={drawerVisible}
        onClose={closeDrawer}
        width={600}
      >
        {selectedJob && (
          <>
            <Paragraph>
              <strong>Perusahaan:</strong> {selectedJob.company}
            </Paragraph>
            <Paragraph>
              <strong>Lokasi:</strong> {selectedJob.location}
            </Paragraph>
            <Paragraph>
              <strong>Tipe:</strong> {selectedJob.type}
            </Paragraph>
            <Paragraph>
              <strong>Gaji:</strong> {selectedJob.salary}
            </Paragraph>
            <Title level={5}>Deskripsi</Title>
            <Paragraph>{selectedJob.description}</Paragraph>
            <Title level={5}>Persyaratan</Title>
            <ul>
              {selectedJob.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </>
        )}
      </Drawer>
    </DashboardLayout>
  );
};

export default DashboardUser;
