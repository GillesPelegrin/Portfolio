
import working  from './working.png'
import Language  from '../language/language'

export default function Body() {
    return <>
        <div className='flex justify-between mx-20 mt-28'>
            <div className='mt-14'>
                <div className='font-sans text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-primary'>Full stack developer</div>
                <div className='font-serif text-3xl font-bold text-black'>Creating your websites/applications</div>
            </div>
            <img src={working}></img>
        </div>
        <Language></Language>

    </>
}