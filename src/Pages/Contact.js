import { useSelector } from "react-redux";

export const Contact = () => {
  const seletore = useSelector((state) => state.user);
  return (
    <div>
      <h1>This is Contact Page {seletore.userName}</h1>
    </div>
  );
};
