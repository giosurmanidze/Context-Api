import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

const SetUser = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <input
        type="text"
        className="bg-gray-500"
        onChange={(e) =>
          setUser({ email: "giorgi@gmail.com", name: e.target.value })
        }
      />
    </div>
  );
};

export default SetUser;
