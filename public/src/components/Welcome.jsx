import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

const STORAGE_KEY = process.env.REACT_APP_LOCALHOST_KEY || "chat-app-user";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const parsed = JSON.parse(storedData);
        setUserName(parsed.username || "");
      }
    };
    fetchUsername();
  }, []);

  return (
    <Container>
      <img src={Robot} alt="Welcome Bot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  text-align: center;

  img {
    height: 20rem;
  }

  h1 {
    margin-top: 1rem;
  }

  span {
    color: #4e0eff;
  }

  h3 {
    margin-top: 0.5rem;
    color: #ccc;
  }
`;
