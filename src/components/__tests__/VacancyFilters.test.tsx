import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { configureStore } from '@reduxjs/toolkit';
import { VacancyFilters } from '../VacancyFilters';
import vacanciesReducer from '../../store/vacanciesSlice';

// Mock fetch function
global.fetch = vi.fn();

const createMockStore = () => {
  return configureStore({
    reducer: {
      vacancies: vacanciesReducer,
    },
  });
};

describe('VacancyFilters', () => {
  const renderWithProviders = () => {
    const store = createMockStore();
    return render(
      <Provider store={store}>
        <MantineProvider>
          <VacancyFilters />
        </MantineProvider>
      </Provider>
    );
  };

  it('renders skills section', () => {
    renderWithProviders();

    expect(screen.getByText('Ключевые навыки')).toBeInTheDocument();
  });

  it('renders default skills', () => {
    renderWithProviders();

    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Redux')).toBeInTheDocument();
    expect(screen.getByText('ReduxToolkit')).toBeInTheDocument();
    expect(screen.getByText('Nextjs')).toBeInTheDocument();
  });

  it('allows adding new skill', () => {
    renderWithProviders();

    const input = screen.getByPlaceholderText('Добавить навык');
    fireEvent.change(input, { target: { value: 'TypeScript' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(input).toHaveValue('');
  });

  it('renders city select', () => {
    renderWithProviders();

    expect(screen.getByPlaceholderText('Все города')).toBeInTheDocument();
  });
});