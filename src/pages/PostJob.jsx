// src/pages/PostJob.jsx
import {
  Form,
  Input,
  Button,
  Select,
  Typography,
  Row,
  Col,
  message,
} from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const PostJob = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Job posted:", values);
    message.success("Lowongan berhasil diposting (dummy)");
    form.resetFields();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Title
        level={2}
        style={{ color: "#3E3A74", textAlign: "center", marginBottom: 32 }}
      >
        Post Lowongan Kerja
      </Title>

      <Row justify="center">
        <Col xs={24} md={18} lg={12}>
          <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            size="large"
            style={{
              backgroundColor: "#FAF9F6",
              padding: 32,
              borderRadius: 16,
            }}
          >
            <Form.Item
              label="Posisi"
              name="position"
              rules={[
                { required: true, message: "Mohon masukkan posisi pekerjaan" },
              ]}
            >
              <Input placeholder="Contoh: Frontend Developer" />
            </Form.Item>

            <Form.Item
              label="Perusahaan"
              name="company"
              rules={[
                { required: true, message: "Mohon masukkan nama perusahaan" },
              ]}
            >
              <Input placeholder="Contoh: PT Digital Maju" />
            </Form.Item>

            <Form.Item
              label="Lokasi"
              name="location"
              rules={[{ required: true, message: "Mohon masukkan lokasi" }]}
            >
              <Input placeholder="Contoh: Jakarta atau Remote" />
            </Form.Item>

            <Form.Item
              label="Tipe Pekerjaan"
              name="type"
              rules={[
                { required: true, message: "Mohon pilih tipe pekerjaan" },
              ]}
            >
              <Select placeholder="Pilih tipe pekerjaan">
                <Select.Option value="Full-time">Full-time</Select.Option>
                <Select.Option value="Part-time">Part-time</Select.Option>
                <Select.Option value="Freelance">Freelance</Select.Option>
                <Select.Option value="Internship">Internship</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Gaji"
              name="salary"
              rules={[
                { required: true, message: "Mohon masukkan kisaran gaji" },
              ]}
            >
              <Input placeholder="Contoh: Rp 8.000.000 - 12.000.000" />
            </Form.Item>

            <Form.Item
              label="Deskripsi Pekerjaan"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Mohon masukkan deskripsi pekerjaan",
                },
              ]}
            >
              <TextArea
                rows={6}
                placeholder="Tuliskan deskripsi pekerjaan secara lengkap"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Posting Lowongan
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default PostJob;
