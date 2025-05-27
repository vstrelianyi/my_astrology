import { useContext, } from 'react';
import { useState, } from 'react';

import IconCoins from '@/components/Icons/IconCoins';
import IconCoinsPile from '@/components/Icons/IconCoinsPile';
import IconFire from '@/components/Icons/IconFire';
import { AppStateContext, TAppState, } from '@/providers/AppStateProvider';
import { cn, } from '@/utils/cn';

function ModalOutOfCredits() {
  const context = useContext( AppStateContext, );
  if ( !context ) throw new Error( 'ModalOutOfCredits must be used within AppStateProvider', );
  const { setAppState, } = context;

  const packages = [
    {
      title: 'Mega',
      credits: 2500,
      price: 49,
      total: 197,
      perCredit: 0.08,
      label: (
        <div
          className={ cn(
            'absolute top-[-18px] left-[50%] -translate-x-1/2',
            'h-[32px] rounded-[40px]',
            'flex items-center justify-center gap-[6px]',
            'bg-gradient-to-r from-[#A073E4] to-[#99ABFC]',
            'font-[700] text-[#060916] text-[10px] xl:text-[14px] leading-[1] uppercase whitespace-nowrap',
            'px-[12px]',
          ) }
        >
          <IconFire />
          <span>Best value</span>
        </div>
      ),
    },
    {
      title: 'Astro',
      credits: 1200,
      price: 49,
      total: 97,
      perCredit: 0.08,
    },
    {
      title: 'Premium',
      credits: 500,
      price: null,
      total: 149,
      perCredit: 0.08,
      label: (
        <div
          className={ cn(
            'absolute top-[-18px] left-[50%] -translate-x-1/2',
            'h-[32px] rounded-[40px]',
            'flex items-center justify-center gap-[6px]',
            'bg-[#F5E8D0]',
            'font-[700] text-[#060916] text-[10px] xl:text-[14px] leading-[1] uppercase whitespace-nowrap',
            'px-[12px]',
          ) }
        >
          <span>MOST POPULAR</span>
        </div>
      ),
    },
    {
      title: 'Mega',
      credits: 150,
      price: 49,
      total: 19,
      perCredit: 0.08,
    },
  ];

  const handleCloseModal = () => {
    setAppState?.( ( prevState : TAppState, ) => ( {
      ...prevState,
      modalContent: null,
    } ), );
  };

  const [ isSelected, setIsSelected, ] = useState<number>( 0, );

  return (
    <div className="flex flex-col items-center pt-[30px]">
      <h1 className="text-[32px] xl:!text-[56px] text-pink leading-[1] text-center">You&apos;ve Run Out of Credits!</h1>

      <span className="mt-[20px] mb-[40px]">=</span>

      <div className="flex items-center gap-[10px] rounded-[40px] bg-[#0e1532] px-[20px] h-[32px] mb-[10px] text-[10px] xl:text-[16px]">
        <IconCoins />
        <span>ON YOUR ACCOUNT NOW</span>
      </div>

      <div className="flex items-center gap-[10px] mb-[40px]">
        <span className="text-[18px] xl:text-[32px] font-[300] text-purple">0</span><span className="text-[14px] xl:text-[20px]">credits</span>
      </div>

      <div className="flex gap-y-[16px] xl:gap-y-[8px] gap-[8px] mb-[40px] flex-wrap xl:flex-nowrap">
        { packages.map( ( item, index, ) => (
          <Item
            className="w-[calc(50%-8px)] xl:w-[224px]"
            key={ index }
            { ...item }
            isSelected={ isSelected === index }
            onClick={ () => setIsSelected( index, ) }
          />
        ), ) }
      </div>

      <button
        className={ cn(
          'flex items-center justify-center',
          'bg-blue-light rounded-[64px] hover:bg-purple',
          'text-[18px] px-[40px]',
          'h-[68px]',
          'mb-[24px]',
        ) }
      >
        Buy more credits
      </button>

      <button
        className="text-gold text-[18px]"
        onClick={ handleCloseModal }
      >
        Finish
      </button>

    </div>
  );
}

type TItemProps = {
  className ?: string;
  title : string;
  credits : number;
  price ?: number | null;
  total : number;
  perCredit : number;
  label ?: React.ReactNode;
  isSelected ?: boolean;
  onClick ?: () => void;
};

const Item = ( { className, title, credits, price, total, perCredit, label, isSelected, onClick, } : TItemProps, ) => {
  return (
    <button
      className={ cn(
        'flex flex-col',
        'p-[16px] xl:p-[24px] leading-[1]',
        'rounded-[24px] border-[4px] border-[#09102e] bg-[#09102e] ',
        'relative',
        isSelected && 'border-gold bg-[#1a203c]',
        className,
      ) }
      onClick={ onClick }
    >
      { label && ( <>{ label }</> ) }

      { /* top */ }
      <div className="flex justify-between mb-[20px]">
        { /* left */ }
        <div className="flex flex-col">
          <span className="font-[700] text-[20px] xl:text-[24px] font-montserrat mb-[4px] text-left">{ title }</span>
          <span className="text-[16px] text-[##CDD1E4] opacity-70 text-left">{ credits } credits</span>
        </div>
        { /* right */ }
        <div className="hidden xl:flex flex-col items-end">
          <span className="text-[14px] text-[#676B7D] font-montserrat mb-[10px] h-[15px]">{ price ? `€ ${ price }` : '' }</span>
          <span className="text-[20px] text-gold">€{ total }</span>
        </div>
      </div>

      <hr className="mb-[10px]" />

      { /* bottom */ }
      <div className="flex justify-between flex-wrap xl:flex-nowrap gap-[10px] xl:gap-0">
        <span className="xl:hidden text-[20px] text-gold w-full text-left">€{ total }</span>

        { /* icon */ }
        <div className="flex items-center justify-center rounded-full bg-[#212742] w-[32px] h-[32px] xl:w-[40px] xl:h-[40px] shrink-0">
          <IconCoinsPile/>
        </div>

        { /* cost */ }
        <div className="flex items-center gap-[8px] text-[14px]">
          <span className="font-[700] text-purple">€{ perCredit }</span>
          <span className="xl:whitespace-nowrap">per credit</span>
        </div>
      </div>

    </button>
  );
};

export default ModalOutOfCredits;