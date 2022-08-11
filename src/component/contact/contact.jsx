import TopicTitle from "../topic-title";

export default function Language() {
  return (
    <>
      <div className=" mx-3 flex min-h-[66%] flex-col items-center justify-center gap-8 md:mx-6 md:gap-10 lg:mx-20 lg:flex-grow lg:flex-row lg:justify-between 2xl:mx-40">
        <TopicTitle title="Contact" />
        <div
          className=" xl:p w-full rounded border border-4 border-white px-4 py-6 font-serif text-base text-color-title
          shadow-card md:w-1/2 md:p-6 md:text-xl 2xl:p-10 2xl:text-2xl"
        >
          <form className="flex flex-col gap-4 md:gap-6 2xl:gap-8">
            <div className="flex flex-col">
              <label htmlFor="name">Name / Company</label>
              <input
                id="name"
                className="rounded border border-black focus:outline-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="rounded border border-black focus:outline-primary"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <input
                id="message"
                className="rounded border border-black focus:outline-primary"
              />
            </div>
            <div className="text-right">
              <button className="rounded-md border border-4 border-secundary px-2 py-1 font-semibold text-secundary hover:bg-secundary hover:text-white  md:px-4 md:py-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
