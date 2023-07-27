import Image from 'next/image';
import leftArrow from '../ass/right-arrow-svgrepo-com.svg'
function Banner() {
    return (
        <div className='my-20 flex flex-col sm:gap-9 gap-5'>
            <p className='flex gap-3 text-[#3E3F9B]'>Techonology <Image src={leftArrow} className='w-5' alt="" /> UX Design</p>
            <h1 className='lg:text-6xl sm:text-5xl text-3xl font-bold'>Will Ai replace UX copywriting <br className='md:flex hidden' /> {"Here's"} what the data says.</h1>
            <p className='md:text-lg text-sm sm:pr-32'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, alias rem. Eveniet earum quas inventore, dicta delectus sint, debitis nihil non fugiat voluptas eum praesentium ipsa cumque consequuntur, eligendi ea? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, alias rem. Eveniet earum quas inventore, dicta delectus sint, debitis nihil non fugiat voluptas eum praesentium ipsa cumque consequuntur, eligendi ea? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, alias rem. Eveniet earum quas inventore, dicta delectus sint, debitis nihil non fugiat voluptas eum praesentium ipsa cumque consequuntur, eligendi ea?</p>
            <div className='flex gap-3 font-semibold'>
                <input className='border-2 border-[#98999B] py-2 px-2 rounded-lg' type="text" placeholder='Enter your email'/>
                <button className='bg-[#434CE7] text-white px-4 py-3 rounded-lg'>Subscribe</button>
            </div>
        </div>
    );
}

export default Banner;