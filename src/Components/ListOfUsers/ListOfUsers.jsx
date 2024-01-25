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
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const ListOfUser = () => {
  const [allPlayer, setAllPlayer] = useState([]);
  const [TopPlayers, setTopPlayers] = useState([]);
  const [search, setSearch] = useState();
  const [FilterData, setFilterData] = useState();

  const [search2, setSearch2] = useState();
  const [FilterData2, setFilterData2] = useState();

  // Top Player

  const columnsTopPlayer = [
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

  useEffect(() => {
    AllPlayer();
    TopPlayer();
  }, []);

  useEffect(() => {
    const result = allPlayer.filter((player) => {
      return player.userId.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(result);
  }, [search]);

  useEffect(() => {
    const result = TopPlayers.filter((player) => {
      return player.userId.toLowerCase().match(search2.toLowerCase());
    });
    setFilterData2(result);
  }, [search2]);

  const AllPlayer = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_AllUsers",
    };
    const response = await axios(config);
    setAllPlayer(response?.data?.Users);
    setFilterData(response?.data?.Users);
    console.log(response?.data?.Users, "Responce All Player");
  };

  const TopPlayer = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/user/get_TopPlayer",
    };

    const response = await axios(config);
    setTopPlayers(response.data?.Player);
    setFilterData2(response.data?.Player)
    console.log(response.data?.Player, "response Top Player");
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
        <Box mt="1rem">
          <Text fontSize="2rem" fontWeight="bold">
            Top Players
          </Text>
          <Text fontSize="sm" fontWeight="500" mb="2">
            Accept the Challenge
          </Text>
        </Box>

        <DataTable
          columns={columnsTopPlayer}
          data={FilterData2}
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
              value={search2}
              onChange={(e) => setSearch2(e.target.value)}
            />
          }
        />

        {/* All Player */}
        <Box mt="1rem" mb="1rem">
          <Text fontSize="2rem" fontWeight="bold">
            All Player
          </Text>
          <Text fontSize="sm" fontWeight="500" mb="2">
            Accept the Challenge
          </Text>
        </Box>

        <DataTable
          columns={columnsAllPlayer}
          data={FilterData}
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
export default ListOfUser;
