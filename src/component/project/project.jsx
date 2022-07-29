import node  from './nodejs.png'
import pwa  from './pwa.png'
import three  from './three2.png'


export default function Project() {
    return (
      <>
        <div className="mx-20 mt-28 flex items-center justify-between">
          <div className="flex gap-10">
            <div className="shadow-lg">
              <img src={pwa} width={380} height={210} alt="PWA" />
              <h2 className="my-3 text-center font-serif text-3xl font-bold">
                PWA
              </h2>
            </div>
            <div className="shadow-lg">
              <img src={three} width={380} height={210} alt="Threejs" />
              <h2 className="my-3 text-center font-serif text-3xl font-bold">
                Threejs
              </h2>
            </div>
            <div className="shadow-lg">
              <img
                className="scale-50"
                src={node}
                width={380}
                height={210}
                alt="Nodejs"
              />
              <h2 className="my-3 text-center font-serif text-3xl font-bold">
                NodeJs
              </h2>
            </div>
          </div>
          <div className="font-sans text-8xl font-semibold text-color-title">
            Projects
          </div>
        </div>
      </>
    );
}