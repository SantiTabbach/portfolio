import DownloadFileIcon from "../../assets/icons/DownloadFileIcon";
import { StyledTitleLink, StyledButton } from "./StyledDownloadButton";
import resumePDF from "../../resources/resume.pdf";

const DownloadButton = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledButton onClick={downloadPDF}>
      <StyledTitleLink>Resume</StyledTitleLink>
      <DownloadFileIcon size={20} />
    </StyledButton>
  );
};

export default DownloadButton;
