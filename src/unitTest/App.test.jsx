import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import App from '../App'

describe('App', () => {
  test('renders a header on the page', () => {
    
    render(<App />)
    let headerText = screen.getByRole('heading', {name: /Food Recipe/i }) 
    expect(headerText).toBeInTheDocument()
  })

test('empty input', () => {
  render(<App/>)
let emptyInput = screen.getByRole('textbox')
expect (emptyInput).toHaveValue('')

});

test('renders the input on the screen', () => {
    render(<App />);
    let input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();
  });




 
})