// @ts-nocheck
import create from 'zustand';
import { persist } from 'zustand/middleware';

type User = {
  fullName: string,
  email: string,
  score: number,
}

interface IUserContext {
  user: User,
  updateUser: (updateData: Partial<User>) => void,
}

export const useStore = create<IUserContext>(
  persist(
    (set) => ({
      user: {
        email: '',
        fullName: '',
        score: 0,
      },
      updateUser: (newUserData) => {
        set(state => {
          return {
            ...state,
            user: {
              ...state.user,
              ...newUserData,
            },
          };
        })
      }
    }), {
      name: "user-store-persist",
      getStorage: () => window.sessionStorage,
    }
  )
);