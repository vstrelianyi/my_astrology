import { cn, } from '@/utils/cn';

type TProps = {
  className ?: string;
  children : React.ReactNode;
};

const Chip = ( { className, children, } : TProps, ) => {
  return (
    <div
      className={ cn( [
        'rounded-[40px]',
        'flex items-center justify-center',
        'h-[68px]',
        'px-[22px]',
        className,
      ], )
      }
    >
      { children }
    </div>
  );
};

export default Chip;