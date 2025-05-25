import Image from 'next/image';

import { cn, } from '@/utils/cn';

import { TUser, } from '@/types/TUser';

type ChatMessages = {
  className ?: string;
  user ?: TUser;
};

const messages = [
  {
    id: 1,
    message: 'I&apos;ve had a good experience!',
    isUser: false,
  },
  {
    id: 2,
    message: 'I\'ve had a good experience!" I signed up for a 7-day trial and have already received many helpful tips and predictions. The reports are very accurate and personalized. Definitely recommend it!',
    isUser: false,
  },
  {
    id: 3,
    message: 'Will I get married? If yes - when?',
    isUser: false,
  },

];

type TMessage = {
  message : string;
  isUser : boolean;
};

const Message = ( { message, isUser, } : TMessage, ) => {
  return (
    <div className="flex flex-col items-start gap-[16px]">
      <div className="flex gap-[16px]">
        <Image
          src={ '/images/users/user2.png' }
          alt="user"
          width={ 48 }
          height={ 48 }
        />
        <div className="flex flex-col">
          <span className="text-[12px] text-[#676B7D]">3 min</span>
          <div className="flex items-center gap-[16px]">
            <span className="text-[20px]">{ user?.name }</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[16px]">
        <span className="text-[14px] text-[#CDD1E4] bg-[#161c38] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] px-[20px] py-[16px]"></span>
      </div>
    </div>
  );
};

const ChatMessages = ( { className, user, } : ChatMessages, ) => {
  return (
    <div
      className={ cn(
        'ChatMessages',
        'flex flex-col justify-start gap-[16px]',
        'grow',
        className,
      ) }
    >

      { /* MESSAGES */ }

      { /* HEADER */ }

    </div>
  );
};

export default ChatMessages;
