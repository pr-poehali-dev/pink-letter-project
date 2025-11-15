import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FallingHearts = () => {
  const hearts = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    size: Math.random() * 25 + 15,
    duration: `${Math.random() * 5 + 12}s`,
    sparkleDelay: `${Math.random() * 2}s`,
    opacity: Math.random() * 0.3 + 0.2
  }));

  const stars = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 8}s`,
    size: Math.random() * 8 + 8,
    duration: `${Math.random() * 4 + 10}s`,
    sparkleDelay: `${Math.random() * 3}s`,
    opacity: Math.random() * 0.4 + 0.3
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          className="absolute animate-fall"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            opacity: heart.opacity
          }}
        >
          <div 
            className="animate-sparkle"
            style={{
              animationDelay: heart.sparkleDelay
            }}
          >
            <Icon name="Heart" size={heart.size} className="text-pink-400" />
          </div>
        </div>
      ))}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute animate-fall"
          style={{
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity
          }}
        >
          <div 
            className="animate-sparkle"
            style={{
              animationDelay: star.sparkleDelay
            }}
          >
            <Icon name="Sparkles" size={star.size} className="text-yellow-400" />
          </div>
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  const [screen, setScreen] = useState<'initial' | 'no' | 'yes'>('initial');
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://cdn.poehali.dev/duvet-gianna-campos.mp3');
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    const playAudio = () => {
      audio.play().catch(() => {});
      setAudioPlaying(true);
    };

    document.addEventListener('click', playAudio, { once: true });

    return () => {
      audio.pause();
      document.removeEventListener('click', playAudio);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setAudioPlaying(true);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 p-4 relative overflow-hidden">
      <FallingHearts />
      
      <button
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-50 bg-pink-400 hover:bg-pink-500 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Toggle music"
      >
        <Icon name={audioPlaying ? "Pause" : "Play"} size={24} />
      </button>
      
      <div className="relative z-10">
        {screen === 'initial' && (
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl mb-8 text-pink-800 font-bold">
              любимый, ты хочешь открыть письмо?
            </h1>
            
            <div className="mb-12 flex justify-center animate-float">
              <div className="relative">
                <Icon name="Mail" size={120} className="text-pink-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Heart" size={40} className="text-rose-500" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setScreen('yes')}
                className="bg-pink-500 hover:bg-pink-600 text-white text-2xl px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Да конечно!! (✿◠‿◠)
              </Button>
              
              <Button
                onClick={() => setScreen('no')}
                variant="outline"
                className="border-pink-400 text-pink-700 hover:bg-pink-100 text-2xl px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Нет почему(∩`ﾛ´)⊃
              </Button>
            </div>
          </div>
        )}

        {screen === 'no' && (
          <div className="text-center animate-scale-in max-w-2xl">
            <img 
              src="https://cdn.poehali.dev/projects/7b565fbd-2d65-45c2-9989-8c4edbdeeb0e/files/7497adcb-b6c2-406e-8579-ea079ea2f702.jpg"
              alt="милый подумай еще"
              className="w-full max-w-md mx-auto mb-8 rounded-3xl shadow-2xl"
            />
            
            <h2 className="text-3xl md:text-5xl mb-8 text-pink-800 font-bold">
              милый подумай еще!!! (つ･･)つ
            </h2>
            
            <Button
              onClick={() => setScreen('initial')}
              className="bg-rose-400 hover:bg-rose-500 text-white text-2xl px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Вернуться назад
            </Button>
          </div>
        )}

        {screen === 'yes' && (
          <div className="text-center animate-scale-in max-w-4xl px-6">
            <div className="mb-8 flex justify-center">
              <Icon name="Heart" size={80} className="text-rose-500 animate-float" />
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl">
              <h2 className="text-4xl md:text-6xl mb-8 text-pink-700 font-bold">
                Моё признание в любви
              </h2>
              
              <div className="text-xl md:text-3xl text-pink-800 leading-relaxed space-y-6">
                <p>
                  Мой любимый, самый дорогой человек на свете...
                </p>
                
                <p>
                  Каждый день с тобой - это маленькое чудо. Твоя улыбка освещает мой мир, 
                  а твоя любовь делает меня счастливее с каждым мгновением.
                </p>
                
                <p>
                  Я благодарна судьбе за то, что она свела нас вместе. 
                  Ты - мой лучший друг, моя опора, моя любовь.
                </p>
                
                <p className="text-rose-600 font-bold">
                  Люблю тебя больше всего на свете! ❤️
                </p>
                
                <p className="text-pink-600 text-lg md:text-xl italic mt-8">
                  (Ты можешь отредактировать этот текст как захочешь - просто скажи мне, что написать!)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;