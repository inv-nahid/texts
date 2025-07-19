type AuthImagePatternProps = {
  title: string;
  subtitle: string;
};

const AuthImagePattern = ({ title, subtitle }: AuthImagePatternProps) => {
  return (
    <div className="hidden lg:flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 animate-gradient-x p-0">
      <div className="relative max-w-xl w-full p-12 rounded-3xl bg-black/70 border border-gray-800 shadow-2xl overflow-hidden backdrop-blur-2xl">
        {/* Animated floating shapes */}
        <div className="absolute -top-16 -left-16 w-60 h-60 bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-full blur-3xl opacity-60 animate-float-slow" />
        <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-gradient-to-tr from-purple-800/60 to-blue-800/60 rounded-full blur-3xl opacity-60 animate-float-reverse" />
        {/* Custom SVG pattern */}
        <div className="flex justify-center mb-10">
          <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
              </radialGradient>
              <linearGradient id="grad2" x1="0" y1="0" x2="180" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#818cf8" />
                <stop offset="1" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <ellipse cx="40" cy="40" rx="32" ry="32" fill="url(#grad1)" className="animate-pulse" />
            <rect x="70" y="20" width="40" height="40" rx="14" fill="url(#grad2)" className="animate-bounce" />
            <circle cx="140" cy="40" r="24" fill="#fff" fillOpacity="0.08" className="animate-spin-slow" />
            <circle cx="140" cy="40" r="12" fill="#6366f1" fillOpacity="0.5" className="animate-pulse" />
          </svg>
        </div>
        <h2 className="text-4xl font-black text-white drop-shadow-lg mb-3 tracking-tight animate-fade-in-up">{title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed font-medium animate-fade-in-up delay-200">{subtitle}</p>
      </div>
      {/* Custom keyframes for extra wow */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.05); }
        }
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AuthImagePattern;
