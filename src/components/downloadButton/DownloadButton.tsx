import DownloadFileIcon from "../../assets/icons/DownloadFileIcon";
import { StyledTitleLink, StyledButton } from "./StyledDownloadButton";
import resumePDF from "../../resources/resume.pdf";
import { useCallback } from "react";

const DownloadButton = () => {
  const downloadPdf = useCallback(() => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Santi Tabbach.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <StyledButton onClick={downloadPdf}>
      <StyledTitleLink>Resume</StyledTitleLink>
      <DownloadFileIcon size={20} />
    </StyledButton>
  );
};

export default DownloadButton;
