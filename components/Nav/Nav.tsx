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

import styles from './Nav.module.scss';

type TNavProps = {
  className ?: string;
};

const Nav = ( { className, } : TNavProps, ) => {
  const credits = 550;

  return (
    <nav
      className={ cn(
        styles.Nav,
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
        className=""
        href="/"
      >
        <div className="nav-text relative hover:text-purple">
          <span className="nav-text-base whitespace-nowrap">Home</span>
          <span className="nav-text-bold absolute left-[24px] lg:left-[50%] top-[50%] transform lg:translate-x-[-50%] translate-y-[-50%] font-[700]">Home</span>
        </div>
      </Link>

      <Link
        className="flex items-center justify-between gap-[10px]"
        href="/chatroom"
      >
        <div className="nav-text relative hover:text-purple">
          <span className="nav-text-base whitespace-nowrap">Chatroom</span>
          <span className="nav-text-bold absolute left-[24px] lg:left-[50%] top-[50%] transform lg:translate-x-[-50%] translate-y-[-50%] font-[700]">Chatroom</span>
        </div>
        <span className="rounded-full bg-[#0e1532] h-[32px] w-[32px] flex items-center justify-center text-[#676B7D]">0</span>
      </Link>

      <div className="ml-auto mr-0 flex gap-[16px]">

        <button className="flex gap-[24px] bg-[#0e1532] px-[24px] rounded-[64px] stroke-[#D7BD8C] hover:stroke-purple hover:text-purple">
          <div className="flex items-center">
            <div className="mr-[10px]">
              <span className="text-purple font-[700] mr-[5px]">{ credits }</span>
              <span className="text-white">credits</span>
            </div>
            <IconCoins />
          </div>
          <div className="flex items-center gap-[8px]">
            <IconPlus />
            <span>Add</span>
          </div>
        </button>

        <button className="flex items-center justify-center bg-blue-light rounded-[64px] hover:bg-purple">
          <Chip className="text-[18px] px-[22px]">
            Chat now with psychic
          </Chip>
        </button>

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
          <button className="stroke-white hover:stroke-purple">
            <IconChevronDown />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;