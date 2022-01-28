import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { User } from "../types/api/User";
type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext({} as LoginUserContextType);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>();

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
