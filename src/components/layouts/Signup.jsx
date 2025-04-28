import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

function Signup() {
  const [signIn, toggle] = useState(true);
  const [first_name, setFirst_name] = useState("");
  const [password, setPassword] = useState("");
  const [last_name, setLast_name] = useState("")
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("")
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null); // To handle error messages
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8080/";

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!first_name || !email || !password) {
      setError("All fields are required.");
      return;
    }
    try {
      const res = await axios.post(`${url}register`, { first_name, password, email, last_name, address, phone_number });
      alert(res.data.message);
      toggle(true); 
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!first_name || !password) {
      setError("Both fields are required.");
      return;
    }
    try {
      const res = await axios.post(`${url}/login`, { first_name, password });
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert('Login successful!'); 
      navigate('/');
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SignUpContainer signinIn={signIn}>
        <Form onSubmit={handleRegister}>
          <Title>Create Account</Title>
          <Input 
            type="text" 
            placeholder="Name" 
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
            placeholder="address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)} 
          />
          <Input 
            type="number" 
            placeholder="phone_number" 
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)} 
          />

          <Button type="submit">Sign Up</Button>
        </Form>
      </SignUpContainer>

      <SignInContainer signinIn={signIn}>
        <Form onSubmit={handleLogin}>
          <Title>Sign in</Title>
          <Input 
            type="text" 
            placeholder="Name" 
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)} 
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button type="submit">Sign In</Button>
        </Form>
      </SignInContainer>

      <OverlayContainer signinIn={signIn}>
        <Overlay signinIn={signIn}>
          <LeftOverlayPanel signinIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>
              Sign in to check out exclusive beauty tips & products, and explore our new collections.
            </Paragraph>
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signinIn={signIn}>
            <Title>Hello, Friend!</Title>
            <Paragraph>
              Join us to get personalized beauty product recommendations and start your journey with us.
            </Paragraph>
            <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffe6f0;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: fixed; /* Position fixed to keep it centered even when scrolling */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centering the component */
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

const ErrorMessage = styled.div`
  color: red;
  background-color: #ffe6e6;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  text-align: center;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #ff4b6e;
  background-color: #ff4b6e;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const Anchor = styled.a`
  color: #ff4b6e;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) => (props.signinIn !== true ? `transform: translateX(-100%);` : null)}
`;

const Overlay = styled.div`
  background: #ff99bb;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #fffff;
`;

export default Signup;
