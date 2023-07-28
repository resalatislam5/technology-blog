import Banner from "./home/Banner";
import BannerImage from "./home/BannerImage";
import MainContent from "./home/MainContent";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5">
        <Banner />
        <BannerImage />
        <MainContent />
    </div>
  )
}
