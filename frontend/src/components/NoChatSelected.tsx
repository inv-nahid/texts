import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center min-h-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] relative overflow-hidden">
      {/* Animated particle background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0 animate-pulse-slow" style={{ filter: 'blur(2px)' }}>
          {[...Array(18)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r={Math.random() * 8 + 2}
              fill={`hsl(${Math.random() * 360}, 80%, 60%)`}
              opacity={0.12 + Math.random() * 0.18}
            />
          ))}
        </svg>
      </div>
      <div className="relative max-w-lg w-full p-14 rounded-3xl bg-white/10 border-2 border-transparent shadow-2xl overflow-hidden backdrop-blur-2xl group z-10">
        {/* Neon animated border */}
        <div className="absolute -inset-1 rounded-3xl z-0 pointer-events-none animate-neon-border" />
        {/* Animated light sweep */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute left-[-60%] top-0 w-2/3 h-full bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-30 rounded-3xl animate-light-sweep" />
        </div>
        {/* 3D Spinning, Floating Icon with Reflection and Sparkles */}
        <div className="flex justify-center mb-10 z-10 relative">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-2xl animate-3d-spin perspective-3d relative">
            <span className="block animate-float-3d">
              <MessageSquare className="w-14 h-14 text-white drop-shadow-2xl" />
            </span>
            {/* Reflection */}
            <span className="absolute left-1/2 top-[70%] w-16 h-6 bg-gradient-to-t from-white/30 to-transparent rounded-full opacity-40 -translate-x-1/2 blur-sm" />
            {/* Sparkles */}
            <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" width="80" height="80">
              <g className="animate-sparkle">
                <circle cx="10" cy="10" r="1.5" fill="#fff" opacity="0.7" />
                <circle cx="70" cy="20" r="1" fill="#f472b6" opacity="0.7" />
                <circle cx="40" cy="70" r="1.2" fill="#facc15" opacity="0.7" />
                <circle cx="60" cy="60" r="1.1" fill="#6366f1" opacity="0.7" />
              </g>
            </svg>
          </div>
        </div>
        {/* Welcome Text */}
        <h2 className="text-5xl font-black text-white drop-shadow-2xl mb-4 tracking-tight z-10 relative animate-fade-in-up">
          Welcome to <span className="text-primary">Texts</span>!
        </h2>
        <p className="text-base-content/90 text-xl font-semibold z-10 relative animate-fade-in-up delay-200">
          Select a conversation from the sidebar to start chatting.
        </p>
        {/* Custom keyframes and 3D styles */}
        <style>{`
          @keyframes neon-border {
            0% {
              box-shadow: 0 0 32px 8px #6366f1, 0 0 0 0 #f472b6, 0 0 0 0 #facc15, 0 0 0 0 #fff;
              border-color: #6366f1;
            }
            25% {
              box-shadow: 0 0 48px 12px #f472b6, 0 0 0 0 #facc15, 0 0 0 0 #6366f1, 0 0 0 0 #fff;
              border-color: #f472b6;
            }
            50% {
              box-shadow: 0 0 56px 16px #facc15, 0 0 0 0 #6366f1, 0 0 0 0 #f472b6, 0 0 0 0 #fff;
              border-color: #facc15;
            }
            75% {
              box-shadow: 0 0 40px 10px #fff, 0 0 0 0 #f472b6, 0 0 0 0 #facc15, 0 0 0 0 #6366f1;
              border-color: #fff;
            }
            100% {
              box-shadow: 0 0 32px 8px #6366f1, 0 0 0 0 #f472b6, 0 0 0 0 #facc15, 0 0 0 0 #fff;
              border-color: #6366f1;
            }
          }
          .animate-neon-border {
            animation: neon-border 5s linear infinite;
          }
          @keyframes spin-3d {
            0% { transform: rotateY(0deg) rotateX(0deg); }
            50% { transform: rotateY(180deg) rotateX(25deg) scale(1.12); }
            100% { transform: rotateY(360deg) rotateX(0deg); }
          }
          .animate-3d-spin {
            animation: spin-3d 6s cubic-bezier(.4,0,.2,1) infinite;
            perspective: 1000px;
            will-change: transform;
          }
          @keyframes float-3d {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-22px) scale(1.09); filter: drop-shadow(0 12px 32px #f472b6cc); }
          }
          .animate-float-3d {
            animation: float-3d 4.5s ease-in-out infinite;
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
          .perspective-3d {
            perspective: 1200px;
          }
          @keyframes light-sweep {
            0% { left: -60%; }
            60% { left: 110%; }
            100% { left: 110%; }
          }
          .animate-light-sweep {
            animation: light-sweep 3.5s cubic-bezier(.4,0,.2,1) infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.18; }
            50% { opacity: 0.32; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          @keyframes sparkle {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-sparkle {
            animation: sparkle 2.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default NoChatSelected;