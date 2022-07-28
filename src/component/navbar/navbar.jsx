import { ReactComponent as IconMenu } from './logo.svg'


export default function Navbar() {
    return <nav className='flex justify-between mx-20 mt-8 font-semibold text-black font-sans'>
        <div className='flex gap-6 items-center'>
            <IconMenu height='90px' width='90px' />
            <div className='text-5xl '>Gilles Pelegrin</div>
        </div>
        <div className='flex gap-9 text-4xl items-center cursor-pointer  text-gray '>
            <div className='hover:text-black'>Languages</div>
            <div className='hover:text-black'>Projects</div>
            {/* This button does not respons the right way, i have the feeling that the border is removed when hovering */}
            <div className='text-secundary border-4 rounded-2xl p-2 hover:bg-secundary hover:text-white'>Contact</div>
        </div>
    </nav>
}