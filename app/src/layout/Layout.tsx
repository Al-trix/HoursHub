import Nav from './components/Nav';
import PointBlur from '../landing/components/PointBlur';
import Footer from './components/Footer';

const Layout = ({ children, isLanding, landingHero }: LayoutProps) => {
  return (
    <div className="relative my-8">
      <PointBlur />
      <PointBlur
        color="bg-blue-600"
        positionX="-left-80"
        shadow="shadow-xl shadow-blue-500/50"
      />
      <header className="container relative mx-auto">
        {isLanding && <PointBlur />}
        {isLanding && (
          <PointBlur
            color="bg-blue-600"
            positionX="-left-80"
            shadow="shadow-xl shadow-blue-500/50"
          />
        )}
        <Nav />
        {isLanding && landingHero}
      </header>
      {children}
      <Footer />
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  isLanding?: boolean;
  landingHero?: React.ReactNode;
}

export default Layout;
