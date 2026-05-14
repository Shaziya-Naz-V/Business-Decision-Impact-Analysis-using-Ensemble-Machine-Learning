import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Page, Card, Title, Subtitle, Input, Button, SwitchText } from "../../styles/AuthStyles";

const API_URL = "https://business-decision-impact-analysis-using.onrender.com";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          localStorage.setItem("user_id", data.user_id);
          navigate("/dashboard");
        } else {
          alert("Invalid email or password");
        }
      });
  };

  return (
    <Page>
      <Card>
        <Title>Welcome back</Title>
        <Subtitle>Sign in to continue</Subtitle>

        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={handleLogin}>Sign In →</Button>

        <SwitchText>
          Don't have an account?{" "}
          <span onClick={() => navigate("/auth/signup")}>Sign up</span>
        </SwitchText>
      </Card>
    </Page>
  );
}