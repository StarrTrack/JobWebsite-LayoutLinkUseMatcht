import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { VacancyCard } from '../VacancyCard';
import { Vacancy } from '../../types/vacancy';

const mockVacancy: Vacancy = {
  id: '1',
  name: 'Frontend Developer',
  salary: {
    from: 100000,
    to: 200000,
    currency: 'RUR',
    gross: false,
  },
  area: {
    id: '1',
    name: 'Москва',
  },
  employer: {
    id: '1',
    name: 'Test Company',
    url: 'https://test.com',
  },
  schedule: {
    id: 'remote',
    name: 'Удаленная работа',
  },
  experience: {
    id: 'between1And3',
    name: 'От 1 года до 3 лет',
  },
  alternate_url: 'https://hh.ru/vacancy/1',
};

describe('VacancyCard', () => {
  const renderComponent = () => {
    return render(
      <MantineProvider>
        <VacancyCard vacancy={mockVacancy} />
      </MantineProvider>
    );
  };

  it('renders vacancy information correctly', () => {
    renderComponent();

    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Москва')).toBeInTheDocument();
    expect(screen.getByText('От 1 года до 3 лет')).toBeInTheDocument();
  });

  it('formats salary correctly', () => {
    renderComponent();

    expect(screen.getByText(/100\s*000/)).toBeInTheDocument();
    expect(screen.getByText(/200\s*000/)).toBeInTheDocument();
  });

  it('displays schedule badge', () => {
    renderComponent();

    expect(screen.getByText('МОЖНО УДАЛЁННО')).toBeInTheDocument();
  });

  it('renders buttons', () => {
    renderComponent();

    expect(screen.getByText('Смотреть вакансию')).toBeInTheDocument();
    expect(screen.getByText('Откликнуться')).toBeInTheDocument();
  });
});