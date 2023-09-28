import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../Header';

describe('Header component', () => {

  it('should display the Header component with some text', () => {
    // Arrange & Act
    render(<Header text="hello"></ Header>);

    // Assert
    expect(screen.getByText('hello')).toBeInTheDocument();
    expect(screen.getByRole('heading', {
      level: 1
    })).toBeInTheDocument();
  });
});
