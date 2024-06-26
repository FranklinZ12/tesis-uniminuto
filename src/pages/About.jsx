import React from 'react'
import logo from 'media/logo_black.png'

const About = () => {
    return (
        <div className='grid grid-cols-4 grid-rows-4 gap-5 py-10'>
            <figure className="col-start-1 col-end-4 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4 ">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Franklin Zapata
                        </div>
                        <div className="text-gray-700">
                            Software Engineer, Medellín
                        </div>
                        <div className='social'>
                            <a href="https://github.com/FranklinZ12">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="www.linkedin.com/in/franklin-zapata">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
            <figure className="col-end-5 col-span-3 md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium">
                        <div className="text-sky-500">
                            Juan David Caicedo Alfaro
                        </div>
                        <div className="text-gray-700">
                            Software Engineer, Colombia
                        </div>
                        <div className='social'>
                            <a href="https://github.com/Juan64205">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/juan-david-caicedo-8b8a29195/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default About
