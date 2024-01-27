import {
  Flex,
  Box,
  Text,
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  Avatar,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Dashbord = () => {
  const [data, setData] = useState([]);
  const [topplayer, setTopPlayer] = useState([]);
  const [ActiveUser, setActiveUser] = useState([]);
  const [TotleRevenue, setTotleRevenue] = useState();

  const [search, setSearch] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    TredingGames();
    TopPlayers();
    TotalActiveUser();
    TotaleRevenue();
  }, []);

  const TotaleRevenue = async () => {
    try {
      const config = {
        method: "GET",
        url: "http://localhost:5000/user/get_revenue",
      };
      const response = await axios(config);
      // console.log(response,'Totle revenue');
      setTotleRevenue(response?.data?.totalRevenue);
    } catch (err) {
      console.error(err);
    }
  };

  const columnsAllPlayer = [
    {
      name: "Profile",
      selector: (row) => row.profile,
      cell: (row) => (
        <Avatar src="https://i.pinimg.com/564x/eb/fe/80/ebfe807d22df5cd97d9dae10aa04ad61.jpg" />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.userId,
    },
    {
      name: "Amount",
      selector: (row) => row.balance,
      sortable: true,
    },
  ];

  const TredingGames = async () => {
    try {
      const config = {
        method: "GET",
        url: "http://localhost:5000/user/get_TrendingGame",
      };
      const response = await axios(config);
      setData(response?.data);
      console.log(response?.data,"Trending Game");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const TopPlayers = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_TopPlayer",
    };
    const response = await axios(config);
    setTopPlayer(response?.data?.Player);
    setFilterData(response?.data?.Player);
    console.log(response.data, "Top Player");
  };

  useEffect(() => {
    const result = topplayer.filter((player) => {
      return player.userId.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search]);

  const TotalActiveUser = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_ActiveUsers",
    };

    const response = await axios(config);
    setActiveUser(response?.data?.Total);
    console.log(response?.data, "responce");
  };
  return (
    <>
      <Box
        width={{ base: "90%", md: "60rem" }}
        ml={{ base: "1rem", md: "1rem" }}
        mx={{ base: "1rem", md: "2rem" }}
        p="0.5rem"
        mt="2rem"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="2rem"
          width={["100%", "100%"]}
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            p={["0.5rem", "0.5rem", "0.5rem"]}
            width={["100%", "30%"]}
            textAlign={["center", "center", "center"]}
            borderRadius="10px"
          >
            <Text fontWeight="bold">{ActiveUser}</Text>
            <Text color="#7D0A0A" fontWeight="500">
              Total Active Users
            </Text>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            p="0.5rem"
            width={["100%", "30%"]}
            textAlign="center"
            bg='green'
            borderRadius="10px"
          >
            <Text fontWeight="bold" color='white'>+{TotleRevenue}</Text>
            <Text color="white" fontWeight="500">
              Total Revenue
            </Text>
          </Box>
        </Flex>

        {/* Table For Treding Player */}
        <Box mt="1rem">
          <Text fontSize="2rem" fontWeight="bold">
            Trending games
          </Text>
          <Text fontSize="sm" fontWeight="500" mb="2">
            Accept the Challenge
          </Text>
        </Box>
        {/* Table */}
        <Table
          variant="striped"
          width="100%"
          borderWidth="1px"
          borderRadius="md"
        >
          <Tbody>
            {data &&
              data?.Game?.map((game) => {
                const { gamename, user } = game;
                return (
                  <Tr key={game?._id}>
                    <Td>
                      <Avatar src="https://store-images.s-microsoft.com/image/apps.17247.13552113910340840.b3fbbc98-4d8c-47a1-902e-7532f8d4de3e.288a680d-b29e-40fe-8a32-18ff634cbd50?mode=scale&q=90&h=1080&w=1920" />
                    </Td>

                    <Td fontWeight="500">{gamename}</Td>
                    <Td fontWeight="500" color="green">
                      {user}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>

        {/* Top Player */}

        <Box mt="1rem">
          <Text fontSize="2rem" fontWeight="bold">
            Top Players
          </Text>
          <Text fontSize="sm" fontWeight="500" mb="2">
            Accept the Challenge
          </Text>
        </Box>
        {/* <Table
          variant="striped"
          width="100%"
          borderWidth="1px"
          borderRadius="md"
        >
          <Tbody>
            {topplayer &&
              topplayer?.Player?.map((topplayers) => {
                const {userId ,  balance }= topplayers;
                return (
                  <Tr key={topplayers?._id}>
                    <Td>
                      <Avatar src="https://i.pinimg.com/564x/eb/fe/80/ebfe807d22df5cd97d9dae10aa04ad61.jpg" />
                    </Td>
                    <Td fontWeight="500">{userId}</Td>
                    <Td fontWeight="500">{balance}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table> */}

        <DataTable
          columns={columnsAllPlayer}
          data={filterData}
          pagination
          fixedHeader
          selectableRows
          highlightOnHover
          subHeader
          subHeaderComponent={
            <Input
              type="text"
              placeholder="Search...."
              w="30%"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
        />
      </Box>
    </>
  );
};

export default Dashbord;
