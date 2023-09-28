import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormLabel } from '../FormLabel';

describe('FormLabel component', () => {
  it('should display a FormLabel component with some text', () => {
    // Arrange
    render(<FormLabel text='some text' inputName={''} />);

    // Assert
    expect(screen.getByText('some text')).toBeInTheDocument();
  });
});
