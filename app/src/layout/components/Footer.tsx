import ContactLink from './ContactLink';
import { FaFacebook, FaGithub, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="container flex justify-between text-gray-500 text-xs items-center mx-auto mt-25">
      <div className="flex flex-col gap-1 ">
        <span className="bg-linear-to-r from-blue-600/50 to-purple-600/50 bg-clip-text text-transparent">
          HoursHub
        </span>
        <span>© 2026 HoursHub. All rights reserved.</span>
      </div>
      <div className="flex gap-5  underline underline-offset-2">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex gap-5">
        <ContactLink toPatch="#" variant="facebook">
          <FaFacebook />
          Facebook
        </ContactLink>
        <ContactLink toPatch="#" variant="gmail">
          <FaMailBulk />
          Gmail
        </ContactLink>
        <ContactLink toPatch="#" variant="github" >
          <FaGithub />
          Github
        </ContactLink>
      </div>
    </footer>
  );
};

export default Footer;
