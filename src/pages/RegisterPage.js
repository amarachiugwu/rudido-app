// import React, {useState} from 'react';
import React, { useEffect } from 'react';
// import {Link, useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import axios from 'axios';
// import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions';


export default function RegisterPage () {

    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    const {status} = userDetails;

    useEffect(() => {
        dispatch(loginUser());
    }, []);


    return (
        <div className="md:flex h-screen">

         {/* outer absolute box container */}
        <div className="hidden md:block absolute inset-x-4 inset-y-4 rounded-30 shadow-md"></div>

        <div className="md:my-4 md:ml-4 h-auto w-full md:flex">
            <div className="md:flex-1 bg-white md:bg-darkBlue-100 rounded-tl-md rounded-bl-30 w-full md:w-2/5">
                {/* sm absolute top left arc */}
                <div className="block md:hidden absolute left-0 top-0 w-32 h-32 sm:w-40 sm:h-40 rounded-br-fullSide bg-darkBlue-100 bg-opacity-90 z-20 shadow-md"></div>

                {/* md absolute half side left arc */}
                <div className="hidden md:block absolute left-[-3%] lg:left-[-2%] bottom-56 w-52 h-52  rounded-tr-fullSide bg-pinkRose-200 bg-opacity-90 z-10"></div>

                {/* md absolute half side left arc */}
                <div className="hidden md:block absolute left-[-3%] lg:left-[-2%] bottom-4 w-52 h-52  rounded-br-fullSide bg-pinkRose-200 bg-opacity-90 z-10"></div>

                {/* sm absolute top right arc */}
                <div className="md:hidden absolute right-13 top-[-6%] w-32 h-32  rounded-fullSide bg-pinkRose-200 bg-opacity-90 z-10"></div>

                {/* <!-- logo --> */}
                <div className="block absolute z-30 w-32 h-32 top-20 left-2/4 -ml-16 md:ml-0 md:left-16 md:top-24 md:w-32 md:h-32 ">
                    <img src="/images/rudido-logo.png" alt="Logo" />
                </div>

                <div className="relative w-full h-full">
                    <p className="hidden md:block font-bold text-4xl md:w-3/4 text-white absolute left-16 top-60 z-20">
                        The best way to source, build, showcase ideas.
                    </p>
                    
                    <p className="hidden md:block text-lg md:w-4/5 text-white absolute left-16 bottom-24 z-20">
                        Rudido connects you to the content, people, businesses, and opportunities that are best suited to build an idea from start to finish.
                    </p>
                    
                </div>

                
                
            </div>

            <div className="md:flex-1 w-full md:w-3/5">
                 {/* md absolute top right arc */}
                <div className="hidden md:block absolute right-0 top-0 w-32 h-32 rounded-bl-fullSide bg-darkBlue-100 shadow-md z-10"></div>
                
                 {/* md absolute bottom right arc */}
                <div className="hidden md:block absolute right-0 bottom-0 w-16 h-16 rounded-tl-fullSide bg-darkBlue-100 shadow-md z-10"></div>

                {/* sm absolute bottom left arc */}
                <div className="block md:hidden absolute left-0 bottom-6 w-16 h-16 rounded-fullSide bg-pinkRose-200 bg-opacity-90 shadow-md z-10"></div>

                <div className="relative w-full h-screen md:h-full overflow-y-scroll">
                    {/* <!-- hand image --> */}
                    <div className="hidden md:block absolute top-4 left-2/4 -ml-24 w-48 h-48 ">
                        <img src="/images/hands.png" alt="hand img" />
                    </div>

                    <div className="max-h-screen absolute top-44 md:top-32 left-0 w-full mr-4 px-8 md:px-12 lg:px-20 pt-4">
                        <p className="font-bold text-2xl text-center mx-auto text-darkBlue-100 py-10">
                            Create an account
                        </p>

                        <div className="text-center">
                            <p className="font-500 text-3xl w-3/4 mx-auto text-gray-900 pb-3">
                                Sign Up
                            </p>
                            <span className="block text-md w-3/4 mx-auto text-gray-600 pb-8">Easy sign in process</span>
                        </div>
                        
                         {/* google socialite button --}}        */}
                        <a href="{{ url('auth/google') }}" className="rounded-30 block text-white py-2 px-4 mb-10 transition duration-200 bg-google-100 hover:bg-darkBlue-100 text-center">
                    
                            {/* <?xml version="1.0"?> */}
                            <svg className="h-6 w-6 inline" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    
                                <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/>
                            </svg>
                                
                            <span className="inline-block pl-2">Signup With Google</span>
                        </a>

                         {/* facebook socilite button */}
                        <a href="{{ url('auth/facebook') }}" className="rounded-30 block text-white py-2 px-4 mb-10 transition duration-200 bg-facebook-100 hover:bg-darkBlue-100 text-center">
                    
                            <svg className="h-6 w-6 inline" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"/></svg>
                                
                            <span className="inline-block pl-2">Signup With Facebook</span>
                        </a>
                        
                        <p className="text-gray-600 text-center pt-2"> Don't have google or facebook account Signup 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                              </svg>
                        </p>

                        <form className="w-full space-y-6 sm:space-y-8" method="POST"
                        action="{{ route('register') }}">
                        {/* @csrf */}

                            <div className="flex flex-wrap">
                                <label for="name" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                Name
                                </label>

                                <input id="name" type="text" className="form-input w-full border"
                                    name="name" value="" required autocomplete="name" />

                                {/* @error('name')
                                <p className="text-red-500 text-xs italic mt-4">
                                    {{ $message }}
                                </p>
                                @enderror */}
                            </div>

                            <div className="flex flex-wrap">
                                <label for="email" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                E-Mail Address
                                </label>

                                <input id="email" type="email"
                                    className="form-input w-full border" name="email"
                                    value="" required autocomplete="email" />

                                {/* @error('email')
                                <p className="text-red-500 text-xs italic mt-4">
                                    {{ $message }}
                                </p>
                                @enderror */}
                            </div>

                            <div className="flex flex-wrap">
                                <label for="password" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                Password
                                </label>

                                <input id="password" type="password"
                                    className="form-input w-full border" name="password"
                                    required autocomplete="new-password" />

                                {/* @error('password')
                                <p className="text-red-500 text-xs italic mt-4">
                                    {{ $message }}
                                </p>
                                @enderror */}
                            </div>

                            <div className="flex flex-wrap">
                                <label for="password-confirm" className="block text-gray-700 text-sm font-bold mb-2 sm:mb-4">
                                Confirm Password
                                </label>

                                <input id="password-confirm" type="password" className="form-input w-full border"
                                    name="password_confirmation" required autocomplete="new-password" />
                            </div>

                            <div className="flex flex-wrap">
                                <button type="submit"
                                className="w-full transition duration-200 select-none whitespace-no-wrap py-2 px-3 rounded-lg text-base leading-normal no-underline text-gray-100 bg-darkBlue-100 hover:bg-blue-900 sm:py-2">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    
                                    Signup With Email
                                </button>

                                <p className="w-full text-center text-gray-600 my-6 sm:text-sm sm:my-8">
                                    Already have an account?
                                    <Link to="/login" className="text-red-500 hover:text-red-700 no-underline hover:underline"> Login </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}