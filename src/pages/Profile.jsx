import { useContext } from "react";
import { UserContext } from "../App";

export default function Profile() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Profile</h1>
      <h2>{user.name}</h2>
    </>
  );
}
