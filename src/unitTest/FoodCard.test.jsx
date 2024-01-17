import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import FoodCard from '../FoodCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('FoodCard', () => {
  test('renders FoodCard component', () => {
    // Mock data for testing
    const mockItem = {
      idMeal: '123',
      strMeal: 'Test Meal',
      // strMealThumb: 'https://example.com/test-image.jpg',
    };

    render(
      <Router>
        <FoodCard item={mockItem} />
      </Router>
    );

    // Check if elements are present in the rendered component
    const linkElement = screen.getByRole('link', { name: /Test Meal/i });
    const imageElement = screen.getByAltText('Test Meal');

    // Perform assertions
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/Food-Recipe/MealRecipe/123');
    expect(imageElement).toBeInTheDocument();
    // expect(imageElement).toHaveAttribute('src', 'https://example.com/test-image.jpg');
  });
});
