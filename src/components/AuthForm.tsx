import { useState, ChangeEvent, FormEvent } from 'react';

export const AuthForm = () => {
  const [allyCode, setAllyCode] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    if (rawValue.length <= 9) {
      setAllyCode(rawValue);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (allyCode.length === 9) {
      console.log(allyCode);
    }
  };

  return (
    <div className="w-full max-w-[360px] flex flex-col items-center">
      <div className="flex items-center justify-center gap-3.5 mb-6">
        <img 
          src="/pngs/arena.png" 
          alt="Arena" 
          className="w-14 h-14 object-contain brightness-0 invert" 
        />
        <div className="flex flex-col justify-between h-14 text-left leading-none">
          <span className="text-xl font-extrabold uppercase tracking-tight text-white">Добро</span>
          <span className="text-xl font-extrabold uppercase tracking-tight text-white">пожаловать</span>
        </div>
      </div>

      <p className="text-xs text-gg-textMuted mb-6 text-center font-medium">
        Введи свой код союзника для регистрации
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="relative w-full h-[75px]">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={9}
            placeholder="000000000"
            value={allyCode}
            onChange={handleChange}
            className="w-full h-full bg-white/[0.05] border border-[#4facfe]/30 rounded-[10px] text-white text-[1.2rem] text-center tracking-[3px] outline-none transition-colors focus:border-[#4facfe] placeholder:text-white/20"
          />
        </div>

        <button
          type="submit"
          disabled={allyCode.length !== 9}
          style={
            allyCode.length === 9
              ? {
                  background: 'linear-gradient(to top, #2563eb, #0c2352)',
                  borderColor: '#60a5fa',
                  color: '#ffffff',
                  cursor: 'pointer',
                  opacity: 1,
                }
              : undefined
          }
          className="w-full py-[18px] font-extrabold text-[0.875rem] uppercase tracking-wider rounded-[10px] border border-white/10 bg-white/[0.05] text-white/30 cursor-not-allowed transition-all active:scale-[0.99]"
        >
          Продолжить
        </button>
      </form>

      <span className="mt-8 text-[11px] text-gray-500 font-medium">
        Сайт создан @temkazavr
      </span>
    </div>
  );
};
