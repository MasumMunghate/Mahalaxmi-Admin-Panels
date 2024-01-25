import { Flex, Box, Image, Text, Switch } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const ListOfGame = () => {
  return (
    <>
      <Flex flexWrap="wrap" backgroundColor="#e6e6e6">
        <Box
          width={{ base: "90%", md: "60rem" }}
          ml={{ base: "1rem", md: "1rem" }}
          mx={{ base: "1rem", md: "2rem" }}
        >
          <Flex flexWrap="wrap" justify="center" gap="1rem">
            {/* Card One */}
            <Box p="1rem" width={{ base: "100%", md: "30%" }}>
              <Box
                p="1rem"
                border="1px solid black"
                backgroundColor="white"
                borderRadius="10px"
              >
                <Image
                  backgroundColor="black"
                  p="1rem"
                  borderRadius="10px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Crystal_Clear_app_Cardgame-3.svg/1200px-Crystal_Clear_app_Cardgame-3.svg.png"
                  width="100%"
                  height="200px"
                />
                <Flex justify="space-between" mt="1rem">
                  <Text fontWeight="600">Teen Patti</Text>
                  <Flex width="40%" alignItems="center">
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                  </Flex>
                </Flex>
                <Text fontWeight="600" color="green">
                  200 Player
                </Text>

                <Text fontWeight="600" color="green" mt="1" mb="1">
                  $1,00,000
                </Text>
                <Flex
                  backgroundColor="#e6e6e6"
                  justifyContent="space-between"
                  alignItems="center"
                  p="0.3rem"
                  borderRadius="10px"
                >
                  <Text
                    backgroundColor="#e6e6e6"
                    color="green"
                    padding="0.3rem"
                    fontWeight="600"
                  >
                    Active
                  </Text>
                  <Switch size="sm" id="isChecked" isChecked />
                </Flex>
              </Box>

              <Box></Box>
            </Box>
            {/* Card Two */}
            <Box p="1rem" width={{ base: "100%", md: "30%" }}>
              <Box
                p="1rem"
                border="1px solid black"
                backgroundColor="white"
                borderRadius="10px"
              >
                <Image
                  width="100%"
                  height="200px"
                  backgroundColor="black"
                  p="0.2rem"
                  borderRadius="10px"
                  src="https://m.media-amazon.com/images/I/71P1rw5rWlL.png"
                />
                <Flex justify="space-between" mt="1rem">
                  <Text fontWeight="600">Andar Bahar</Text>
                  <Flex width="40%" alignItems="center">
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                  </Flex>
                </Flex>
                <Text fontWeight="600" color="green">
                  200 Player
                </Text>
                <Text fontWeight="600" color="green" mt="1" mb="1">
                  $1,00,000
                </Text>
                <Flex
                  backgroundColor="#e6e6e6"
                  justifyContent="space-between"
                  alignItems="center"
                  p="0.3rem"
                  borderRadius="10px"
                >
                  <Text
                    backgroundColor="#e6e6e6"
                    color="green"
                    padding="0.3rem"
                    fontWeight="600"
                  >
                    Active
                  </Text>
                  <Switch size="sm" id="isChecked" isChecked />
                </Flex>
              </Box>

              <Box></Box>
            </Box>

            {/* Card Three */}

            <Box p="1rem" width={{ base: "100%", md: "30%" }}>
              <Box
                p="1rem"
                border="1px solid black"
                backgroundColor="white"
                borderRadius="10px"
              >
                <Image
                  backgroundColor="black"
                  p="0.3rem"
                  borderRadius="10px"
                  src="https://play-lh.googleusercontent.com/R2ypJNpZ_8yQWIaE3zjidm74PEN9_iJMCBIh-aM71-5X9zmlKQN6n-OTPjzGJcL-7Jsd=w240-h480-rw"
                  width="100%"
                  height="200px"
                />
                <Flex justify="space-between" mt="1rem">
                  <Text fontWeight="600">Dragon Tiger</Text>
                  <Flex width="40%" alignItems="center">
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                  </Flex>
                </Flex>
                <Text fontWeight="600" color="green">
                  200 Player
                </Text>
                <Text fontWeight="600" color="green" mt="1" mb="1">
                  $1,00,000
                </Text>
                <Flex
                  backgroundColor="#e6e6e6"
                  justifyContent="space-between"
                  alignItems="center"
                  p="0.3rem"
                  borderRadius="10px"
                >
                  <Text
                    backgroundColor="#e6e6e6"
                    color="green"
                    padding="0.3rem"
                    fontWeight="600"
                  >
                    Active
                  </Text>
                  <Switch size="sm" id="isChecked" isChecked />
                </Flex>
              </Box>

              <Box></Box>
            </Box>

            {/* Card Four */}
            <Box p="1rem" width={{ base: "100%", md: "30%" }}>
              <Box
                p="1rem"
                border="1px solid black"
                backgroundColor="white"
                borderRadius="10px"
              >
                <Image
                  backgroundColor="black"
                  p="0.2rem"
                  borderRadius="10px"
                  src="https://getmega.ghost.io/content/images/2022/09/Screenshot-2022-09-26-161259.jpg"
                  width="100%"
                  height="200px"
                />
                <Flex justify="space-between" mt="1rem">
                  <Text fontWeight="600">Dragon Tiger Lion</Text>
                  <Flex width="40%" alignItems="center">
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                  </Flex>
                </Flex>
                <Text fontWeight="600" color="green">
                  200 Player
                </Text>
                <Text fontWeight="600" color="green" mt="1" mb="1">
                  $1,00,000
                </Text>
                <Flex
                  backgroundColor="#e6e6e6"
                  justifyContent="space-between"
                  alignItems="center"
                  p="0.3rem"
                  borderRadius="10px"
                >
                  <Text
                    backgroundColor="#e6e6e6"
                    color="green"
                    padding="0.3rem"
                    fontWeight="600"
                  >
                    Active
                  </Text>
                  <Switch size="sm" id="isChecked" isChecked />
                </Flex>
              </Box>

              <Box></Box>
            </Box>

            {/* Card Five */}
            <Box p="1rem" width={{ base: "100%", md: "30%" }}>
              <Box
                p="1rem"
                border="1px solid black"
                backgroundColor="white"
                borderRadius="10px"
              >
                <Image
                  backgroundColor="black"
                  p="0.2rem"
                  borderRadius="10px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFTeex5O6k1SqmHwzJvqH-vaLn1D2Kf4iwQ&usqp=CAU"
                  width="100%"
                  height="200px"
                />
                <Flex justify="space-between" mt="1rem">
                  <Text fontWeight="600">Andar Bahar</Text>
                  <Flex width="40%" alignItems="center">
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                  </Flex>
                </Flex>
                <Text fontWeight="600" color="green">
                  200 Player
                </Text>
                <Text fontWeight="600" color="green" mt="1" mb="1">
                  $1,00,000
                </Text>
                <Flex
                  backgroundColor="#e6e6e6"
                  justifyContent="space-between"
                  alignItems="center"
                  p="0.3rem"
                  borderRadius="10px"
                >
                  <Text
                    backgroundColor="#e6e6e6"
                    color="green"
                    padding="0.3rem"
                    fontWeight="600"
                  >
                    Active
                  </Text>
                  <Switch size="sm" id="isChecked" isChecked />
                </Flex>
              </Box>

              <Box></Box>
            </Box>
            {/* Card Six */}
            <Box p="1rem" width={{ base: "100%", md: "30%" }}>
              <Box
                p="1rem"
                border="1px solid black"
                backgroundColor="white"
                borderRadius="10px"
              >
                <Image
                  backgroundColor="black"
                  p="0.2rem"
                  borderRadius="10px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniu6jm2TgSsBgOfqmCCLbyNdOstNGb2GLtyX_MfJc15iPLo0bZpcYDSr3u4pG_WeROHE&usqp=CAU"
                  width="100%"
                  height="200px"
                />
                <Flex justify="space-between" mt="1rem">
                  <Text fontWeight="600">King Queen</Text>
                  <Flex width="40%" alignItems="center">
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                    <FaStar cursor={"pointer"} />
                  </Flex>
                </Flex>
                <Text fontWeight="600" color="green">
                  200 Player
                </Text>
                <Text fontWeight="600" color="green" mt="1" mb="1">
                  $1,00,000
                </Text>
                <Flex
                  backgroundColor="#e6e6e6"
                  justifyContent="space-between"
                  alignItems="center"
                  p="0.3rem"
                  borderRadius="10px"
                >
                  <Text
                    backgroundColor="#e6e6e6"
                    color="green"
                    padding="0.3rem"
                    fontWeight="600"
                  >
                    Active
                  </Text>
                  <Switch size="sm" id="isChecked" isChecked />
                </Flex>
              </Box>

              <Box></Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default ListOfGame;
