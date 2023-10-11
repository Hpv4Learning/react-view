import React, { createContext } from "react";
import { useInterpret } from "@xstate/react";
import { drawerMachine } from "../machine/drawerMachine";
import { InterpreterFrom } from "xstate";

type DrawerStateContextType = InterpreterFrom<typeof drawerMachine>;

export const DrawerStateContext = createContext({} as DrawerStateContextType);

export const DrawerStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authService = useInterpret(drawerMachine);

  return (
    <DrawerStateContext.Provider value={authService}>
      {children}
    </DrawerStateContext.Provider>
  );
};

export const useDrawerState = () => React.useContext(DrawerStateContext);
