import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Slider from '../Slider';

describe('Slider', () => {
  
test('renders slider with images ', () => {
  render(<Slider />);

  // Assuming there are three images in the slider
  const imageElements = screen.getAllByRole('img');
  expect(imageElements).toHaveLength(3);

  
});

test('renders slider with images and captions',  () => {
  render(<Slider />);

  const imageElements = screen.getAllByRole('img');
  const carouselIndicators = screen.getAllByRole('button', { name: /Slide/i });
  const nextButton = screen.getByRole('button', { name: /next/i });
  const prevButton = screen.getByRole('button', { name: /previous/i });

  expect(imageElements.length).toBe(3);
  expect(carouselIndicators.length).toBe(3);

 
});
test('renders slider with carousel', async () => {
  render(<Slider />);

  const imageElements = screen.getAllByRole('img');
  const nextButton = screen.getByRole('button', { name: /next/i });
  const prevButton = screen.getByRole('button', { name: /previous/i });

  // Wait for any animations or asynchronous operations to complete
  await waitFor(() => {
    // expect(imageElements[0]).toHaveClass('active');
    expect(imageElements[0]).toHaveClass('d-block w-100')

    // expect(imageElements[1]).not.toHaveClass('active');
    // expect(imageElements[2]).not.toHaveClass('active');
  }, { timeout: 3000 });
});




});

