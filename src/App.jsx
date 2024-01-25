import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Dashbord from "./Components/Dashbor/Dashbord";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayOut from "./Components/RootLayOut/RootLayOut";
import ListOfGame from "./Components/ListOfGames/ListOfGame";
import ListOfUser from "./Components/ListOfUsers/ListOfUsers";
import AccountStatment from "./Components/AccountStatement/AccountStatment";
import LogOut from "./Components/LogOut/LogOut";
import Registration from "./Components/Registration/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Dashbord />} />
          <Route path="listofgame" element={<ListOfGame />} />
          <Route path="listofuser" element={<ListOfUser />} />
          <Route path="accountstatement" element={<AccountStatment />} />
          
          {/* <Route path="logout" element={<LogOut />} /> */}
        </Route>
      </Route>
      <Route path="registration" element={<Registration />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
