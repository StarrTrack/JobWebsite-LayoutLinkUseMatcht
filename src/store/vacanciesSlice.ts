import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { VacanciesResponse, VacancyFilters } from '../types/vacancy';

interface VacanciesState {
  data: VacanciesResponse | null;
  filters: VacancyFilters;
  loading: boolean;
  error: string | null;
}

const initialState: VacanciesState = {
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

export const fetchVacancies = createAsyncThunk(
  'vacancies/fetchVacancies',
  async (filters: VacancyFilters) => {
    const params = new URLSearchParams({
      industry: '7',
      professional_role: '96',
      per_page: '10',
      page: filters.page.toString(),
    });

    if (filters.text) {
      params.append('text', filters.text);
      params.append('search_field', 'name');
    }

    if (filters.area) {
      params.append('area', filters.area);
    }

    if (filters.skillSet.length > 0) {
      filters.skillSet.forEach((skill) => {
        params.append('skill_set', skill);
      });
    }

    const response = await fetch(
      `https://api.hh.ru/vacancies?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch vacancies');
    }

    const data: VacanciesResponse = await response.json();
    return data;
  }
);

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setTextFilter: (state, action: PayloadAction<string>) => {
      state.filters.text = action.payload;
    },
    setAreaFilter: (state, action: PayloadAction<string>) => {
      state.filters.area = action.payload;
    },
    addSkill: (state, action: PayloadAction<string>) => {
      if (
        !state.filters.skillSet.includes(action.payload) &&
        action.payload.trim()
      ) {
        state.filters.skillSet.push(action.payload.trim());
      }
    },
    removeSkill: (state, action: PayloadAction<string>) => {
      state.filters.skillSet = state.filters.skillSet.filter(
        (skill) => skill !== action.payload
      );
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchVacancies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch vacancies';
      });
  },
});

export const { setTextFilter, setAreaFilter, addSkill, removeSkill, setPage } =
  vacanciesSlice.actions;
export default vacanciesSlice.reducer;
