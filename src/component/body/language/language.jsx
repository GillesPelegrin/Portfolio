import TopicTitle from "../../topic-title";

export default function Language() {
  return (
    <>
      <div
        className=" mx-3 flex flex-col items-center justify-center
      gap-8 md:mx-6 md:gap-10 lg:mx-20 lg:flex-grow lg:flex-row lg:justify-between 2xl:mx-40"
        style={{ height: `calc(100vh * 4/6)` }}
      >
        <TopicTitle title="Language" />
        <div>
          <div className=" cursor-pointer rounded border border-4 border-white bg-white p-4   text-color-title shadow-card  hover:border-primary hover:shadow-none md:p-8 2xl:p-10">
            <CardTitle title="Javascript + Typescript"> </CardTitle>
            <div className="pt-4 font-serif text-base md:text-xl xl:pt-6  2xl:text-2xl">
              <div>Framework: Angular, React, Nodejs</div>
              <div>Technology: Eslint, Protractor, Cypress, Prisma, ...</div>
            </div>
          </div>
          <div className=" mt-6 cursor-pointer rounded border border-4 border-white bg-white p-4 text-color-title  shadow-card hover:border-primary hover:shadow-none md:p-8 2xl:p-10 ">
            <CardTitle title="Java (8-11)"> </CardTitle>
            <div className="pt-4 font-serif text-base md:text-xl xl:pt-6  2xl:text-2xl">
              <div>Framework: spring boot</div>
              <div>
                Technology: Liquibase, Maven, Hibernate, spring batch, ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CardTitle({ title }) {
  return (
    <div className="font-sans text-2xl font-semibold  md:text-3xl ">
      {title}
    </div>
  );
}
