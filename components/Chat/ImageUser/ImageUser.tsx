import Image from 'next/image';
import React from 'react';

import { cn, } from '@/utils/cn';

type TImageUser = {
  className ?: string;
  imageUser : string | React.ReactNode | null;
  userName : string;
};

const ImageUser = ( { className, imageUser, userName, } : TImageUser, ) => {
  return (
    <div
      className={ cn(
        'ImageUser flex items-center justify-center w-[48px] h-[48px] relative order-1',
        className,
      ) }
    >
      { typeof imageUser === 'string' ? (
        <Image
          src={ imageUser }
          alt="user"
          width={ 48 }
          height={ 48 }
        /> ) : (
        <>
          { imageUser ? (
            <div className="flex items-center justify-center bg-[#161c38] rounded-full h-[48px] w-[48px]">
              { imageUser }
            </div>
          ) : (
            <div className="flex items-center justify-center bg-[#161c38] rounded-full h-[48px] w-[48px]">
              <span className="text-[20px]">{ userName[0] }</span>
            </div>
          ) }
        </>

      ) }
      <span className="absolute top-[5px] right-[5px] h-[6px] w-[6px] rounded-full bg-green"></span>
    </div>
  );
};

export default ImageUser;