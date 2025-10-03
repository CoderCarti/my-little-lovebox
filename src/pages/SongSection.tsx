import { ArrowLeft, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";

const SongSection = () => {
  // Replace this with your actual song embed URL from Spotify or YouTube
  const songEmbedUrl = "https://open.spotify.com/embed/track/3JWvRbfodT28nxIqQCPhLH?utm_source=generator";

  return (
    <div 
      className="min-h-screen p-6 md:p-12 bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      <div className="max-w-2xl w-full">
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
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Music className="w-20 h-20 text-primary animate-float" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-romantic mb-6 text-primary">
            A Song That Reminds Me of You
          </h1>
          <p className="text-lg md:text-xl font-handwritten text-foreground/80 max-w-xl mx-auto leading-relaxed">
            Every time I hear this song, I think of you and all the beautiful moments we've shared together ♡
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl animate-fade-in-scale">
          <div className="mb-6 text-center">
            <p className="text-xl font-romantic text-primary mb-2">
              Close your eyes and listen...
            </p>
            <p className="text-sm font-handwritten text-muted-foreground">
              Let the music carry you to our favorite memories
            </p>
          </div>
          {/* Alternative: YouTube Embed (uncomment if you prefer YouTube) */}
          <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
               src="https://www.youtube.com/embed/ZZMZiBCRX4c?si=seZf4FaU_42ij9yl"
               title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-handwritten text-foreground/70 italic">
              "In every note, I hear your voice. In every melody, I feel your presence."
            </p>
          </div>
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <p className="text-sm font-signature text-muted-foreground">
            This song will forever be ours ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongSection;
