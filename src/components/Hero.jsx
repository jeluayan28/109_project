import { useState } from 'react';
import { styles } from '../styles';
import herobg from '../assets/herobg.png';
import { facebook, google, login, signup } from '../assets';

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin((prev) => !prev);
    setShowSignup(false); // Ensure only one modal is open at a time
  };

  const toggleSignupForm = () => {
    setShowSignup((prev) => !prev);
    setShowLogin(false); // Ensure only one modal is open at a time
  };

  return (
    <section className="relative w-full h-screen mx-auto bg-tertiary overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full"> 
        <div className="relative w-full h-full">
          <div className="hidden md:block absolute top-0 right-0 w-full h-full bg-white rounded-bl-full overflow-hidden">
            <img
              src={herobg}
              alt="Senior and Caregiver"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-[102%] h-[102%] border-8 border-dashed border-white-400 rounded-bl-full"></div>
        </div>
      </div>
      
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto flex flex-col justify-between ml-12`}> 
        <div className="mt-auto z-10">
          <h1 className={`${styles.heroHeadText} text-yellow-400 font-bold leading-tight`}>
            EXPERT GUIDANCE
          </h1>
        </div>
        
        <div className="mb-32 z-10">
          <p className={`${styles.heroSubText} text-white max-w-md mb-8`}>
            Our mission is to provide exceptional support and resources tailored specifically for seniors, ensuring they receive the care and connection they deserve.
          </p>
          
          <div className="flex gap-4">
            <button
              onClick={toggleLoginForm}
              type="button"
              className="bg-black-200 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-900 transition-colors"
            >
              <img src={login} alt="login" className="w-6 h-6 mr-2" /> 
              LOGIN
            </button>
            
            <button
              onClick={toggleSignupForm}
              type="button"
              className="bg-black-200 py-3 px-6 text-white font-bold rounded-full flex items-center hover:bg-blue-900 transition-colors"
            >
              <img src={signup} alt="signup" className="w-6 h-6 mr-2" /> 
              SIGNUP
            </button>
          </div>
        </div>
      </div>

      {/* Login Form Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 backdrop-blur-sm overflow-hidden">
          <div className="bg-tertiary p-8 rounded-xl shadow-lg w-full max-w-md relative"> {/* Add relative to parent div */}
            {/* Close Button */}
            <button
              onClick={toggleLoginForm}
              className="absolute top-5 right-8 text-white text-2xl focus:outline-none"
            >
              &times; {/* This represents the "X" character */}
            </button>

            <h2 className="text-3xl font-bold text-center mt-10">Welcome back!</h2>
            <p className="text-yellow-200 text-center mb-6">Enter your email and password</p>
            
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-1 text-yellow-200 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-2 mb-1 text-yellow-200 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center text-customNeon">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-customNeon">Forgot Password?</a>
            </div>

            <div className="flex items-center mb-4"> {/* Added container for dropdown */}
              <button
                type="button"
                onClick={toggleLoginForm}
                className="w-full bg-black-200 text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition"
              >
                Login
              </button>
              <select className="ml-2 border rounded-lg p-2 bg-white text-black focus:outline-none">
                <option value="user">User</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            <div className="flex items-center justify-center mt-6">
              <span className="text-yellow-200">or login with</span>
            </div>
            
            <div className="flex justify-center gap-4 mt-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                <img src={google} alt="google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                <img src={facebook} alt="facebook" className="w-5 h-5 mr-2" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      )}



      {/* Signup Form Modal */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 backdrop-blur-sm overflow-hidden">
          <div className="bg-tertiary p-8 rounded-xl shadow-lg w-full max-w-md relative"> {/* Add relative to parent div */}
            {/* Close Button */}
            <button
              onClick={toggleSignupForm}
              className="absolute top-5 right-8 text-white text-2xl focus:outline-none"
            >
              &times; {/* This represents the "X" character */}
            </button>

            <h2 className="text-3xl font-bold text-center mt-10">Create an account.</h2>
            <p className="text-yellow-200 text-center mb-6">Enter your details to sign up</p>

            {/* Username Input */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-1 text-yellow-200 font-medium">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-1 text-yellow-200 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-4">
              <label className="flex items-center gap-2 mb-1 text-yellow-200 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="button"
              onClick={toggleSignupForm}
              className="w-full bg-black-200 text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center mt-6">
              <span className="text-yellow-200">or sign up with</span>
            </div>

            {/* Social Signup Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                <img src={google} alt="Google" className="w-5 h-5 mr-2" />
                Google
              </button>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                <img src={facebook} alt="facebook" className="w-5 h-5 mr-2" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="absolute -top-5 -left-5 w-48 h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full"></div>
      <div className="absolute -bottom-32 -left-10 w-32 h-48 md:w-48 md:h-48 lg:w-48 lg:h-48 bg-primary rounded-full"></div>
      <div className="absolute -top-5 -right-5 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full block lg:hidden block md:hidden"></div>
      <div className="absolute -bottom-32 -right-5 w-48 h-60 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full block lg:hidden block md:hidden"></div>
    </section>
  );
};

export default Hero;
