import { Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const ConformPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = async () => {
    try {
      const payload = {
        newPassword: password,
        confirmPassword: confirmPassword,
      };

      const config = {
        method: "POST",
        url: `${apiUrl}/admin/changePassword`,
        data: payload,
      };

      const response = await axios(config);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
    console.log(response, "ConformPassword");
  };

  return (
    <>
      <Flex
        justifyContent="center"
        direction="column"
        height="100vh"
        gap="2rem"
        alignItems="center"
        width="100%"
        backgroundColor='#E3E1D9'>
        <Input
          width="50%"
          border='1px solid black'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />
        <Input
          width="50%"
          border='1px solid black'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
        />
        <Button onClick={handlePassword} width="50%" >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default ConformPassword;
