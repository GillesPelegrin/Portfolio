import working from "../body/working.png";

export default function Introduction() {
  return (
    <div className="mx-3 flex min-h-[66%] items-center  justify-center md:mx-6 lg:mx-20 2xl:mx-40">
      <div className="order-2  flex flex-col-reverse content-center  justify-center lg:flex-grow  lg:flex-row lg:justify-between">
        <div className="mt-14 text-center lg:text-left">
          <div className="bg-gradient-to-r from-red-400 to-primary bg-clip-text font-sans text-3xl font-semibold text-transparent md:text-5xl lg:text-6xl 2xl:text-8xl">
            Full stack developer
          </div>
          <div className="font-serif text-base font-bold text-color-title md:text-2xl lg:text-3xl 2xl:text-5xl">
            Creating your websites/applications
          </div>
        </div>
        <div className="order-1 flex justify-center">
          <img
            src={working}
            alt="Cartoon of Gilles Pelegrin"
            className="h-auto w-72 md:h-80 md:w-80 xl:h-[398px] xl:w-[422px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
