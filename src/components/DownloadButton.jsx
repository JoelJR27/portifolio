import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
function DownloadButton({ url, buttonText, archiveName }) {
  return (
    <a
      href={url}
      download={archiveName}
      className="px-4 py-2 rounded-lg bg-medium-blue text-white mx-2 flex justify-center items-center gap-3 text-sm"
    >
      {buttonText} <FontAwesomeIcon icon={faDownload} />
    </a>
  );
}

export default DownloadButton;
