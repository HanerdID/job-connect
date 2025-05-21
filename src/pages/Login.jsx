// src/pages/Login.jsx
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#3E3A74]">
          Login
        </h1>
        <div className="bg-[#FAF9F6] rounded-xl shadow-card p-6">
          <form>
            <div className="mb-4">
              <label
                className="block text-[#3E3A74] font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Input type="email" id="email" placeholder="nama@example.com" />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#3E3A74] font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Input type="password" id="password" placeholder="••••••••" />
            </div>
            <Button variant="secondary" className="w-full">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-neutral-600">
            <p>
              Belum punya akun?{" "}
              <span className="text-[#3E3A74] cursor-pointer hover:underline">
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
