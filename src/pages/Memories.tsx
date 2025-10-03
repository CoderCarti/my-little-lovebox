import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";

interface Memory {
  id: number;
  caption: string;
  note: string;
  imageUrl: string;
}

// Placeholder memories - replace with your actual photos and memories
const memories: Memory[] = [
  {
    id: 1,
    caption: "Our First Adventure",
    note: "The day we laughed until our stomachs hurt and I knew you were special.",
    imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    caption: "That Perfect Sunset",
    note: "When the sky matched the warmth I felt holding your hand.",
    imageUrl: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    caption: "Cozy Moments",
    note: "Every moment with you feels like home.",
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    caption: "Dancing in the Rain",
    note: "You make every ordinary moment extraordinary.",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    caption: "Coffee & Conversations",
    note: "I could listen to you talk for hours and never get bored.",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    caption: "Together Forever",
    note: "Here's to all the memories we've made and all the ones still to come.",
    imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop"
  }
];

const Memories = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

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
            Captured Memories
          </h1>
          <p className="text-lg md:text-xl font-handwritten text-foreground/80">
            Every photo tells a story of us ♡
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card"
              onClick={() => setSelectedMemory(memory)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={memory.imageUrl}
                  alt={memory.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-romantic text-xl mb-1">{memory.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-scale"
          onClick={() => setSelectedMemory(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={() => setSelectedMemory(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedMemory.imageUrl}
                  alt={selectedMemory.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-card">
                <h2 className="text-3xl font-romantic mb-4 text-primary">
                  {selectedMemory.caption}
                </h2>
                <p className="text-lg font-handwritten leading-relaxed text-foreground/80">
                  {selectedMemory.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Memories;
