import { render, screen, waitFor } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders Footer component', () => {
   render (
   <MemoryRouter initialEntries={['/Food-Recipe']}>
    <Footer />
    </MemoryRouter >);


    // Check if social media icons are present
    const facebookIcon = screen.getByTestId('FaceBook');
    const instagramIcon = screen.getByTestId('instagram');
    const twitterIcon = screen.getByTestId('twitter');

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();

    // Check if "AboutUs" link is present
    const aboutUsLink = screen.getByRole('link', { name: /AboutUs/i });
    expect(aboutUsLink).toBeInTheDocument();

    // Check if "© 2024 Food Recipe" text is present
    const copyrightText = screen.getByText(/© 2024 Food Recipe/i);
    expect(copyrightText).toBeInTheDocument();
  });
});