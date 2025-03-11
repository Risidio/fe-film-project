import ChatBar from "../components/ChatBar";
import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import UploadLink from "../components/UploadLink";

export default function Page() {
    return (
        <div className="mt-20 font-bold flex flex-col items-center justify-center text-white">
            <HeroSection />
            <div className="flex  justify-center mt-4 items-stretch ">
                <SearchBar />
                <UploadLink/>
            </div>
            <div className=" flex justify-center items-center bg-[#0D1B2A]/800 fixed bottom-0 left-0 w-full h-16">
                <ChatBar />
            </div>
        </div>
    )
}