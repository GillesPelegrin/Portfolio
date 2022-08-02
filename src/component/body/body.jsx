import working from "./working.png";
import Language from "../language/language";

export default function Body() {
    return (
        <>
            <div className="mx-4 flex min-h-[66%] items-center  justify-center md:mx-20 xl:mx-40 ">
                <div
                    className="order-2 flex flex-col-reverse  content-center justify-center lg:flex-grow lg:flex-row lg:justify-between">
                    <div className="mt-14 text-center lg:text-left">
                        <div
                            className="bg-gradient-to-r from-red-400 to-primary bg-clip-text font-sans text-4xl font-semibold text-transparent lg:text-5xl xl:text-6xl">
                            Full stack developer
                        </div>
                        <div className="font-serif text-2xl lg:text-3xl xl:text-4xl font-bold text-color-title">
                            Creating your websites/applications
                        </div>
                    </div>
                    <div className="order-1 flex justify-center">
                        <img
                            src={working}
                            alt="Cartoon of Gilles Pelegrin"
                            className="h-auto w-72 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
                        ></img>
                    </div>
                </div>
            </div>
            <div className="h-1/6"></div>
            <Language></Language>
            <div className="h-1/6"></div>
            {/* <Project></Project> */}
        </>
    );
}
