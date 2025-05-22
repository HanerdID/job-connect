import { Button, Card, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const { Title, Paragraph } = Typography;

const ChooseRole = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChoose = (role) => {
    login(role);
    navigate(role === "recruiter" ? "/recruiter" : "/dashboard");
  };

  return (
    <div className="container mx-auto px-4 py-20 flex justify-center">
      <Card style={{ maxWidth: 500, width: "100%", textAlign: "center" }}>
        <Title level={3}>Pilih Peran Anda</Title>
        <Paragraph>Silakan pilih peran yang sesuai untuk melanjutkan</Paragraph>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Button
            block
            type="primary"
            size="large"
            onClick={() => handleChoose("user")}
          >
            Saya Mencari Pekerjaan
          </Button>
          <Button
            block
            type="default"
            size="large"
            onClick={() => handleChoose("recruiter")}
          >
            Saya Ingin Merekrut
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ChooseRole;
