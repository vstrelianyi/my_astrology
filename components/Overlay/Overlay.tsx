import { useContext, } from 'react';

import { AppStateContext, TAppState, } from '@/providers/AppStateProvider';

const Overlay = () => {
  const context = useContext( AppStateContext, );
  if ( !context ) throw new Error( 'Modal must be used within AppStateProvider', );
  const { setAppState, } = context;
  const handleOverlayClick = () => {
    setAppState?.( ( prevState : TAppState, ) => ( {
      ...prevState,
      modalContent: null,
    } ), );
  };

  return (
    <div
      className="Overlay fixed z-1 inset-0 bg-black bg-[#020d40] opacity-80"
      onClick={ handleOverlayClick }
    />
  );
};

export default Overlay;
