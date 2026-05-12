import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Page, Card, Title, Subtitle, Input, Button, SwitchText } from "../../styles/AuthStyles";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    fetch("http://127.0.0.1:5000/signup", {
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
          alert(data.message);
        }
      });
  };

  return (
    <Page>
      <Card>
        <Title>Create your account</Title>
        <Subtitle>Start making data-driven decisions</Subtitle>

        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

        <Button onClick={handleSignup}>Create Account →</Button>

        <SwitchText>
          Already have an account?{" "}
          <span onClick={() => navigate("/auth/signin")}>Sign in</span>
        </SwitchText>
      </Card>
    </Page>
  );
}
