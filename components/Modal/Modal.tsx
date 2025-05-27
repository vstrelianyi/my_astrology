'use client';

import { useContext, } from 'react';

import IconClose from '@/components/Icons/IconClose';
import Overlay from '@/components/Overlay/Overlay';
import { AppStateContext, TAppState, } from '@/providers/AppStateProvider';
import { cn, } from '@/utils/cn';

type TModalProps = {
  className ?: string;
  children ?: React.ReactNode;
};

const Modal = ( { className, children, } : TModalProps, ) => {
  const context = useContext( AppStateContext, );
  if ( !context ) throw new Error( 'Modal must be used within AppStateProvider', );
  const { appState, setAppState, } = context;

  const handleCloseModal = () => {
    setAppState?.( ( prevState : TAppState, ) => ( {
      ...prevState,
      modalContent: null,
    } ), );
  };

  if ( !appState?.modalContent || children ) return null;

  return (
    <>
      <div
        className={ cn(
          'Modal',
          'fixed z-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'min-w-[100%] xl:min-w-[900px] xl:max-w-[98vw]',
          'rounded-[32px] px-[20px] py-[40px] xl:p-[40px]',
          'flex flex-col',
          'bg-blue',
          className,
        ) }
      >
        <button
          className="absolute z-1 top-[40px] right-[40px]"
          onClick={ handleCloseModal }
        >
          <IconClose/>
        </button>

        <div className="relative grow">
          { appState?.modalContent }
          { children }
        </div>

      </div>

      <Overlay />
    </>
  );
};

export default Modal;