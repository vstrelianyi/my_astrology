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
          'fixed z-2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
          'min-w-[700px] max-w-[1000px] h-[80vh]',
          'rounded-[32px]',
          'flex flex-col',
          'bg-blue',
          className,
        ) }
      >
        <div className="relative grow pt-[70px]">
          <button
            className="absolute top-[40px] right-[40px]"
            onClick={ handleCloseModal }
          >
            <IconClose/>
          </button>

          { appState?.modalContent }
          { children }

        </div>
      </div>

      <Overlay />
    </>
  );
};

export default Modal;