import { createContext, useContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const AppContext = createContext({});

const withAppProvider = (Component) => {
  const WrapperComponent = () => {
    const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

    return (
      <AppContext.Provider value={{ cartItems, setCartItems }}>
        <Component />
      </AppContext.Provider>
    );
  };

  return WrapperComponent;
};

export default withAppProvider;

export const useApp = () => {
  return useContext(AppContext);
};
