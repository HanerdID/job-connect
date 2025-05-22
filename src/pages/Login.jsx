// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Typography, Card, Form, Input, Button, message } from "antd";

const { Title } = Typography;

const Login = () => {
  const { role } = useAuth();
  const navigate = useNavigate();

  const onFinish = (values) => {
    // Validasi dummy berhasil
    message.success("Login berhasil!");
    navigate("/choose-role");
  };

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
          Login
        </Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email wajib diisi" },
              {
                type: "email",
                message: "Format email tidak valid",
              },
            ]}
          >
            <Input type="email" placeholder="nama@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password wajib diisi" },
              { min: 6, message: "Password minimal 6 karakter" },
            ]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Masuk
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
