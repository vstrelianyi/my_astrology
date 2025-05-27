// TYPES
import { TIconProps, } from '@/types/TIcon';

const IconCoinsPile = ( { className, fill = '#000000', stroke, width = '32', height = '32', } : TIconProps, ) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.10749 7.70745C11.5725 7.09995 14.1375 5.20246 13.83 3.46996C13.5225 1.73746 10.4625 0.829962 6.99746 1.43746C3.53246 2.04496 0.9675 3.94246 1.275 5.67496C1.5825 7.40746 4.63499 8.31495 8.10749 7.70745Z"
        stroke="url(#paint0_linear_8337_81279)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M2.17047 6.95742C2.05797 7.79742 2.62048 8.68244 3.58798 9.41744C4.86298 10.3024 6.31798 10.8874 7.84798 11.1274C10.518 11.5924 12.9405 11.1649 14.058 10.1599C14.3805 9.88993 14.598 9.51493 14.6805 9.10243C14.8605 8.02993 13.9605 6.89743 12.4155 6.04993"
        stroke="url(#paint1_linear_8337_81279)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.1109 10.1525C14.3059 10.3325 14.4634 10.55 14.5759 10.7975C14.6884 11.0375 14.7484 11.3075 14.7559 11.57C14.7559 13.325 11.9134 14.75 8.35841 14.75C4.80341 14.75 1.96094 13.3325 1.96094 11.57C1.96094 10.7525 2.57592 10.01 3.58842 9.44751"
        stroke="url(#paint2_linear_8337_81279)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_8337_81279"
          x1="2.09033"
          y1="2.21819"
          x2="14.4766"
          y2="5.65741"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A073E4"/>
          <stop
            offset="1"
            stopColor="#99ABFC"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8337_81279"
          x1="2.99272"
          y1="6.81777"
          x2="14.8311"
          y2="10.9487"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A073E4"/>
          <stop
            offset="1"
            stopColor="#99ABFC"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_8337_81279"
          x1="2.81394"
          y1="10.2208"
          x2="14.8532"
          y2="14.4747"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A073E4"/>
          <stop
            offset="1"
            stopColor="#99ABFC"
          />
        </linearGradient>
      </defs>
    </svg>

  );
};

export default IconCoinsPile;
