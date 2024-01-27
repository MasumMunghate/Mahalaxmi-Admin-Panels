import React, { useState } from "react";
import { Box, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Picture from "../../assets/teenpatti.webp";
import king from "..//../assets/pngtree-king-crown-sticker-png-image_6549524.png";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLargerThan1250] = useMediaQuery("(min-width: 1250px)");
  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const handleLogin = async () => {
    const paylode = {
      username: adminID,
      password: adminPassword,
    };

    const congif = {
      method: "POST",
      url: " http://localhost:5000/user/signin",
      data: paylode,
    };

    const response = await axios(congif);
    if (response.status === 200) {
      navigate("/");
    }
    console.log(response, "respo");
  };
  return (
    <>
      <Box
        backgroundColor="grey"
        width={isLargerThan1250 ? "1150px" : "100%"}
        height={isLargerThan1250 ? "550px" : "100%"}
        position="relative"
        top={42}
        left={55}
        boxShadow="45px 45px 45px rgba(2, 4, 20, 0.3)"
      >
        <img
          src={Picture} // make sure 'Picture' is a valid image source
          alt="m"
          style={{
            width: "40%",
            height: "80%",
            position: "relative",
            top: "10%",
            left: "10%",
          }}
        />

        <Box
          as="form"
          bg="white"
          p={10}
          borderRadius="md"
          boxShadow="md"
          maxW="440px"
          mx="auto"
          height="440px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          position="relative"
          left="10%"
          bottom="70%"
        >
          <img
            style={{
              width: "40%",
              height: "80%",
              position: "relative",
              bottom: "20%",
              left: "25%",
            }}
            src={king} // make sure 'king' is a valid image source
            alt=""
          />
          <Text
            color={"orange"}
            fontWeight="bold"
            fontStyle="italic"
            position="relative"
            bottom="7em"
            left={100}
          >
            Teen Patti king
          </Text>
          <Text
            color={"black"}
            fontWeight="bold"
            position="relative"
            bottom="3em"
            fontSize="1.5em"
          >
            Admin Login
          </Text>
          <Box position="relative" bottom="4em">
            <input
              type="text"
              placeholder="Admin User ID"
              value={adminID}
              onChange={(e) => setAdminID(e.target.value)}
              style={{
                padding: "3px 6px",
                marginBottom: "16px",
                borderRadius: "4px",
                borderColor: "gray",
                border: "none",
                borderBottom: "1px solid gray",
                borderWidth: "1px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />

            <input
              type="text"
              placeholder="Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              style={{
                padding: "3px 6px",
                marginBottom: "16px",
                borderRadius: "4px",
                border: "none",
                borderColor: "gray",
                borderBottom: "1px solid gray",
                borderWidth: "1px",
                width: "100%",
                boxSizing: "border-box",
              }}
            />
            <Button
              backgroundImage="linear-gradient(to top, red, yellow)"
              padding="5px 10px"
              width="22.5em"
              fontWeight="bold"
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLogin;