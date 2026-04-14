import { Link } from "react-router"
const FooterAuth = ({text, link, textLink}: FooterAuthProps) => {
 return(
  <>
  <span className="bg-linear-to-r from-white/10 to-white/5 mx-auto w-4/5 h-px rounded-2xl my-5"></span>
  <div className="flex justify-center gap-1 text-sm ">
    <span className="text-white/50">{text}</span>
    <Link to={link} className="text-white hover:underline">{textLink}</Link>
  </div>
  </>
 )
}

interface FooterAuthProps {
  text: string;
  textLink: 'sign in' | 'sign up';
  link: string;
}

export default FooterAuth
