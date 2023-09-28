import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { TextButton } from '../TextButton';

describe('Button component', () => {
  it('should display a text button component', () => {
    // Arrange
    render(
      <TextButton onClick={() => null} text="Text button"/>
    );
    // Assert
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(screen.getByText('Text button')).toBeInTheDocument();
  });

  it('clicking on the button should call an onClick', () => {
    const jestOnclick = jest.fn();
    // Arrange
    render(
      <TextButton onClick={jestOnclick} text="Text button"/>
    );
    // Act
    fireEvent.click(screen.getByText(/Text button/i));
    // Assert
    expect(jestOnclick).toHaveBeenCalled();
  });
});

