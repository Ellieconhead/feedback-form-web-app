import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { FeedbackForm } from '../FeedbackForm';

describe('FeedbackForm', () => {
  it('should render the feedback form with the correct fields', () => {
    // Arrange and Act
    render(<FeedbackForm />);

    // Assert
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Feedback Form')).toBeInTheDocument();

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();

    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();

    expect(screen.getByTestId('rating')).toBeInTheDocument();
    expect(screen.getByText('Rating (1-5)')).toBeInTheDocument();

    expect(screen.getByTestId('comment')).toBeInTheDocument();
    expect(screen.getByText('Comment')).toBeInTheDocument();
  });

  it('should display a submit button', () => {
    // Arrange & Act
    render(<FeedbackForm />);

    // Assert
    expect(screen.getAllByRole('button').length).toBe(1);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeEnabled();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});

describe('Validation', () => {
  it('should display a required message if name field is left empty', async () => {
    // Arrange
    render(<FeedbackForm />);

    // Act
    expect(screen.getByTestId('name')).toHaveTextContent('');

    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert
    expect(screen.getAllByText('Required')[0]).toBeInTheDocument();
  });

  it('should display an error message if name field is inputted incorrectly', async () => {
    // Arrange
    render(<FeedbackForm />);
    fireEvent.change(screen.getByTestId('name'), {
      target: {
        value: '33'
      }
    });

    // Act
    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    // Assert
    expect(screen.getByText('Your name can only be composed of letters')).toBeInTheDocument();
  });

  it('should display a required message if email field is left empty', async () => {
    // Arrange
    render(<FeedbackForm />);

    // Act
    expect(screen.getByTestId('email')).toHaveTextContent('');

    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert
    expect(screen.getAllByText('Required')[0]).toBeInTheDocument();
  });

  it('should display an error message if email field is inputted incorrectly', async () => {
    // Arrange
    render(<FeedbackForm />);
    fireEvent.change(screen.getByTestId('email'), {
      target: {
        value: 'ghfkeb'
      }
    });

    // Act
    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    // Assert
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  it('should display a required message if rating field is left empty', async () => {
    // Arrange
    render(<FeedbackForm />);

    // Act
    expect(screen.getByTestId('rating')).toHaveTextContent('');

    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert
    expect(screen.getAllByText('Required')[0]).toBeInTheDocument();
  });

  it('should display an error message if rating field is inputted incorrectly', async () => {
    // Arrange
    render(<FeedbackForm />);
    fireEvent.change(screen.getByTestId('rating'), {
      target: {
        value: '6'
      }
    });

    // Act
    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    // Assert
    expect(screen.getByText('Please enter a rating between 1 and 5')).toBeInTheDocument();
  });

  it('should display a required message if comment field is left empty', async () => {
    // Arrange
    render(<FeedbackForm />);

    // Act
    expect(screen.getByTestId('comment')).toHaveTextContent('');

    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // Assert
    expect(screen.getAllByText('Required')[0]).toBeInTheDocument();
  });

  it('should display an error message if comment field is inputted incorrectly', async () => {
    // Arrange
    render(<FeedbackForm />);
    fireEvent.change(screen.getByTestId('comment'), {
      target: {
        value: '6749'
      }
    });

    // Act
    const submitButton = screen.getByRole('button');
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    // Assert
    expect(screen.getByText('Please enter a valid comment')).toBeInTheDocument();
  });
});
