import React from 'react';
import logo from '../assets/logo.png'; 

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <div className='flex items-center space-x-2'>
            {/* <img src={logo} alt="SpeedSense" className="mx-auto h-6 w-6" />
            <p className="mt-4 text-2xl text-gray-800">SpeedSense</p> */}
          </div>
          <h3 className="mt-2 text-xl text-gray-800">Login to continue</h3>
          <p className="mt-2 text-gray-600">Welcome back, enter your credentials to continue</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <input type="checkbox" id="remember-me" className="mr-2 leading-tight" />
              <label htmlFor="remember-me" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Login
          </button>
          <div className="text-center mt-4 text-gray-600">OR</div>
          <div className="text-center mt-4">
            <div className='flex justify-center'>
              <p>Don't have an account? </p>
              <a href="#" className="text-blue-600 hover:underline"> Contact us</a>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
