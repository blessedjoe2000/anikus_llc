import { Box, styled } from "@mui/system";

export const AddressContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: 5rem 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (min-width: 640px) {
    flex-direction: row;
    margin: 0;
  }
`;
