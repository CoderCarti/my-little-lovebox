import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";
import babeh from "@/assets/babeh.jpg";

interface Memory {
  id: number;
  caption: string;
  note: string;
  imageUrl: string;
}

const memories: Memory[] = [
  {
    id: 1,
    caption: "Picture of Us",
    note: "Not our official picture but it's a start ",
    imageUrl: babeh
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
            Us
          </h1>
          <p className="text-lg md:text-xl font-handwritten text-foreground/80">
            One photo is enough for now ♡
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
                <h3 className="font-romantic text-2xl mb-1">{memory.caption}</h3>
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
            className="relative max-w-4xl w-full bg-card rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center"
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

            <img
              src={selectedMemory.imageUrl}
              alt={selectedMemory.caption}
              className="max-h-[80vh] max-w-full object-contain mx-auto"
            />

            <div className="p-6 text-center">
              <h2 className="text-3xl font-romantic mb-4 text-primary">
                {selectedMemory.caption}
              </h2>
              <p className="text-lg font-handwritten leading-relaxed text-foreground/80">
                {selectedMemory.note}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Memories;
