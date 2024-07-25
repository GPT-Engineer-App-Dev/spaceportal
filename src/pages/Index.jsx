import { Button } from "@/components/ui/button";
import { Rocket, Star, Globe } from "lucide-react";
import SpaceBackground from "@/components/SpaceBackground";

const Index = () => {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <SpaceBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="container mx-auto py-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-blue-300">Explore the Cosmos</h1>
          <p className="text-xl mb-8 text-blue-100">Embark on a journey through the wonders of space</p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Start Your Adventure
          </Button>
        </header>

        <main className="container mx-auto py-16 flex-grow">
          <section className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Rocket className="h-12 w-12 mb-4 text-blue-300" />}
              title="Space Exploration"
              description="Discover the latest missions and technologies pushing the boundaries of human space exploration."
            />
            <FeatureCard
              icon={<Star className="h-12 w-12 mb-4 text-blue-300" />}
              title="Stellar Phenomena"
              description="Learn about fascinating cosmic events, from supernovas to black holes and beyond."
            />
            <FeatureCard
              icon={<Globe className="h-12 w-12 mb-4 text-blue-300" />}
              title="Exoplanets"
              description="Explore the diversity of worlds beyond our solar system and the search for habitable planets."
            />
          </section>

          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-200">Journey Through the Cosmos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img src="/placeholder.svg" alt="Galaxy" className="mx-auto object-cover w-full h-[300px] rounded-lg" />
              <img src="/placeholder.svg" alt="Nebula" className="mx-auto object-cover w-full h-[300px] rounded-lg" />
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-200">Ready to Explore?</h2>
            <p className="text-xl mb-8 text-blue-100">Join us on an incredible journey through the universe.</p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Begin Your Cosmic Adventure
            </Button>
          </section>
        </main>

        <footer className="bg-black bg-opacity-50 py-8 text-center mt-auto">
          <p className="text-blue-100">&copy; 2024 Cosmic Explorers. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-900 bg-opacity-50 p-6 rounded-lg text-center">
    {icon}
    <h3 className="text-xl font-semibold mb-2 text-blue-200">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

export default Index;
