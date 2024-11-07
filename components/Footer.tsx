import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className=" ml-5 container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by Global Education Institute. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="#" className="text-sm hover:underline">Terms</Link>
          <Link href="#" className="text-sm hover:underline">Privacy</Link>
          <Link href="#" className="text-sm hover:underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;