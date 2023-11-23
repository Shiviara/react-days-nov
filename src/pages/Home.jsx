import { useContext } from "react";
import { UserContext } from "../App";

export default function Home() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Home</h1>
      <h2>{user.name}</h2>
    </>
  );
}
