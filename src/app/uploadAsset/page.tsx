import HeroSection from "../components/HeroSection";
// import FileUploader from "../components/FileUploader";
import FileUploadCard from "../components/FileUploadCard";

export default function Page() {

    return (
        <div className="mt-20 font-bold flex flex-col items-center justify-center text-white gap-10">
            <HeroSection />
            <FileUploadCard/>
        </div>
  )
}
