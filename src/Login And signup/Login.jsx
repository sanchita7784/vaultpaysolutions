import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);

      // Save token and username to localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.user.name); // Store username
      } else {
        console.warn('No token received from backend');
      }
    
      // Redirect to homepage
      alert('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      const errorMessage =
        error.response?.status === 401
          ? 'Invalid email or password'
          : error.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Create animated stars(unchanged)
  useEffect(() => {
    const container = document.querySelector('.bg-container');
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'absolute rounded-full bg-white animate-pulse';

      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = Math.random() * 0.7 + 0.3;
      const duration = `${Math.random() * 3 + 2}s`;
      const delay = `${Math.random() * 2}s`;

      star.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        top: ${top}%;
        opacity: ${opacity};
        animation-duration: ${duration};
        animation-delay: ${delay};
      `;

      container.appendChild(star);
    }

    return () => {
      const stars = document.querySelectorAll('.bg-container > div');
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Astronomical Rainbow BackGround */}
      <div className="bg-container absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-70">
          <div
            className="absolute left-1/2 top-1/2 w-[150vw] h-[150vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,0,0,0.2) 0%, rgba(255,165,0,0.2) 20%, rgba(255,255,0,0.2) 40%, rgba(0,128,0,0.2) 60%, rgba(0,0,255,0.2) 80%, rgba(128,0,128,0.2) 100%)',
              filter: 'blur(20px)',
              animation: 'pulse 15s infinite alternate',
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 w-[120vw] h-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,0,0,0.3) 0%, rgba(255,165,0,0.3) 20%, rgba(255,255,0,0.3) 40%, rgba(0,128,0,0.3) 60%, rgba(0,0,255,0.3) 80%, rgba(128,0,128,0.3) 100%)',
              filter: 'blur(15px)',
              animation: 'pulse 12s infinite alternate-reverse',
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 w-[90vw] h-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,0,0,0.4) 0%, rgba(255,165,0,0.4) 20%, rgba(255,255,0,0.4) 40%, rgba(0,128,0,0.4) 60%, rgba(0,0,255,0.4) 80%, rgba(128,0,128,0.4) 100%)',
              filter: 'blur(10px)',
              animation: 'pulse 10s infinite alternate',
            }}
          />
        </div>
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 filter blur-3xl opacity-70 animate-float" />
          <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-blue-600 filter blur-3xl opacity-70 animate-float-delay" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-pink-600 filter blur-3xl opacity-70 animate-float-reverse" />
        </div>
      </div>

      {/*Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-gradient-to-r from-black via-stone-800 to-black backdrop-blur-sm rounded-lg shadow-xl p-6 sm:p-8 border border-gray-700/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
            Log In
          </h2>
          <div className="mb-6 text-center">
            <div className="inline-block p-3 bg-gray-700/50 rounded-full border border-gray-600/50">
              <svg
                className="w-8 h-8 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="mt-1 w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="mt-1 w-full px-4 py-2 bg-gray-700/50 border border-gray-600/50 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50"
                placeholder="••••••••"
              />
            </div>
            {error && (
              <p className="text-center text-sm text-red-400">{error}</p>
            )}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-indigo-600/90 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 disabled:bg-indigo-600/50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging In...' : 'Log In'}
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-indigo-400 hover:text-indigo-300">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float-delay {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 10s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default LoginPage;