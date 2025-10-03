import { useState } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import paperTexture from "@/assets/paper-texture.jpg";

const LetterSection = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div 
      className="min-h-screen p-6 md:p-12 bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      <div className="max-w-3xl w-full">
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

        {!isOpened ? (
          <div className="text-center animate-fade-in-scale">
            <h1 className="text-4xl md:text-6xl font-romantic mb-8 text-primary">
              A Letter Just for You
            </h1>
            
            <div className="relative inline-block">
              {/* Envelope */}
              <button
                onClick={() => setIsOpened(true)}
                className="relative bg-accent/60 backdrop-blur-sm rounded-lg p-12 md:p-20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 group"
              >
                <Heart className="w-16 h-16 md:w-24 md:h-24 text-primary fill-primary group-hover:animate-float" />
                <div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
              </button>
            </div>

            <p className="mt-8 text-lg md:text-xl font-handwritten text-foreground/80">
              Click the envelope to open your letter ♡
            </p>
          </div>
        ) : (
          <div className="animate-fade-in-scale">
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-romantic text-primary mb-4">
                  My Dearest Babi,
                </h2>
                <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
              </div>

              <div className="space-y-6 font-handwritten text-lg md:text-xl leading-relaxed text-foreground/90">
                <p>
                  As I sit here writing this, my heart is overflowing with so much love for you that I can barely find the words to express it all. But I want to try, because you deserve to know just how incredibly special you are to me.
                </p>

                <p>
                  From the moment you came, everything changed. You brought color to my days, music to my mornings, and warmth to my heart. Your smile is the sunshine that brightens even my darkest days aba naks.
                </p>

                <p>
                  I love the way you see the world with kindness, curiosity, and wonder. I love how you make me feel safe to be myself, how you listen to my dreams and fears with equal tenderness. With you, I've found a home not in a place, but in a person.
                </p>

                <p>
                  Every little thing you do amazes me. The way you get excited about the smallest things, the way you tell me about your day, the gentle way you care for everyone around you—these are the moments I treasure most.
                </p>

                <p>
                  Thank you for being patient with me, for believing in me, for choosing me. Thank you for being exactly who you are babi.
                </p>

                <p>
                  I promise to always cherish you, to support your dreams, to hold your hand through every season of life. I promise to make you laugh, to be your comfort when you're sad, and to love you more deeply with each passing day.
                </p>

                <p className="text-center italic text-2xl text-primary mt-8">
                  You are my honeybwunch sugarplum sprinkle winkle popsickle cotton candy.
                </p>

                <p className="text-center mt-8">
                  Sincerely,
                </p>

                <p className="text-center font-signature text-3xl text-primary mt-4">
                  Dwight "Christian" Ramos
                </p>
              </div>

              <div className="mt-12 pt-8 border-t-2 border-primary/20 text-center">
                <p className="text-sm font-handwritten text-muted-foreground italic">
                  P.S. — I love you more than you know.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterSection;
