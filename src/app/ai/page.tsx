import ChatBar from "../components/ChatBar";
import SearchBar from "../components/SearchBar";

export default function Page() {
    return (
        <div className="mt-20 font-bold flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl">
                Film Fusion Draft AI
            </h1>
            <div className="mt-2 w-80 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
            <p className="text-base mt-5">
                secure your intellectual property with AI analysis and blockchain registration
            </p>
            <SearchBar />
            <footer className=" flex justify-center bg-[#0D1B2A]/800 fixed bottom-0 left-0 w-full h-16">
                <ChatBar />
            </footer>


            

        </div>
    )
}