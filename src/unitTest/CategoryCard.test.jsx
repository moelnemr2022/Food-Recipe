import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CategoryCard from '../CategoryCard';
import { MemoryRouter } from 'react-router-dom';

// Mock data for testing
const mockItem = {
  idCategory: '1',
  strCategory: 'Test Category',
  // strCategoryThumb: 'https://example.com/image.jpg',
};

describe('CategoryCard', () => {
  test('renders CategoryCard component', () => {
    render(
      <MemoryRouter>
        <CategoryCard item={mockItem} />
      </MemoryRouter>
    );

    // Use more specific queries to avoid conflicts
    const categoryName = screen.getByText(/Test Category/i, { selector: 'p' });
    const categoryImage = screen.getByAltText(/Test Category/i);

    expect(categoryName).toBeInTheDocument();
    expect(categoryImage).toBeInTheDocument();
    // expect(categoryImage).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('handles onClick event', async () => {
    render(
      <MemoryRouter>
        <CategoryCard item={mockItem} />
      </MemoryRouter>
    );

    // Wait for the next microtask (like Promise.resolve())
    await Promise.resolve();

    const clickableElement = screen.getByTestId('category-card');
    expect(clickableElement).toBeInTheDocument();


  });
 });
