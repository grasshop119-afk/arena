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
    <div className="w-full max-w-xs flex flex-col items-center">
      <div className="flex items-center justify-center gap-4 mb-3">
        <img 
          src="/pngs/arena.png" 
          alt="Arena" 
          className="h-[68px] w-auto object-contain brightness-0 invert" 
        />
        <div className="flex flex-col justify-between h-[68px] text-left leading-[34px]">
          <span className="text-[34px] font-extrabold uppercase tracking-[-1.5px] text-white">
            Добро
          </span>
          <span className="text-[34px] font-extrabold uppercase tracking-[-1.5px] text-white">
            пожаловать
          </span>
        </div>
      </div>

      <p className="text-xs text-gg-textMuted mb-8 text-center font-medium tracking-normal">
        Введи свой код союзника для регистрации
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5">
        <div className="relative w-full h-[60px] bg-gg-inputBg backdrop-blur-[25px] rounded-[30px] border border-gg-border flex items-center px-6">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={9}
            placeholder="123456789"
            value={allyCode}
            onChange={handleChange}
            className="w-full bg-transparent text-white text-center text-lg tracking-[0.2em] font-semibold focus:outline-none placeholder:text-white/20 placeholder:font-normal placeholder:tracking-normal"
          />
        </div>

        <button
          type="submit"
          disabled={allyCode.length !== 9}
          className="relative w-full h-[60px] bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] rounded-[30px] border border-white/10 text-white font-bold text-base shadow-lg shadow-blue-950/40 transition-all active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none"
        >
          Войти
        </button>
      </form>

      <span className="mt-8 text-[11px] text-white/30 font-medium">
        Сайт создан @temkazavr
      </span>
    </div>
  );
};
