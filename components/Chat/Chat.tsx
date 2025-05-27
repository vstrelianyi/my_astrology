'use client';

import Image from 'next/image';
import { useContext, } from 'react';

import { TAppState, AppStateContext, } from '@/providers/AppStateProvider';
import { cn, } from '@/utils/cn';

import IconClock from '../Icons/IconClock';

import ChatMessages from './ChatMessages/ChatMessages';
import Input from './Input/Input';
import ModalOutOfCredits from './ModalOutOfCredits/ModalOutOfCredits';

import { TUser, } from '@/types/TUser';
type Chat = {
  className ?: string;
  user : TUser;
};

const Chat = ( { className, user, } : Chat, ) => {
  const context = useContext( AppStateContext, );
  if ( !context ) throw new Error( 'Modal must be used within AppStateProvider', );
  const { appState, setAppState, } = context;

  const handleStopChatClick = () => {
    setAppState?.( ( prevState : TAppState, ) => ( {
      ...prevState,
      modalContent: <ModalOutOfCredits />,
    } ), );
  };

  return (
    <div
      className={ cn( [
        'Chat',
        'bg-[#0E1532]',
        'rounded-[24px]',
        'p-[24px]',
        className,
        'flex flex-col justify-between',
      ], )
      }
    >
      { /* HEADER */ }
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          { user && (
            <div className="flex gap-[16px] shrink-0">

              { typeof user?.imageUser === 'string' ? (
                <Image
                  src={ user?.imageUser }
                  alt="user"
                  width={ 48 }
                  height={ 48 }
                />
              ) : (
                <div className="flex items-center justify-center bg-[#161c38] rounded-full h-[48px] w-[48px]">
                  <span className="text-[20px]">{ user?.name[0] }</span>
                </div>
              ) }

              <div className="flex flex-col">
                <div className="flex items-center gap-[16px]">
                  { user?.imageFlag && (
                    <Image
                      src={ user?.imageFlag }
                      alt="flag"
                      width={ 20 }
                      height={ 16 }
                      className="w-[20px] h-[16px]"
                    />
                  ) }
                  <span className="text-[12px] xl:text-[20px]">{ user?.name }</span>
                </div>
                <div className="flex gap-[8px] text-[12px]">
                  <span className="text-[#D7BD8C] font-[700]">{ user?.rate }</span>
                  <span className="text-[#CDD1E4]">credits/minute</span>
                </div>
              </div>

            </div>
          ) }

          <div className="hidden xl:flex items-end justify-end gap-[8px]">
            <span className="text-[32px] leading-[1]">00:15</span><span className="text-[16px] leading-[1] text-[#CDD1E4]">min</span>
          </div>

          <div className="flex xl:hidden flex-col items-end">
            <span className="text-[#CDD1E4] text-[12px] opacity-50">In your account now</span>
            <div className="flex items-center text-[14px]">
              <span className="text-purple font-[700] mr-[6px]">{ 550 }</span><span>credits</span>
            </div>
          </div>

        </div>

        <div className="hidden xl:flex gap-[16px] items-center self-end">
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center justify-center bg-[#161c38] rounded-full h-[40px] w-[40px]">
              <IconClock />
            </div>
            <span className="text-[16px] text-[#CDD1E4]"><b>3 min</b> left</span>
          </div>

          <button
            onClick={ handleStopChatClick }
            className="flex items-center bg-[#1a213c] h-[48px] rounded-[64px] px-[24px]"
          >
            <div className="flex w-[12px] h-[12px] bg-[#d7bd8c] rounded-[2px] mr-[12px]"></div>
            <span className="text-[16px] text-[#CDD1E4]">Stop chat</span>
          </button>
        </div>

        <hr className="my-[16px]"/>
      </div>

      <ChatMessages user={ user } />

      { /* BOTTOM */ }
      <Input
        className="mt-[20px]"
        placeholder="Type your text here"
      />
    </div>
  );
};

export default Chat;