import * as React from 'react';
import { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface PaginationProps<T> {
  datas: T[];
  itemsPerPage: number;
  itemComponent: (data: T, index: number) => React.ReactNode;
  emptyMessage?: string;
  loading?: boolean;
  onAddItem?: () => void;
  sx?: SxProps;
}

const Pagination = <T,>({
  datas,
  itemsPerPage,
  itemComponent,
  emptyMessage = 'No items to display',
  loading = false,
  onAddItem,
  sx
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageCount = Math.ceil(datas.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = datas.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderItems = () => {
    if (loading) {
      return <CircularProgress />;
    }
    if (currentItems.length === 0) {
      return (
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {emptyMessage}
        </Typography>
      );
    }
    return currentItems.map((data, index) =>
      itemComponent(data, index + startIndex)
    );
  };

  const renderPaginationControls = () => {
    if (pageCount === 1) {
      return null;
    }
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
        className="pagination-btn"
      >
        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (page) => (
            <Box
              key={page}
              className={page === currentPage ? 'contained' : 'outlined'}
              onClick={() => handlePageChange(page)}
              sx={{ margin: 1, padding: 0 }}
            >
              <Typography>{page}</Typography>
            </Box>
          )
        )}
      </Box>
    );
  };

  return (
    <>
      {renderItems()}
      {renderPaginationControls()}
      {onAddItem && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button onClick={onAddItem} variant="contained">
            Add Item
          </Button>
        </Box>
      )}
    </>
  );
};

export default Pagination;
