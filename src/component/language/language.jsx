export default function Language() {
    return (
      <>
        <div className="mx-20 mt-28 flex items-center justify-between">
          <div className="font-sans text-8xl font-semibold text-color-title">
            Language
          </div>
          <div>
            <div className="p-10 text-color-title shadow-lg">
              <div className="font-sans text-4xl font-semibold">Java</div>
              <div className="pt-8 font-serif text-2xl">
                <div>Framework: Angular, Nodejs</div>
                <div>Technology: Eslint, Protractor, Cypress, Primsa</div>
              </div>
            </div>
            <div className="mt-10 border border-gray-100 p-10 text-color-title shadow-lg">
              <div className="font-sans text-4xl font-semibold">
                Javascript + Typescript
              </div>
              <div className="pt-8 font-serif text-2xl">
                <div>Framework: spring boot</div>
                <div>Technology: Liquibase, Maven, Hibernate, spring batch</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}