import Image from 'next/image';
import Link from 'next/link';

import { cn, } from '@/utils/cn';

type Footer = {
  className ?: string;
};

function Footer( { className, } : Footer, ) {
  return (
    <div
      className={ cn(
        'flex items-center justify-start gap-[56px]',
        'py-[35px]',
        className,
      ) }
    >

      <Link href="/privacy-policy">Privacy policy</Link>
      <Link href="/terms-of-use">Terms of use</Link>
      <Link href="/cookie-policy">Cookie policy</Link>
      <Link href="/help-support">Help & Support</Link>

      <div className="flex gap-[16px] ml-auto mr-0">
        <span className="text-right text-[#999CA9]">Download MyAstrology App <br/> and get <b className="text-white">100 free credits</b></span>
        <a
          href="https://play.google.com/store/apps/details?id=com.myastrology.app"
          target="_blank"
        >
          <Image
            className="rounded-[6px]"
            src="/images/footer-cta.png"
            alt="footer-bg"
            width={ 120 }
            height={ 42 }
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;