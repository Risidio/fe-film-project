import HeroSection from "../components/HeroSection";
import FileUploader from "../components/FileUploader";

export default function Page() {

    return (
        <div className="mt-20 font-bold flex flex-col items-center justify-center text-white">
            <HeroSection />
            <FileUploader/>
        </div>
  )
}
