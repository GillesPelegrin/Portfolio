import TopicTitle from "../topic-title";

export default function Language() {
  return (
    <>
      <div className="mx-4 flex min-h-[66%] flex-col items-center justify-center md:mx-10 lg:mx-20 lg:flex-grow lg:flex-row lg:justify-between xl:mx-40">
        <TopicTitle title="Language" />
        <div>
          <div className=" cursor-pointer rounded border border-4 border-white px-4 py-6   text-color-title shadow-card  hover:border-primary hover:shadow-none lg:px-10 lg:py-12">
            <CardTitle title="Java"> </CardTitle>
            <div className="pt-4 font-serif text-base lg:text-xl xl:text-2xl">
              <div>Framework: Angular, Nodejs</div>
              <div>Technology: Eslint, Protractor, Cypress, Primsa</div>
            </div>
          </div>
          <div className=" mt-6 cursor-pointer rounded border border-4 border-white px-4 py-6   text-color-title shadow-card  hover:border-primary hover:shadow-none lg:px-10 lg:py-12">
            <CardTitle title="Javascript + Typescript"> </CardTitle>
            <div className="pt-4 font-serif text-base lg:text-xl xl:text-2xl">
              <div>Framework: spring boot</div>
              <div>Technology: Liquibase, Maven, Hibernate, spring batch</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardTitle({ title }) {
  return (
    <div className="font-sans text-2xl font-semibold lg:text-3xl xl:text-4xl">
      {title}
    </div>
  );
}
