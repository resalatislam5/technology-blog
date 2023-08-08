import Image from 'next/image';
import BannerImg from '../ass/banner.png'
import avoter from '../ass/download.png'
function BannerImage() {
    return (
        <div className='sm:my-20 my-10 flex flex-col gap-5 sm:gap-0'>
            <div>
                <Image className='rounded-s-3xl md:p-10' src={BannerImg} alt="" />
            </div>
            <div className='flex justify-between  flex-col sm:flex-row gap-5 sm:gap-0'>
                <div className="flex items-center gap-3">
                    <Image src={avoter} className='w-16' alt="" />
                    <div className="">
                    <h6 className='font-semibold'>Emily Donnavan</h6>
                    <p>12 June 2023</p>
                    </div>
                </div>
                <div className="flex sm:gap-5 gap-2 justify-between">
                  {
                    [...Array(3)].map( (number, i) =><div key={i}>
                      <button className="sm:px-3 px-2 py-1 rounded-full">#Design</button>
                    </div>
                  )
                  }
                </div>
            </div>
        </div>
    );
}

export default BannerImage;