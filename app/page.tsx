import Chat from '@/components/Chat/Chat';

export default function PageChatroom() {
  const user = {
    name: 'Emilia Solntseva',
    credits: 30,
    imageUser: '/images/users/user1.png',
    imageFlag: '/images/flags/flag1.png',
    rate: 30,
  };

  return (
    <div
      className="flex flex-col grow"
    >
      <div className="flex items-center justify-between mb-[32px]">
        <h1 className="font-[300]">Chatroom</h1>

        <div className="flex flex-col items-end">
          <span className="text-[#CDD1E4] opacity-50">In your account now</span>
          <div className="flex items-center text-[20px]"><span className="text-purple text-[24px] font-[700] mr-[10px]">{ 550 }</span><span>credits</span></div>
        </div>
      </div>

      <Chat
        user={ user }
        className="grow w-[986px] mx-auto"
      />

    </div>
  );
}
