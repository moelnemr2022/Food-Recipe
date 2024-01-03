import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FoodCard from '../FoodCard';




const mockItem = {
  idMeal: '1',
  strMeal: 'Mock Meal',
  strMealThumb: 'https://via.placeholder.com/400',
};

describe('FoodCard component', () => {
   
  test('renders FoodCard component with correct item data', () => {
    render(<FoodCard item={mockItem} />);
  
    const headingElement = screen.getByRole('heading');
    expect(headingElement).not.toEqual(null);
    expect(headingElement.textContent).toBe('Mock Meal');

    // Check if the image is rendered correctly
    const imgElement = screen.getByAltText('Mock Meal');
    expect(imgElement).not.toEqual(null);
    expect(imgElement).toHaveAttribute('src', 'https://via.placeholder.com/400');
  });
  });


  

