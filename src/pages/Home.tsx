import { Link } from "react-router-dom";
import { Heart, Camera, Flower2, Music, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";

const Home = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      <div className="max-w-2xl w-full text-center animate-fade-in-scale">
        <div className="mb-8 animate-float">
          <Heart className="w-16 h-16 mx-auto text-primary fill-primary drop-shadow-lg" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-romantic mb-6 text-primary drop-shadow-md">
          For You, Babi
        </h1>
        
        <p className="text-xl md:text-2xl font-handwritten mb-12 text-foreground/80 max-w-xl mx-auto leading-relaxed">
          I created this little corner just for you. 
          Each section has a special thing. 
          Take your time exploring babi ♡
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <Button 
            asChild 
            size="lg" 
            variant="default"
            className="bg-primary hover:bg-primary/90 text-white font-handwritten text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to="/memories" className="flex items-center gap-2">
              <Camera className="w-5 h-5" />
              Our Pictures
            </Link>
          </Button>

          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="bg-secondary hover:bg-secondary/90 font-handwritten text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to="/flowers" className="flex items-center gap-2">
              <Flower2 className="w-5 h-5" />
              Garden of Love
            </Link>
          </Button>

          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2 border-primary hover:bg-primary/10 font-handwritten text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to="/song" className="flex items-center gap-2">
              <Music className="w-5 h-5" />
              Your Song
            </Link>
          </Button>

          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-2 border-accent hover:bg-accent/20 font-handwritten text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to="/letter" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              A Letter for You
            </Link>
          </Button>
        </div>

        <p className="mt-12 text-sm font-signature text-muted-foreground">
          Made by yours truly
        </p>
      </div>
    </div>
  );
};

export default Home;
