import { FiUpload } from "react-icons/fi";
import Link from "next/link";

const UploadLink: React.FC = () => {

    return (
        <Link href="/uploadAsset" className="bg text-white px-4 py-2 border border-gray-200  rounded-xl cursor-pointer">
            <FiUpload className="display:inline"/> 
        </Link>
    );
}
 
export default UploadLink;