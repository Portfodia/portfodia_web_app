const Hero = () => {
    return ( 
        <>
            <div className="text-white bg-gradient-to-br from-lightPurple via-middlePurple to-deepPurple h-[100vh] flex flex-col items-center justify-center gap-4 px-4 lg:px-0">
                <img src="images/peopleD.png" alt="" className="w-0 md:w-[70%] invisible lg:visible" />
                <img src="images/peopleM.png" className="lg:invisible visible px-6 md:w-0" alt="" />
                <h1 className="lg:text-4xl text-3xl font-semibold lg:w-[40rem] w-[17rem] text-center">Build your Portfolio, or Find one that matches your needs</h1>
                <p className="lg:w-[25rem] w-[17rem] text-center font-light text-sm">The future of hiring and bidding is headhunting and the future of job hunting is your digital reputation!</p>
                <button className="text-white bg-black rounded-md px-5 py-2">Get Started Now!</button>
            </div>
        </>
     );
}
 
export default Hero;