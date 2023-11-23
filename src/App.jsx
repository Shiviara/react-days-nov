import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export const UserContext = createContext();

const user = { name: "Steve" };

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const url = "https://your-firebase-rest-endpoint.com/posts.json";
      const response = await fetch(url);
      const data = await response.json();
      setUser(data);
    }
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </UserContext.Provider>
  );
}

export default App;
