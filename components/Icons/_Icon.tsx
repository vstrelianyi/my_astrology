// https://freeicons.io/search

// STYLES
import { clsx, } from 'clsx';

// TYPES
import { TIconProps, } from '@/types/TIcon';

const Icon = ( { className, fill = '#000000', stroke, width = '32', height = '32', } : TIconProps, ) => {
  return (
    <svg
      className={ clsx( [ className, 'icon', ], ) }
      width={ width }
      height={ height }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 30"
      { ...( stroke ? { stroke: stroke, } : {} ) }
      { ...( fill ? { fill: fill, } : {} ) }
    >
      <path d="M18 0L22.0413 11.4012H35.119L24.5389 18.4476L28.5801 29.8488L18 22.8024L7.41987 29.8488L11.4611 18.4476L0.880983 11.4012H13.9587L18 0Z" />
    </svg>
  );
};

export default Icon;
