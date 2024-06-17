import React from 'react';

export default function FrontImage() {
    return (
        <>
            <div className="text-black  bg-scroll opacity-75 w-fit leading-8 min-w-80  text-left hover:capitalize rounded-lg">
                <div className='pl-14 content-around place-content-between min-w-48 md:h-full md:w-auto pr-24'>
                    <header>
                        <h1 className='text-4xl p-10 line-clamp-none hover:text-6xl text-center text-slate'>Welcome To Big Easy Events!</h1>
                    </header>
                    <section className='p-1 text-slate'>
                        <h2 className='text-2xl hover:text-3xl'>Our Story</h2>
                        <p>Born out of a love for New Orleans and a desire to simplify event planning, Big Easy Events was founded by a team of locals who know this city like the back of their hand. With years of experience in the event industry and a deep understanding of the nuances that make New Orleans special, we set out to create a platform that celebrates New Orleans rich heritage while providing modern, innovative event planning solutions.</p>
                    </section>
                    <section className='p-1'>
                        <h2 className='text-2xl hover:text-3xl'>What We Offer</h2>
                        <p>Big Easy Events is more than just an app, it is your ultimate companion for planning unforgettable experiences in New Orleans. From finding the perfect venue and selecting mouthwatering catering options to securing top-notch entertainment and designing stunning decor, our platform connects you with New Orleans finest vendors and resources, all in one place.</p>
                    </section>
                    <section className='p-1'>
                        <h2 className='text-2xl hover:text-3xl'>Why Choose Us</h2>
                        <ul>
                            <li><strong>Local Expertise:</strong> Our team of seasoned locals knows New Orleans inside and out, ensuring that every aspect of your event reflects New Orleans authentic charm.</li>
                            <li><strong>Tailored Solutions:</strong> We understand that no two events are alike. That is why we offer personalized planning services tailored to your unique vision, preferences, and budget.</li>
                            <li><strong>Seamless Experience:</strong> With our user-friendly app, planning your event is a breeze. Easily browse vendors, manage bookings, and stay organized every step of the way.</li>
                            <li><strong>Endless Possibilities:</strong> Whether you are dreaming of a traditional jazz band serenading your guests or a chic rooftop affair with skyline views, the possibilities are endless with Big Easy Events.</li>
                        </ul>
                    </section>
                    <section className='p-1'>
                        <h2 className='text-2xl hover:text-3xl'>Get Started Today</h2>
                        <p>Ready to bring your vision to life? Download the Big Easy Events app and embark on a journey to create the event of a lifetime in one of the world&apos;s most enchanting cities. Let us make memories together, the New Orleans way.</p>
                    </section>

                </div>
            </div>
        </>
    )
}