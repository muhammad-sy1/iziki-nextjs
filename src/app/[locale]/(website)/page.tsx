// "use client"

import TripsSection from "@/modules/home/components/TripsSection";
import ContactSection from "@/modules/home/components/ContactSection";
import Banner from "@/modules/home/components/banner";

export default function Home() {
  return (
    <>
      <div className="">
        <Banner />
        <TripsSection />
        <ContactSection />
      </div>
    </>
  );
}
