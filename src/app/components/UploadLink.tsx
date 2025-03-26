import { FiUpload } from 'react-icons/fi';
import Link from 'next/link';

const UploadLink: React.FC = () => {
  return (
    <Link
      href="/uploadAsset"
      className="bg cursor-pointer rounded-xl border border-gray-200 px-4 py-2 text-white"
    >
      <FiUpload className="display:inline" />
    </Link>
  );
};

export default UploadLink;
