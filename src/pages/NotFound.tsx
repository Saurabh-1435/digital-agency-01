
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full bg-brand-purple/20 flex items-center justify-center">
              <h1 className="text-6xl font-bold text-brand-purple">404</h1>
            </div>
            <div className="absolute top-0 right-0 w-10 h-10 rounded-full bg-brand-orange transform translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 rounded-full bg-brand-blue transform -translate-x-1/2 translate-y-1/4"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn btn-primary inline-flex items-center gap-2"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
