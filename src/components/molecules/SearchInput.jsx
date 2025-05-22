// src/components/molecules/SearchInput.jsx
import { Input, Button, Space } from "antd";
import { SearchOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.({ query, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Space.Compact block>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Posisi atau keyword..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Input
            prefix={<EnvironmentOutlined />}
            placeholder="Lokasi..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button type="primary" htmlType="submit">
            Cari
          </Button>
        </Space.Compact>
      </Space>
    </form>
  );
};

export default SearchInput;
