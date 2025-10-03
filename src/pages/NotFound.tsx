import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div 
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-fixed p-6"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      <div className="text-center max-w-md animate-fade-in-scale">
        <Heart className="w-20 h-20 mx-auto mb-6 text-primary fill-primary opacity-50" />
        <h1 className="mb-4 text-6xl font-romantic text-primary">404</h1>
        <p className="mb-8 text-2xl font-handwritten text-foreground/80">
          Oops! This page doesn't exist
        </p>
        <p className="mb-8 text-lg font-handwritten text-muted-foreground">
          Let's get you back to somewhere special...
        </p>
        <Button 
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-handwritten text-lg"
        >
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
