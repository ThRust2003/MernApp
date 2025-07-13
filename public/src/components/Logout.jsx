import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/ApiRoutes";

const STORAGE_KEY = process.env.REACT_APP_LOCALHOST_KEY || "chat-app-user";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    const storedUser = localStorage.getItem(STORAGE_KEY);
    if (!storedUser) return;

    const { _id } = JSON.parse(storedUser);

    try {
      const response = await axios.get(`${logoutRoute}/${_id}`);
      if (response.status === 200) {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally show a toast here
    }
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
