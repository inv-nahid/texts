import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, User, Mail, Eye, EyeOff, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import { toast } from "react-hot-toast";
import { Loader } from "lucide-react";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { signUp, isSigningUp } = useAuthStore();

    const validateForm = () => {
        if(!formData.fullName.trim()) {
            toast.error("Full name is required");
            return false;
        }
        if(!formData.email.trim()) {
            toast.error("Email is required");
        }
        if(!/^\S+@\S+\.\S+$/.test(formData.email)) {
            toast.error("Invalid email address");
            return false;
        }
        if(!formData.password.trim()) {
            toast.error("Password is required");
        }
        if(formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }
        return true;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const success = validateForm();
        if(success===true) signUp(formData);
    }

    return (
        <>
        <div className="min-h-screen grid lg:grid-cols-2 relative overflow-hidden">
          {/* Beautiful Animated Background Pattern - Full Page */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Geometric Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" className="animate-float-slow">
                <defs>
                  <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" className="text-base-content/30"/>
                  </pattern>
                  <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-base-content/20"/>
                  </pattern>
                  <pattern id="hexagons" width="120" height="120" patternUnits="userSpaceOnUse">
                    <polygon points="60,0 90,30 90,60 60,90 30,60 30,30" fill="none" stroke="currentColor" strokeWidth="1" className="text-base-content/15"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <rect width="100%" height="100%" fill="url(#dots)" />
                <rect width="100%" height="100%" fill="url(#hexagons)" />
              </svg>
            </div>

            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-particle-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${10 + Math.random() * 20}s`
                  }}
                />
              ))}
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
            <div className="absolute bottom-10 right-10 w-36 h-36 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />

            {/* Animated Wave Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-wave-right" />
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-wave-left" style={{ animationDelay: '3s' }} />
            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent animate-wave-down" />
            <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-wave-up" style={{ animationDelay: '2s' }} />

            {/* Diagonal Animated Lines */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/10 to-transparent animate-diagonal-slide" />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-secondary/10 to-transparent animate-diagonal-slide-reverse" style={{ animationDelay: '5s' }} />
            </div>

            {/* Concentric Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-base-content/10 rounded-full animate-pulse-slow" />
              <div className="absolute w-80 h-80 border border-base-content/8 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <div className="absolute w-64 h-64 border border-base-content/6 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
              <div className="absolute w-48 h-48 border border-base-content/4 rounded-full animate-pulse-slow" style={{ animationDelay: '3s' }} />
            </div>

            {/* Starburst Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" className="animate-rotate-slow">
                <defs>
                  <pattern id="starburst" width="200" height="200" patternUnits="userSpaceOnUse">
                    <g transform="rotate(0 100 100)">
                      <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="1" className="text-base-content/20"/>
                      <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="1" className="text-base-content/20"/>
                      <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-base-content/15"/>
                      <line x1="200" y1="0" x2="0" y2="200" stroke="currentColor" strokeWidth="1" className="text-base-content/15"/>
                    </g>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#starburst)" />
              </svg>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-base-100/70 via-base-200/30 to-base-100/70 backdrop-blur-sm" />
          </div>

          {/* Left side - Form */}
          <div className="relative z-10 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16">
            <div className="w-full max-w-lg space-y-10">
              {/* Enhanced Header */}
              <div className="text-center space-y-6">
                <div className="flex flex-col items-center gap-4 group">
                  <div className="relative">
                    <div className="size-16 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center 
                      group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <MessageSquare className="size-8 text-primary" />
                    </div>
                    
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-base-content to-base-content/80 bg-clip-text text-transparent">
                      Create Account
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-sm">
                      Join our community and start connecting with friends
                    </p>
                  </div>
                </div>
              </div>
    
              {/* Enhanced Form */}
              <div className="bg-base-100/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-base-300/50">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/80">Full Name</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="size-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input
                        type="text"
                        className="input input-bordered w-full pl-12 h-14 rounded-xl border-base-300/50 bg-base-200/50 backdrop-blur-sm focus:border-primary/50 focus:bg-base-200/80 transition-all duration-300"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                  </div>
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/80">Email Address</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="size-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input
                        type="email"
                        className="input input-bordered w-full pl-12 h-14 rounded-xl border-base-300/50 bg-base-200/50 backdrop-blur-sm focus:border-primary/50 focus:bg-base-200/80 transition-all duration-300"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
    
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-base-content/80">Password</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="size-5 text-base-content/40 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="input input-bordered w-full pl-12 h-14 rounded-xl border-base-300/50 bg-base-200/50 backdrop-blur-sm focus:border-primary/50 focus:bg-base-200/80 transition-all duration-300"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-primary transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-5" />
                        ) : (
                          <Eye className="size-5" />
                        )}
                      </button>
                    </div>
                  </div>
    
                  {/* Enhanced Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full h-14 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden" 
                    disabled={isSigningUp}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isSigningUp ? (
                      <div className="flex items-center gap-3 relative z-10">
                        <Loader className="size-5 animate-spin" />
                        <span>Creating Account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3 relative z-10">
                        <span>Create Account</span>
                        <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </button>
                </form>
              </div>
    
              {/* Enhanced Footer */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />
                  <span className="text-sm text-base-content/50 font-medium">Already have an account?</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-base-300 to-transparent" />
                </div>
                <Link 
                  to="/login" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group"
                >
                  <span>Sign in to your account</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
    
          {/* Right side - Image Pattern */}
          <AuthImagePattern
            title="Join our community"
            subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
          />
        </div>

        {/* Custom animations for background patterns */}
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }
          .animate-float-slow {
            animation: float-slow 25s ease-in-out infinite;
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          
          @keyframes particle-float {
            0% { transform: translateY(0px) translateX(0px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
          }
          .animate-particle-float {
            animation: particle-float linear infinite;
          }
          
          @keyframes wave-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-wave-right {
            animation: wave-right 12s linear infinite;
          }
          
          @keyframes wave-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-wave-left {
            animation: wave-left 12s linear infinite;
          }
          
          @keyframes wave-down {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .animate-wave-down {
            animation: wave-down 10s linear infinite;
          }
          
          @keyframes wave-up {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-100%); }
          }
          .animate-wave-up {
            animation: wave-up 10s linear infinite;
          }
          
          @keyframes diagonal-slide {
            0% { transform: translateX(-100%) translateY(-100%); }
            100% { transform: translateX(100%) translateY(100%); }
          }
          .animate-diagonal-slide {
            animation: diagonal-slide 15s linear infinite;
          }
          
          @keyframes diagonal-slide-reverse {
            0% { transform: translateX(100%) translateY(-100%); }
            100% { transform: translateX(-100%) translateY(100%); }
          }
          .animate-diagonal-slide-reverse {
            animation: diagonal-slide-reverse 15s linear infinite;
          }
          
          @keyframes rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-rotate-slow {
            animation: rotate-slow 40s linear infinite;
          }
        `}</style>
        </>
    );
}

export default SignUpPage;