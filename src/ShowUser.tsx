import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const ShowUser = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default ShowUser;
