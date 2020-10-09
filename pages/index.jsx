const classes = {
  heading:
    "text-lg tracking-tight leading-10 font-black dark:text-gray-200 sm:text-xl sm:leading-none md:text-3xl mb-1 md:mb-0",
  grid: "grid md:gap-5 grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1",
  para:
    "md:mt-3 mb-3 md:mb-0 text-base dark:text-gray-200 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-md lg:mx-0",
  button:
    "w-full flex items-center justify-center px-8 py-2 border border-transparent text-base rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-300 ease-in-out md:py-2 md:text-md md:px-5",
  imageContainer:
    "border-solid rounded-full mb-2 row-span-2 border-2 md:border-4 border-gray-200 mr-20 order-1 w-32 h-32 md:w-64 md:h-64 md:col-span-1 md:self-center md:justify-self-end md:order-2 md:mb-0",
};

export default function Home() {
  return (
    <div className="p-5 md:py-0 md:pl-10 md:flex md:items-center h-full">
      <div className={classes.grid}>
        <div className="col-span-2 font-black order-2 md:order-1">
          <div className="content md:my-0 mt-1 mb-8">
            <h2 className={classes.heading}>Hey,</h2>
            <p className={classes.para}>
              I'm a <span className="text-primary">Front End Developer </span>
              and a passionate{" "}
              <span className="text-primary">UI/UX Developer </span>. With
              extensive knowledge of front-end JavaScript and browser APIs as
              well as significant experience with popular frameworks and
              libraries like React and AngularJS.
            </p>
            <p className={classes.para}>
              I enjoy turning complex problems into simple, beautiful and
              intuitive interface designs.
            </p>
          </div>
          <div className="mt-3 sm:mt-5 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-full shadow">
              <a href="Mahesh_Resume(Front-End).pdf" className={classes.button}>
                Here's my CV
              </a>
            </div>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <img src="images/dp.png" className="mx-auto rounded-full" alt="dp" />
        </div>
      </div>
    </div>
  );
}
