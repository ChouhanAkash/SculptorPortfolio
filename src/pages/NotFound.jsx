import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-earth-sand relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-terracotta rounded-full top-10 left-10 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute w-64 h-64 bg-earth-clay rounded-full bottom-10 right-10 animate-[float_10s_ease-in-out_infinite]"></div>
      </div>
      <div className="text-center px-4 relative z-10 animate-[slideUp_0.8s_ease-out]">
        <h1 className="text-9xl font-bold text-terracotta mb-4 animate-[float_4s_ease-in-out_infinite]">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-earth-dark">Page Not Found</h2>
        <p className="text-lg text-earth-medium mb-8 max-w-md mx-auto">
          This page has crumbled away like unfired clay. Let's get you back to solid ground.
        </p>
        <Link to="/" className="btn-primary transform hover:-rotate-2">
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
