import { useParams } from "react-router-dom";
export const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <div className="">
        <p></p>
      </div>
      <h1>This is Profile Page Of {name}</h1>
    </div>
  );
};
