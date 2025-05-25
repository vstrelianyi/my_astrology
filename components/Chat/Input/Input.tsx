import IconSend from '@/components/Icons/IconSend';
import { cn, } from '@/utils/cn';

type TProps = {
  className ?: string;
  placeholder ?: string;
  callback ?: () => void;
};

const Input = ( { className, placeholder, callback, } : TProps, ) => {
  return (
    <div
      className={ cn( [
        'relative',
        'bg-blue',
        'h-[64px]',
        'px-[20px]',
        'rounded-[64px]',
        'flex',
        className,
      ], )
      }
    >
      <input
        className="text-[16px] w-full"
        type="text"
        placeholder={ placeholder }
      />
      <button
        className="absolute right-[8px] top-[50%] translate-y-[-50%] h-[48px] w-[48px] flex items-center justify-center bg-blue-bg rounded-full"
        onClick={ callback }
      >
        <IconSend/>
      </button>
    </div>
  );
};

export default Input;