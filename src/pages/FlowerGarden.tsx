import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";
import sunflower from "@/assets/sunflower.png";

const compliments = [
  { text: "I hope you can see yourself in my point of view", position: "top-40 left-100" },
  { text: "You make everything feel better ", position: "top-20 right-16" },
  { text: "I hope you know how much you mean to me", position: "bottom-24 left-20" },
  { text: "You make me wanna do things I haven't done before", position: "bottom-10 right-10" },
  { text: "Being with you feels like home", position: "top-1/4 left-1/2 -translate-x-1/2" },
  { text: "The world is brighter with you in it ", position: "top-1/2 right-8" },
  { text: "You are my happiest thought ", position: "bottom-1/4 left-1/2 -translate-x-1/2" },
];

const FlowerGarden = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Button 
          asChild 
          variant="ghost"
          className="font-handwritten text-lg hover:scale-105 transition-transform"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back Home
          </Link>
        </Button>
      </div>

      {/* Sunflower in center */}
      <div className="relative z-10">
        <img
          src={sunflower}
          alt="Sunflower"
          className="w-60 h-60 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-pulse-slow"
        />
      </div>

      {/* Fixed compliments */}
      {compliments.map((c, i) => (
        <div
          key={i}
          className={`absolute ${c.position} animate-float`}
        >
          <div className="relative bg-white rounded-2xl px-4 py-2 shadow-lg border border-primary/20 max-w-xs">
            <p className="text-sm md:text-base font-handwritten text-primary text-center">
              {c.text}
            </p>
            {/* Bubble tail */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-primary/20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlowerGarden;
