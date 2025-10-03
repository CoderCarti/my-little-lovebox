import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";
import flowerRose from "@/assets/flower-rose.png";
import flowerLavender from "@/assets/flower-lavender.png";
import flowerDaisy from "@/assets/flower-daisy.png";
import flowerTulip from "@/assets/flower-tulip.png";
import flowerPeony from "@/assets/flower-peony.png";

interface Flower {
  id: number;
  name: string;
  compliment: string;
  image: string;
}

const flowers: Flower[] = [
  {
    id: 1,
    name: "Rose",
    compliment: "Your smile lights up my entire world. It's the first thing I think about in the morning and the last thing I dream about at night.",
    image: flowerRose
  },
  {
    id: 2,
    name: "Lavender",
    compliment: "Your presence brings me peace like nothing else. When I'm with you, all my worries fade away.",
    image: flowerLavender
  },
  {
    id: 3,
    name: "Daisy",
    compliment: "Your laughter is my favorite sound in the universe. It's pure joy, and it makes everything better.",
    image: flowerDaisy
  },
  {
    id: 4,
    name: "Tulip",
    compliment: "You are the most beautiful person I've ever known, inside and out. Your kindness and grace inspire me every day.",
    image: flowerTulip
  },
  {
    id: 5,
    name: "Peony",
    compliment: "I love how you see the world—with curiosity, wonder, and an open heart. You make me want to be a better person.",
    image: flowerPeony
  }
];

const FlowerGarden = () => {
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null);

  return (
    <div 
      className="min-h-screen p-6 md:p-12 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
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

        <div className="text-center mb-12 animate-fade-in-scale">
          <h1 className="text-4xl md:text-6xl font-romantic mb-4 text-primary">
            Garden of Compliments
          </h1>
          <p className="text-lg md:text-xl font-handwritten text-foreground/80 max-w-2xl mx-auto">
            Each flower blooms with words I wish I could tell you every single day ♡
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {flowers.map((flower, index) => (
            <div
              key={flower.id}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <button
                onClick={() => setSelectedFlower(flower.id)}
                className={`w-32 h-32 md:w-40 md:h-40 rounded-full transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary/50 ${
                  selectedFlower === flower.id
                    ? "scale-110 animate-bloom"
                    : "hover:animate-float"
                }`}
              >
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </button>
              <p className="mt-3 font-romantic text-lg text-center text-primary">
                {flower.name}
              </p>
            </div>
          ))}
        </div>

        {/* Compliment Display */}
        <div className="min-h-[200px] flex items-center justify-center">
          {selectedFlower ? (
            <div className="max-w-2xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-scale">
              <p className="text-xl md:text-2xl font-handwritten leading-relaxed text-foreground">
                "{flowers.find(f => f.id === selectedFlower)?.compliment}"
              </p>
            </div>
          ) : (
            <p className="text-xl font-handwritten text-muted-foreground italic animate-fade-in">
              Click on a flower to reveal a special message...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowerGarden;
