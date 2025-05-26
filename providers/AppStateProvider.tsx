'use client';

import { useState, createContext, ReactNode, } from 'react';

export type TAppState = {
  modalContent : React.ReactNode | null;
};

interface AppStateContextData {
  appState : TAppState;
  setAppState : React.Dispatch<React.SetStateAction<TAppState>>;
}

interface AppStateProviderProps {
  children : ReactNode;
}
const AppStateContext = createContext<AppStateContextData | undefined>( undefined, );

const AppStateProvider : React.FC<AppStateProviderProps> = ( { children, }, ) => {
  const [ appState, setAppState, ] = useState<TAppState>( {
    modalContent: null,
  }, );

  const contextValue : AppStateContextData = {
    appState,
    setAppState,
  };

  return (
    <AppStateContext.Provider value={ contextValue }>
      { children }
    </AppStateContext.Provider>
  );
};

export {
  AppStateContext,
  AppStateProvider,
};
