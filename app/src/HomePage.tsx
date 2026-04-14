import LandingHero from './landing/components/LandingHero';
import InfoLayout from './landing/components/InfoLayout';
import ReadyStart from './landing/components/ReadyStart';
import Layout from './layout/Layout';

export default function HomePage() {
  return (
    <Layout isLanding landingHero={<LandingHero />}>
      <InfoLayout />
      <ReadyStart />
    </Layout>
  );
}
