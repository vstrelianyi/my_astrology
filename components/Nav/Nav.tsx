import Image from 'next/image';
import Link from 'next/link';

import Chip from '@/components/Chip/Chip';
import IconAries from '@/components/Icons/IconAries';
import IconCoins from '@/components/Icons/IconCoins';
import IconLogo from '@/components/Icons/IconLogo';
import IconPlus from '@/components/Icons/IconPlus';
import crown from '@/public/images/crown.png';
import { cn, } from '@/utils/cn';

import IconChevronDown from '../Icons/IconChevronDown';

type TNavProps = {
  className ?: string;
};

const Nav = ( { className, } : TNavProps, ) => {
  const credits = 550;

  return (
    <nav
      className={ cn(
        'flex items-center',
        'gap-[56px]',
        'py-[24px]',
        className,
      ) }
    >
      <Link
        className="mr-[40px]"
        href="/"
      >
        <IconLogo />
      </Link>
      <Link
        className="hover:text-purple hover:font-[700]"
        href="/"
      >Home</Link>
      <Link
        className="flex items-center justify-between gap-[10px] hover:text-purple hover:font-[700]"
        href="/chatroom"
      >
        <span>Chatroom</span>
        <span className="rounded-full bg-[#0e1532] h-[32px] w-[32px] flex items-center justify-center text-[#676B7D]">0</span>
      </Link>

      <div className="ml-auto mr-0 flex gap-[16px]">
        <Chip className="flex gap-[24px] bg-[#0e1532]">
          <div className="flex items-center">
            <div className="mr-[10px]"><span className="text-purple font-[700] mr-[5px]">{ credits }</span>credits</div>
            <IconCoins />
          </div>
          <button className="flex items-center gap-[8px] hover:text-purple">
            <IconPlus />
            <span>Add</span>
          </button>
        </Chip>
        <Chip className="bg-blue-light text-[18px] items-stretch px-[0px]">
          <button className="px-[22px]">
            Chat now with psychic
          </button>
        </Chip>

        <div className="flex items-center gap-[12px]">
          <div className="flex items-center justify-center rounded-full bg-[#09102e] h-[64px] w-[64px] relative">
            <Image
              src={ crown }
              alt="crown"
              width={ 20 }
              height={ 12 }
              className="absolute top-[-8px] left-[50%] translate-x-[-50%]"
            />
            <IconAries />
          </div>
          <button className="">
            <IconChevronDown />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;