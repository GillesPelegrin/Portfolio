import TopicTitle from "../topic-title";

export default function Language() {
    return (
        <>
            <div
                className="mx-4 md:mx-10 xl:mx-40 lg:mx-20 min-h-[66%] justify-center flex flex-col items-center lg:flex-grow lg:flex-row lg:justify-between">
                <TopicTitle title='Language'/>
                <div>
                    <div className=" px-4 lg:px-10 lg:py-12 py-6 text-color-title shadow-lg">
                        <CardTitle title='Java'> </CardTitle>
                        <div className="pt-4 font-serif text-base lg:text-xl xl:text-2xl">
                            <div>Framework: Angular, Nodejs</div>
                            <div>Technology: Eslint, Protractor, Cypress, Primsa</div>
                        </div>
                    </div>
                    <div className=" mt-6 px-4 lg:px-10 lg:py-12 py-6 text-color-title shadow-lg">
                        <CardTitle title='Javascript + Typescript'> </CardTitle>
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

function CardTitle({title}) {
    return <div className="font-sans text-2xl lg:text-3xl xl:text-4xl font-semibold">
        {title}
    </div>
}