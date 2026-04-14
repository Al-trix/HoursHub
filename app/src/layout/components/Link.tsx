import { NavLink } from 'react-router';
import styles from '../style.module.css';

const Link = ({ toPatch, children, className, isAuth }: LinkProps) => {
  return (
    <NavLink
      to={toPatch}
      className={({ isActive, isPending }) =>
        isActive
          ? `text-purple-300 ${className ? className + 'bg-purple-500/10' : ''} ${styles.link}`
          : isPending
            ? `text-purple-500 ${className ? className : ''} ${styles.link}`
            : `${className ? className : ''} text-white active:scale-95 transition-transform duration-300 ${isAuth ? '' : styles.link}  `
      }
    >
      {!isAuth && <span className={styles.linkSpan}></span>}
      {children}
    </NavLink>
  );
};

interface LinkProps {
  toPatch: string;
  children: React.ReactNode;
  isAuth?: boolean;
  className?: string;
}

export default Link;
