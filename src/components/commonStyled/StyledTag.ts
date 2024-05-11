import styled from "styled-components";
import { StyledParagraph } from "../common/typography/StyledTypography";

export const StyledTag = styled(StyledParagraph)`
  padding: 2px 12px 2px 12px;
  margin: 5px;
  background-color: #76abae26;
  border-radius: 16px;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
