import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  let persistencia = localStorage.getItem("user");
  persistencia = JSON.parse(persistencia);
  const [user, setUser] = useState(persistencia);

  function login(dados) {
    setUser(dados);
    localStorage.setItem("user", JSON.stringify(dados));
  }

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;