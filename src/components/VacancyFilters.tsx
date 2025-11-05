import { useState, KeyboardEvent } from 'react';
import {
  Box,
  Stack,
  Text,
  TextInput,
  Select,
  Pill,
  Group,
  CloseButton,
} from '@mantine/core';
import { MapPin, Plus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  setAreaFilter,
  addSkill,
  removeSkill,
  fetchVacancies,
} from '../store/vacanciesSlice';

export function VacancyFilters() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.vacancies.filters);
  const [skillInput, setSkillInput] = useState('');

  const handleAreaChange = (value: string | null) => {
    dispatch(setAreaFilter(value || ''));
    dispatch(fetchVacancies({ ...filters, area: value || '', page: 0 }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      dispatch(addSkill(skillInput));
      setSkillInput('');
      dispatch(
        fetchVacancies({
          ...filters,
          skillSet: [...filters.skillSet, skillInput.trim()],
          page: 0,
        })
      );
    }
  };

  const handleRemoveSkill = (skill: string) => {
    dispatch(removeSkill(skill));
    const newSkillSet = filters.skillSet.filter((s) => s !== skill);
    dispatch(fetchVacancies({ ...filters, skillSet: newSkillSet, page: 0 }));
  };

  const handleSkillInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <Stack gap={20}>
      <Box
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAEBED',
          borderRadius: '12px',
          padding: '20px',
        }}
      >
        <Text size="sm" fw={700} c="#232134" mb={20}>
          Ключевые навыки
        </Text>

        <Stack gap={8}>
          <Group gap={8}>
            <TextInput
              placeholder="Добавить навык"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillInputKeyDown}
              styles={{
                root: { flex: 1 },
                input: {
                  border: '1px solid #EAEBED',
                  borderRadius: '8px',
                  height: '32px',
                  fontSize: '14px',
                },
              }}
            />
            <Box
              onClick={handleAddSkill}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: '#5E96FC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <Plus size={16} color="white" />
            </Box>
          </Group>

          <Group gap={8} style={{ marginTop: '10px' }}>
            {filters.skillSet.map((skill) => (
              <Pill key={skill}>
                {skill}
                <CloseButton
                  size="xs"
                  onClick={() => handleRemoveSkill(skill)}
                  style={{ color: '#ACADB9' }}
                />
              </Pill>
            ))}
          </Group>
        </Stack>
      </Box>

      <Box
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAEBED',
          borderRadius: '12px',
          padding: '20px',
        }}
      >
        <Select
          leftSection={<MapPin size={16} color="#ACADB9" />}
          placeholder="Все города"
          data={[
            { value: '', label: 'Все города' },
            { value: '1', label: 'Москва' },
            { value: '2', label: 'Санкт-Петербург' },
          ]}
          value={filters.area}
          onChange={handleAreaChange}
          styles={{
            input: {
              border: '1px solid #EAEBED',
              borderRadius: '8px',
              height: '42px',
              color: '#ACADB9',
            },
          }}
        />
      </Box>
    </Stack>
  );
}
