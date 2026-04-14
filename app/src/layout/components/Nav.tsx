import Link from './Link';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <ul className="w-full flex justify-between bg-black/20 backdrop-blur-sm py-4 px-10 border-b border-white/10 rounded-b-2xl shadow-lg  items-center gap-4">
        <div className="flex gap-5 items-center">
          <span className="text-xl font-semibold first-letter:font-bold first-letter:text-blue-500 first-letter:text-2xl">
            HoursHub
          </span>
        </div>
        <div className="flex gap-5 items-center">
          <Link toPatch="/">Home</Link>
          <Link toPatch="/about">About</Link>
          <Link toPatch="/contact">Contact</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link toPatch="/auth/login">Login</Link>
          <Link
            toPatch="/auth/register"
            isAuth
            className="border border-purple-500/50 !text-purple-300 px-4 py-1 rounded-full hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-1 "
          >
            <MdOutlineSubdirectoryArrowRight />
            Register
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
