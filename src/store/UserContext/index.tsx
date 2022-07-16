import React, { createContext, useState } from "react";

type User = {
  fullName: string,
  email: string,
  score: number,
}

interface IUserContext {
  user: User,
  updateUser: (updateData: Partial<User>) => void,
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    email: '',
    fullName: '',
    score: 0,
  })

  function updateUser(data: Partial<User>) {
    setUser((prev) => ({...prev, ...data}));
  }

  return (
    <UserContext.Provider 
      value={{
        updateUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}