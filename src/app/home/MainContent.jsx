import Image from "next/image";
import SideBare from "./SideBare";
import image from '../ass/banner2.jpg'
function MainContent() {
    return (
        <div className="flex justify-between lg:gap-32 gap-10 lg:flex-row flex-col">
            <div className="flex-1 flex flex-col gap-8 text-[#4A4E57]">
                <div className="flex gap-1">
                <p className="first-line:tracking-widest
  first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left">Tincidunt ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloribus culpa vero quibusdam suscipit repudiandae aut voluptas corporis et accusamus facilis sint sapiente beatae impedit expedita a voluptate dolorum fugiat.</p>
                </div>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam. Vel?</p>

                <Image className="my-2" src={image} alt="" />

                <h2 className="sm:text-3xl tetx-xl font-bold sm:leading-[3.5rem] leading-8 border-l-4 pl-4 border-black text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint provident perspiciatis deleniti beatae architecto earum soluta repudiandae aut maxime similique </h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam. Vel? explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas,</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam. Vel?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam. Vel?</p>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl text-black">Software and tools</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl text-black">Other resources</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam.</p>
                    <ol className="list-decimal ml-5">
                        <li>ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam</li>
                        <li>ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam</li>
                        <li>ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam</li>
                    </ol>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl text-black">Conclusion</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla et explicabo perspiciatis numquam maxime ipsa doloremque fugit ratione, omnis quas, maiores ipsam aliquam cupiditate necessitatibus veniam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic obcaecati nulla?</p>
                </div>
            </div>
            <div className="lg:w-96 w-full">
                <SideBare />
            </div>
        </div>
    );
}

export default MainContent;