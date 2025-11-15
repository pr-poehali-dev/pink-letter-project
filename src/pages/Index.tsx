import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [screen, setScreen] = useState<'initial' | 'no' | 'yes'>('initial');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 p-4">
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
  );
};

export default Index;
