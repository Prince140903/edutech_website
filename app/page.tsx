import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import StreamsPreview from '@/components/sections/previews/StreamsPreview';
import ProgramsPreview from '@/components/sections/previews/ProgramsPreview';
import UniversitiesPreview from '@/components/sections/previews/UniversitiesPreview';
import Features from '@/components/sections/Features';
import Mentors from '@/components/sections/Mentors';
import Stories from '@/components/sections/Stories';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProgramsPreview />
      <StreamsPreview />
      <UniversitiesPreview />
      <Features />
      <Mentors />
      <Stories />
      <CTA />
    </>
  );
}
