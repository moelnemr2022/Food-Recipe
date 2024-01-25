import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import Category from '../Category';
import { MemoryRouter } from 'react-router-dom';

describe('Category', () => {
  test('renders a header on the page', () => {
    let searchCat = vi.fn();

    render(
      <MemoryRouter initialEntries={['/Food-Recipe']}>
        <Category  />
      </MemoryRouter>,
    );

    let headerText = screen.getByRole('heading', { name: /Category/i });
    expect(headerText).toBeInTheDocument();
  });

  test('renders Category component', () => {
    render(
      <MemoryRouter initialEntries={['/Food-Recipe']}>
        <Category />
      </MemoryRouter>
    );
  
    // Ensure that the component title is rendered
    const titleElement = screen.getByText(/Category/i);
    expect(titleElement).toBeInTheDocument();
  
    // Ensure that the "Home" link is rendered and behaves as expected
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    userEvent.click(homeLink);


  });
  
  



})


  