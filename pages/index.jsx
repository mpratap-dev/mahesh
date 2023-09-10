import Waves from "../components/Waves";

const classes = {
  heading:
    "text-lg tracking-tight leading-10 font-black dark:text-gray-200 sm:text-xl sm:leading-none md:text-3xl mb-1 md:mb-0",
  grid:
    "grid md:gap-5 grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 z-10",
  para:
    "md:mt-3 mb-3 md:mb-0 text-base dark:text-gray-200 sm:mt-5 sm:text-lg sm:mx-auto md:mt-3 md:text-md lg:mx-0 font-bold",
  button:
    "w-full flex items-center justify-center px-8 py-2 border border-transparent text-base rounded-lg text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:border-purple-800 focus:shadow-outline-purple transition duration-300 ease-in-out md:py-2 md:text-md md:px-5",
  imageContainer:
    "rounded-full mb-2 row-span-2 md:mr-15 order-1 w-1/2 md:h-96 justify-self-center md:w-3/4 md:col-span-1 md:self-center md:justify-self-center md:order-2 md:mb-0",
};

export default function Home() {
  return (
    <>
      <div className="p-5 md:py-0 md:pl-10 flex relative items-center h-full">
        <div className={classes.grid}>
          <div className="col-span-2 font-black order-2 md:order-1">
            <div className="content md:my-0 mt-1">
              <h2 className={classes.heading}>Hey,</h2>
              <p className={classes.para}>
                As a dedicated <span className="text-primary">Front End Developer</span> and enthusiastic <span className="text-primary">UI/UX specialist</span>, 
                I possess extensive expertise in front-end JavaScript, browser APIs, and hands-on experience with renowned 
                frameworks and libraries such as React and VueJS. 
                
                
              </p>
              <p className={classes.para}>
                My ultimate joy lies in transforming intricate challenges into elegant, user-friendly interface designs.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-full shadow">
                <span
                  href="Mahesh_Resume(Front-End).pdf"
                  className={classes.button}
                >
                  Here's my CV
                </span>
              </div>
            </div>
          </div>
          <div className={classes.imageContainer}>
            <img
              height="280"
              width="280"
              src="/images/dp.jpg"
              className="mx-auto rounded-full bg-gray-100"
              alt="dp"
            />
          </div>
        </div>
        <Waves />
      </div>
    </>
  );
}
