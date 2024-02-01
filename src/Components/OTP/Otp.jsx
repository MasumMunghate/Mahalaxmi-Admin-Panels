import {
  PinInput,
  PinInputField,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_APP_API_URL;

const Otp = () => {
  const [userOtp, setUserOtp] = useState("");

  const navigate = useNavigate();
  const VerifyOtp = async () => {
    const payload = {
      otp: userOtp,
    };

    const config = {
      method: "POST",
      url: `${apiUrl}/admin/verifyOtp`,
      data: payload,
    };

    const response = await axios(config);
    // setOtp(response);
    console.log(response, "VerifyOtp");
    if (response.status === 200) {
      navigate("/conformpassword");
    }
  };
  return (
    <>
      <Flex
        justifyContent="center"
        direction="column"
        height="100vh"
        gap="2rem"
        alignItems="center"
      >
        <HStack>
          <PinInput otp onChange={(otp) => setUserOtp(otp)}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>

        <Button onClick={VerifyOtp}>Verify Otp</Button>
      </Flex>
    </>
  );
};
export default Otp;
