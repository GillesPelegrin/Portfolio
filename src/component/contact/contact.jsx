import TopicTitle from "../topic-title";

export default function Language() {
  return (
    <>
      <div className=" mx-4 flex min-h-[66%] flex-col items-center justify-center md:mx-10 lg:mx-20 lg:flex-grow lg:flex-row lg:justify-between xl:mx-40">
        <TopicTitle title="Contact" />
        <div className=" w-full rounded border border-4 border-white px-4 py-6 font-serif text-2xl  text-color-title shadow-card md:w-1/2  lg:px-10 lg:py-12">
          <form className="flex flex-col gap-8">
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
              <button className="rounded border border-4 border-secundary px-4 py-2 font-semibold text-secundary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
