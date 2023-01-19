import React from 'react';
import ImgRegistration from "../Assets/Registration.PNG"

const Registration = () => {
    return (

        <div className='mt-5 border border-2 border-blue-500 rounded-2xl flex flex-col md:flex-row lg:divide-x-4'>
            <div className="w-96 md:pl-20 p-1">
                <h1 className='text-5xl font-bold text-secondary mt-5'>Education<span className='text-red-500'>*</span></h1>
                <div className="form-control w-full  max-w-xs mt-5">
                    <label className="label">
                        <span className="label-text text-secondary font-semibold">Year of Passing <span className='text-red-500'>*</span></span>
                    </label>
                    <input type="text" placeholder="2024" className="input input-bordered text-secondary border-black w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt text-secondary">0/100</span>
                    </label>
                </div>
                <div className="form-control w-full  max-w-xs mt-2">
                    <label className="label">
                        <span className="label-text text-secondary font-semibold">Region<span className='text-red-500'>*</span></span>
                    </label>
                    <input type="text" placeholder="Jalandhar" className="input input-bordered text-secondary border-black w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt text-secondary">0/100</span>
                    </label>
                </div>
                <div className="form-control w-full  max-w-xs mt-2">
                    <label className="label">
                        <span className="label-text text-secondary font-semibold">College Name<span className='text-red-500'>*</span></span>
                    </label>
                    <input type="text" placeholder="NIT Jalandhar" className="input input-bordered text-secondary border-black w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt text-secondary">0/100</span>
                    </label>
                </div>
                <div className="form-control w-full max-w-xs mt-2">
                    <label className="label">
                        <span className="label-text text-secondary font-semibold">Describe college<span className='text-red-500'>*</span></span>
                        <span className="label-text-alt text-primary font-semibold">Need help ?</span>
                    </label>
                    <input type="text" placeholder="NITJ is a college of national
                     importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...." className="text-secondaryinput input-bordered h-36  border-black" />
                    <label className="label">
                        <span className="label-text-alt"></span>
                        <span className="label-text-alt text-secondary">0/200</span>
                    </label>
                </div>
                <button className='btn btn-primary w-32 mb-5 text-white'>Generate</button>
            </div>
            <div class="hero container max-w-screen-lg mx-auto pb-10 flex justify-center">
    <img  src={ImgRegistration} alt="screenshot" />
</div>
        </div>
    );
};

export default Registration;