import { useEffect } from 'react';
import {
  Container,
  Title,
  Stack,
  Loader,
  Center,
  Text,
  Pagination,
  Grid,
  Group,
  Button,
  TextInput,
  Divider,
} from '@mantine/core';
import { Search } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  fetchVacancies,
  setPage,
  setTextFilter,
} from '../store/vacanciesSlice';
import { VacancyCard } from './VacancyCard';
import { VacancyFilters } from './VacancyFilters';

export function VacancyList() {
  const dispatch = useAppDispatch();
  const { data, filters, loading, error } = useAppSelector(
    (state) => state.vacancies
  );

  useEffect(() => {
    dispatch(fetchVacancies(filters));
  }, [dispatch, filters.area, filters.page]);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page - 1));
  };

  const handleSearch = () => {
    dispatch(fetchVacancies({ ...filters, page: 0 }));
  };

  return (
    <div style={{ backgroundColor: '#F7F8FA', minHeight: 'calc(100vh - 68px)' }}>
      <Container size="xl" py={40}>
        <Group justify="space-between" align="flex-end" mb={32}>
          <div>
            <Title order={1} size={28} fw={700} c="#232134" mb={8}>
              Список вакансий
            </Title>
            <Text size="md" c="#ACADB9">
              по профессии Frontend-разработчик
            </Text>
          </div>

          <Group gap={8} style={{ width: 'auto' }}>
            <TextInput
              placeholder="Должность или название компании"
              leftSection={<Search size={16} color="#ACADB9" />}
              value={filters.text}
              onChange={(e) => dispatch(setTextFilter(e.target.value))}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              styles={{
                root: { width: 400 },
                input: {
                  border: '1px solid #EAEBED',
                  borderRadius: '8px',
                  height: '42px',
                  backgroundColor: '#FFFFFF',
                },
              }}
            />
            <Button
              onClick={handleSearch}
              style={{
                backgroundColor: '#5E96FC',
                borderRadius: '8px',
                height: '42px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              Найти
            </Button>
          </Group>
        </Group>

        <Divider my="md" />

        <Grid gutter={28}>
          <Grid.Col span={3}>
            <VacancyFilters />
          </Grid.Col>
          <Grid.Col span={9}>
            {loading ? (
              <Center h={400}>
                <Loader color="blue" size="lg" />
              </Center>
            ) : error ? (
              <Center h={400}>
                <Text c="red">{error}</Text>
              </Center>
            ) : (
              <>
                <Stack gap={16}>
                  {data?.items.map((vacancy) => (
                    <VacancyCard key={vacancy.id} vacancy={vacancy} />
                  ))}
                </Stack>

                {data && data.pages > 1 && (
                  <Center mt={40}>
                    <Pagination
                      total={data.pages}
                      value={filters.page + 1}
                      onChange={handlePageChange}
                      color="blue"
                    />
                  </Center>
                )}
              </>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}