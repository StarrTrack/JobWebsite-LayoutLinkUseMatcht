import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header';

describe('Header', () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <MantineProvider>
          <Header />
        </MantineProvider>
      </BrowserRouter>
    );
  };

  it('renders header with navigation links', () => {
    renderComponent();

    expect(screen.getByText('hh')).toBeInTheDocument();
    expect(screen.getByText('.FrontEnd')).toBeInTheDocument();
    expect(screen.getByText('Вакансии FE')).toBeInTheDocument();
    expect(screen.getByText('Обо мне')).toBeInTheDocument();
  });

  it('renders navigation links with correct hrefs', () => {
    renderComponent();

    const vacanciesLink = screen.getByText('Вакансии FE').closest('a');
    const aboutLink = screen.getByText('Обо мне').closest('a');

    expect(vacanciesLink).toHaveAttribute('href', '/vacancies');
    expect(aboutLink).toHaveAttribute('href', '/about');
  });
});
