export default function Language() {
    return <>
        <div className='flex justify-between mx-20 mt-28 items-center'>
            <div className='font-sans text-8xl text-black font-semibold'>Language</div>
            <div>
                <div className='p-10 shadow-lg text-black'>
                    <div className='font-sans text-4xl font-semibold'>Java</div>
                    <div className='text-2xl font-serif pt-8'>
                        <div>Framework: Angular, Nodejs</div>
                        <div>Technology: Eslint, Protractor, Cypress, Primsa</div>

                    </div>
                </div>
                <div className='p-10 shadow-lg border border-gray-100 mt-10 text-black'>
                    <div className='font-sans text-4xl font-semibold'>Javascript + Typescript</div>
                    <div className='text-2xl font-serif pt-8'>
                        <div>Framework: spring boot</div>
                        <div>Technology: Liquibase, Maven, Hibernate, spring batch</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}