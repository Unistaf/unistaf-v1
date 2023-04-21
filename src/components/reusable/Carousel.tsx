import * as React from 'react';
import { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { SxProps } from '@mui/system';

interface CarouselProps<T> {
  datas: T[];
  itemsPerSlide?: number;
  slideComponent: (data: T[]) => React.ReactNode;
  emptyMessage?: string;
  loading?: boolean;
  onAddItem?: () => void;
  sx?: SxProps;
}

const Carousel = <T,>({
  datas,
  itemsPerSlide = 4,
  slideComponent,
  emptyMessage = "Pas d'élement, voulez vous en ajouter ?",
  loading = false,
  onAddItem,
  sx
}: CarouselProps<T>) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slideCount = Math.ceil(datas.length / itemsPerSlide);
  const startIndex = currentSlide * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;
  const currentSlideData = datas.slice(startIndex, endIndex);

  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide);
  };

  const renderSlides = () => {
    if (loading) {
      return <CircularProgress />;
    }
    if (currentSlideData.length === 0) {
      return (
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {emptyMessage}
        </Typography>
      );
    }
    return slideComponent(currentSlideData);
  };

  const renderCarouselControls = () => {
    if (slideCount === 1) {
      return null;
    }
    return (
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
        className="pagination-btn"
      >
        {Array.from({ length: slideCount }, (_, index) => index).map(
          (slide) => (
            <Box
              key={slide}
              className={slide === currentSlide ? 'contained' : 'outlined'}
              onClick={() => handleSlideChange(slide)}
              sx={{ margin: 1, padding: 0 }}
            >
              <Typography>{slide + 1}</Typography>
            </Box>
          )
        )}
      </Box>
    );
  };

  return (
    <>
      {renderSlides()}
      {renderCarouselControls()}
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

export default Carousel;
