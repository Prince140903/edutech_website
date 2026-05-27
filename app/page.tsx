import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import StreamsPreview from '@/components/sections/previews/StreamsPreview';
import AbroadSection from '@/components/sections/AbroadSection';
import UniversitiesPreview from '@/components/sections/previews/UniversitiesPreview';
import Features from '@/components/sections/Features';
import Mentors from '@/components/sections/Mentors';
import Stories from '@/components/sections/Stories';
import HomeContactCTA from '@/components/sections/HomeContactCTA';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <StreamsPreview />
      <AbroadSection />
      <UniversitiesPreview />
      <Features />
      <HomeContactCTA />
      <Mentors />
      <Stories />
      <CTA />
    </>
  );
}
