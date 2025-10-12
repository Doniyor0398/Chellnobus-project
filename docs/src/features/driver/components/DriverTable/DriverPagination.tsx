import { Box, Pagination } from '@mui/material';

interface Props {
  dataLength: number;
  itemsPerPage: number;
  page: number;
  setPage: (page: number) => void;
}

const DriverPagination: React.FC<Props> = ({
  dataLength,
  itemsPerPage,
  page,
  setPage,
}) => (
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2, pb: 1 }}>
    <Pagination
      count={Math.ceil(dataLength / itemsPerPage)}
      page={page}
      onChange={(_, newPage) => setPage(newPage)}
      color="primary"
    />
  </Box>
);

export default DriverPagination;
