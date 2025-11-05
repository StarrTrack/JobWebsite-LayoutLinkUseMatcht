import { describe, it, expect } from 'vitest';
import vacanciesReducer, {
  setTextFilter,
  setAreaFilter,
  addSkill,
  removeSkill,
  setPage,
  fetchVacancies,
} from '../vacanciesSlice';

describe('vacanciesSlice', () => {
  const initialState = {
    data: null,
    filters: {
      text: '',
      area: '',
      skillSet: ['JavaScript', 'React', 'Redux', 'ReduxToolkit', 'Nextjs'],
      page: 0,
    },
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(vacanciesReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  it('should handle setTextFilter', () => {
    const actual = vacanciesReducer(initialState, setTextFilter('Frontend'));
    expect(actual.filters.text).toEqual('Frontend');
  });

  it('should handle setAreaFilter', () => {
    const actual = vacanciesReducer(initialState, setAreaFilter('1'));
    expect(actual.filters.area).toEqual('1');
  });

  it('should handle addSkill', () => {
    const actual = vacanciesReducer(initialState, addSkill('TypeScript'));
    expect(actual.filters.skillSet).toContain('TypeScript');
    expect(actual.filters.skillSet.length).toBe(6);
  });

  it('should not add duplicate skill', () => {
    const actual = vacanciesReducer(initialState, addSkill('React'));
    expect(actual.filters.skillSet.length).toBe(5);
  });

  it('should handle removeSkill', () => {
    const actual = vacanciesReducer(initialState, removeSkill('React'));
    expect(actual.filters.skillSet).not.toContain('React');
    expect(actual.filters.skillSet.length).toBe(4);
  });

  it('should handle setPage', () => {
    const actual = vacanciesReducer(initialState, setPage(5));
    expect(actual.filters.page).toEqual(5);
  });

  it('should handle fetchVacancies.pending', () => {
    const action = { type: fetchVacancies.pending.type };
    const state = vacanciesReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it('should handle fetchVacancies.fulfilled', () => {
    const mockData = { items: [], found: 0, pages: 0, page: 0, per_page: 0 };
    const action = { type: fetchVacancies.fulfilled.type, payload: mockData };
    const state = vacanciesReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(mockData);
  });

  it('should handle fetchVacancies.rejected', () => {
    const action = {
      type: fetchVacancies.rejected.type,
      error: { message: 'Error message' },
    };
    const state = vacanciesReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error message');
  });
});
