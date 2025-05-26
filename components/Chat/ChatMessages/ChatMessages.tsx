import Image from 'next/image';

import ImageUser from '@/components/Chat/ImageUser/ImageUser';
import IconTaurus from '@/components/Icons/IconTaurus';
import { cn, } from '@/utils/cn';

import { TUser, } from '@/types/TUser';
type ChatMessages = {
  className ?: string;
  user ?: TUser;
};

type TMessage = {
  message : string;
  isUser : boolean;
  showUser ?: boolean;
  user ?: TUser;
  isFirstMessageByUser ?: boolean;
};

const Message = ( { message, isUser, user, isFirstMessageByUser, } : TMessage, ) => {
  return (
    <div
      className={ cn(
        'flex flex-col gap-[16px]',
        isUser ? 'items-end' : 'items-start',
      ) }
    >

      { isFirstMessageByUser && (
        <div className="flex gap-[16px]">

          <ImageUser
            imageUser={ user?.imageUser }
            userName={ user?.name || 'No Name' }
            className={ cn(
              isUser ? 'order-2' : 'order-1',
            ) }
          />

          <div
            className={ cn(
              'flex flex-col',
              isUser ? 'order-1' : 'order-2',
            ) }
          >
            <span className="text-[12px] text-[#676B7D]">3 min</span>
            <div className="flex items-center gap-[16px]">
              <span className="text-[20px]">{ user?.name }</span>
            </div>
          </div>

        </div>
      ) }

      <div className="flex flex-col items-start gap-[16px] max-w-[50%]">
        <span
          className={ cn(
            'text-[14px] text-[#CDD1E4] px-[20px] py-[16px]',
            isUser ? 'bg-[#513B73]' : 'bg-[#161c38]',
            isUser ? 'rounded-tl-[24px] rounded-br-[24px] rounded-bl-[24px]' : 'rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]',
          ) }
        >{ message }</span>
      </div>

    </div>
  );
};

const ChatMessages = ( { className, user, } : ChatMessages, ) => {
  const userMe = {
    name: 'User',
    credits: 30,
    imageUser: <IconTaurus />,
    imageFlag: null,
    rate: 30,
  };

  const messages = [
    {
      id: 1,
      message: 'I\'ve had a good experience!',
      user: user,
      isUser: false,
    },
    {
      id: 2,
      message: 'I\'ve had a good experience!" I signed up for a 7-day trial and have already received many helpful tips and predictions. The reports are very accurate and personalized. Definitely recommend it!',
      user: user,
      isUser: false,
    },
    {
      id: 3,
      message: 'Will I get married? If yes - when?',
      user: userMe,
      isUser: true,
    },
  ];

  return (
    <div
      className={ cn(
        'ChatMessages',
        'flex flex-col justify-start gap-[4px]',
        'grow',
        className,
      ) }
    >

      { /* MESSAGES */ }
      { messages.map( ( message, index, ) => {
        const isFirstMessageByUser = index === 0 || messages[index - 1].user?.name !== message.user?.name;

        return (
          <Message
            key={ message.id }
            { ...message }
            isFirstMessageByUser={ isFirstMessageByUser }
          />
        );
      }, ) }

    </div>
  );
};

export default ChatMessages;
