import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UserFlows from "@/components/UserFlows";
import GroupHunting from "@/components/GroupHunting";
import ForGroups from "@/components/ForGroups";
import Verified from "@/components/Verified";
import PropertyManagerCTA from "@/components/PropertyManagerCTA";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UserFlows />
        <GroupHunting />
        <ForGroups />
        <Verified />
        <PropertyManagerCTA />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
