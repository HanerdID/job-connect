// src/pages/DashboardRecruiter.jsx
import { useState } from "react";
import {
  Typography,
  Tabs,
  Card,
  Button,
  List,
  Modal,
  Form,
  Input,
  Select,
  Space,
  message,
} from "antd";
import DashboardLayout from "../layouts/DashboardLayout";
import { recruiterJobs as initialJobs } from "../data/recruiter";

const { Title } = Typography;
const { Option } = Select;

const DashboardRecruiter = () => {
  const [form] = Form.useForm();
  const [jobs, setJobs] = useState(initialJobs);
  const [modalVisible, setModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const showAddModal = () => {
    form.resetFields();
    setEditMode(false);
    setModalVisible(true);
  };

  const showEditModal = (job) => {
    form.setFieldsValue(job);
    setSelectedJob(job);
    setEditMode(true);
    setModalVisible(true);
  };

  const onFinish = (values) => {
    if (editMode) {
      const updated = jobs.map((job) =>
        job.id === selectedJob.id ? { ...selectedJob, ...values } : job
      );
      setJobs(updated);
      message.success("Lowongan diperbarui");
    } else {
      const newJob = { id: Date.now(), ...values };
      setJobs([...jobs, newJob]);
      message.success("Lowongan ditambahkan");
    }

    setModalVisible(false);
    form.resetFields();
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: "Hapus Lowongan?",
      content: "Aksi ini tidak bisa dibatalkan.",
      onOk: () => {
        setJobs(jobs.filter((job) => job.id !== id));
        message.success("Lowongan dihapus");
      },
    });
  };

  const tabItems = [
    {
      key: "my-jobs",
      label: "Lowongan Saya",
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
              <p>Tipe: {job.type}</p>
              <Space>
                <Button type="link" onClick={() => showEditModal(job)}>
                  Edit
                </Button>
                <Button danger onClick={() => handleDelete(job.id)}>
                  Hapus
                </Button>
              </Space>
            </Card>
          )}
        />
      ),
    },
    {
      key: "post-job",
      label: "Posting Lowongan",
      children: (
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <Button type="primary" size="large" onClick={showAddModal}>
            Posting Lowongan Baru
          </Button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout role="recruiter">
      <Title level={3} style={{ marginBottom: 24 }}>
        Dashboard Recruiter
      </Title>
      <Tabs items={tabItems} />

      <Modal
        open={modalVisible}
        title={editMode ? "Edit Lowongan" : "Posting Lowongan Baru"}
        onCancel={() => setModalVisible(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ type: "Full-time" }}
        >
          <Form.Item
            label="Posisi"
            name="position"
            rules={[{ required: true, message: "Wajib diisi" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Perusahaan"
            name="company"
            rules={[{ required: true, message: "Wajib diisi" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lokasi"
            name="location"
            rules={[{ required: true, message: "Wajib diisi" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tipe Pekerjaan"
            name="type"
            rules={[{ required: true, message: "Wajib dipilih" }]}
          >
            <Select placeholder="Pilih tipe">
              <Option value="Full-time">Full-time</Option>
              <Option value="Part-time">Part-time</Option>
              <Option value="Freelance">Freelance</Option>
              <Option value="Internship">Internship</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {editMode ? "Simpan Perubahan" : "Posting"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </DashboardLayout>
  );
};

export default DashboardRecruiter;
