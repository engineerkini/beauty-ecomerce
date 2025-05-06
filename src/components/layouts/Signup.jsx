import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [signIn, toggle] = useState(true);
  const [first_name, setFirst_name] = useState("");
  const [password, setPassword] = useState("");
  const [last_name, setLast_name] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8080/";

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!first_name || !email || !password || !address) {
      setError("All fields (First Name, Email, Password, Address) are required.");
      return;
    }

    try {
      const res = await axios.post(`${url}register`, {
        first_name,
        last_name,
        email,
        password,
        address,
        phone_number,
      });

      alert(res.data.message);
      toggle(true); // Switch back to login view
      setError(null);
    } catch (error) {
      setError(
        error.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!first_name || !password) {
      setError("Both First Name and Password are required.");
      return;
    }

    try {
      const res = await axios.post(`${url}login`, { first_name, password });

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (first_name === "admin" && password === "liverpoolfc") {
        alert("Admin login successful!");
        navigate("/admin");
      } else {
        alert("Login successful!");
        navigate("/account");
      }

      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <Container>
      {signIn ? (
        <Form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <Paragraph onClick={() => toggle(false)}>Don't have an account? Sign up</Paragraph>
        </Form>
      ) : (
        <Form onSubmit={handleRegister}>
          <h2>Register</h2>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input
            type="text"
            placeholder="First Name"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Phone Number"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
          />
          <Button type="submit">Register</Button>
          <Paragraph onClick={() => toggle(true)}>Already have an account? Login</Paragraph>
        </Form>
      )}
    </Container>
  );
}

export default Signup;

// Styled components
const Container = styled.div`
  background-color: #ffe6f0;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #ff4b6e;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  color: #ff4b6e;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 10px;
`;
