import Image from 'next/image';
import image_1 from '../ass/banner2.jpg'
import rightTopArrow from '../ass/arrow-up-right-svgrepo-com.svg'
import rightTopArrowColor from '../ass/arrow-right-top-svgrepo-com.svg'
import Link from 'next/link';
function SideBare() {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Popuar post</h1>
            <div className="flex gap-10 py-10 justify-center items-center flex-wrap">
                  {
                    [...Array(3)].map( (number, i) =><div className='flex flex-col gap-3 lg:w-96 ' key={i}>
                      <Image className='rounded-lg' src={image_1} alt="" />
                      <div className="flex justify-between">
                        <h1 className="lg:text-lg sm:text-2xl font-bold ">UX review persentations</h1>
                        <Image src={rightTopArrow} className='w-5 lg:w-8 sm:w-10' alt="" />
                      </div>
                      <p className='text-[#7B7F82]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quis?</p>
                    </div>)
                    }
            </div>
            <Link className='text-[#3B3F7E] flex gap-2' href="https://catalysers-blog-git-main-resalatislam5.vercel.app/">See all blog post <Image src={rightTopArrowColor} className='w-5' alt="" /></Link>
        </div>
    );
}

export default SideBare;