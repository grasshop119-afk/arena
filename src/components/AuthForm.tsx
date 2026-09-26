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
      <div className="flex items-center justify-center gap-3.5 mb-6">
        <img 
          src="/arena.png" 
          alt="Arena" 
          className="w-14 h-14 object-contain brightness-0 invert" 
        />
        <div className="flex flex-col justify-between h-14 text-left leading-none">
          <span className="text-xl font-black uppercase tracking-tight text-white">Добро</span>
          <span className="text-xl font-black uppercase tracking-tight text-white">пожаловать</span>
        </div>
      </div>

      <p className="text-xs text-gg-textMuted mb-6 text-center font-medium">
        Введи свой код союзника для регистрации
      </p>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={9}
          placeholder="123456789"
          value={allyCode}
          onChange={handleChange}
          className="w-full h-12 bg-gg-input text-white text-center text-lg tracking-widest font-semibold rounded-xl border border-gg-border focus:border-gg-primary focus:outline-none transition-colors placeholder:text-gray-600 placeholder:font-normal placeholder:tracking-normal"
        />

        <button
          type="submit"
          disabled={allyCode.length !== 9}
          className="w-full h-12 bg-gg-primary hover:bg-gg-primaryHover disabled:opacity-40 disabled:hover:bg-gg-primary text-white font-bold rounded-xl transition-all active:scale-[0.98]"
        >
          Войти
        </button>
      </form>

      <span className="mt-8 text-[11px] text-gray-500 font-medium">
        Сайт создан @temkazavr
      </span>
    </div>
  );
};
