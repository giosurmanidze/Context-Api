import SetUser from "./SetUser";
import ShowUser from "./ShowUser";
import UserProvider from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <ShowUser />
      <SetUser />
    </UserProvider>
  );
};

export default App;
