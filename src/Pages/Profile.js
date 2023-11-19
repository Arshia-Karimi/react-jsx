import { useParams } from "react-router-dom";
import { ChangeProfile } from "../Components/ChangeProfile";
import { useContext } from "react";
import { ProfileContext } from "../App";
export const Profile = () => {
  const { name, id } = useParams();
  const { username } = useContext(ProfileContext);
  return (
    <div>
      <div className=""></div>
      <h1>
        This is Profile Page Of {name} - {id}
      </h1>
      <h1>profile page - username is {username}</h1>
      <ChangeProfile />
    </div>
  );
};
