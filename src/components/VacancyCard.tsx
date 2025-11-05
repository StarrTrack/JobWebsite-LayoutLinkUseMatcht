import { Box, Text, Group, Badge, Button, Stack } from '@mantine/core';
import { MapPin } from 'lucide-react';
import { Vacancy } from '../types/vacancy';

interface VacancyCardProps {
  vacancy: Vacancy;
}

export function VacancyCard({ vacancy }: VacancyCardProps) {
  const formatSalary = () => {
    if (!vacancy.salary) return 'Зарплата не указана';

    const { from, to, currency } = vacancy.salary;
    const currencySymbol = currency === 'RUR' ? '₽' : currency;

    if (from && to) {
      return `${from.toLocaleString('ru-RU')} – ${to.toLocaleString(
        'ru-RU'
      )} ${currencySymbol}`;
    } else if (from) {
      return `от ${from.toLocaleString('ru-RU')} ${currencySymbol}`;
    } else if (to) {
      return `до ${to.toLocaleString('ru-RU')} ${currencySymbol}`;
    }

    return 'Зарплата не указана';
  };

  const getScheduleBadge = () => {
    const scheduleId = vacancy.schedule.id;
    if (scheduleId === 'remote') return 'МОЖНО УДАЛЁННО';
    if (scheduleId === 'fullDay') return 'ОФИС';
    if (scheduleId === 'flexible') return 'ГИБРИД';
    return vacancy.schedule.name.toUpperCase();
  };

  return (
    <Box
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EAEBED',
        borderRadius: '12px',
        padding: '24px',
      }}
    >
      <Stack gap={16}>
        <div>
          <Text
            size="lg"
            fw={600}
            c="#5E96FC"
            style={{ cursor: 'pointer', fontSize: '20px', lineHeight: '24px' }}
          >
            {vacancy.name}
          </Text>
        </div>

        <Group gap={12} align="center">
          <Text size="md" fw={600} c="#232134" style={{ fontSize: '16px' }}>
            {formatSalary()}
          </Text>
          <Text size="sm" c="#ACADB9" style={{ fontSize: '16px' }}>
            {vacancy.experience.name}
          </Text>
        </Group>

        <div>
          <Text
            size="md"
            fw={600}
            c="#232134"
            mb={8}
            style={{ fontSize: '16px' }}
          >
            {vacancy.employer.name}
          </Text>
          <Badge
            variant="filled"
            styles={{
              root: {
                backgroundColor: '#5E96FC',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                fontSize: '12px',
                fontWeight: 500,
                padding: '4px 8px',
                height: 'auto',
              },
            }}
          >
            {getScheduleBadge()}
          </Badge>
        </div>

        <Text
          size="md"
          c="#5E5E5E"
          style={{ fontSize: '16px', lineHeight: '20px' }}
        >
          {vacancy.area.name}
        </Text>

        <Group gap={8} mt={8}>
          <Button
            variant="filled"
            styles={{
              root: {
                backgroundColor: '#232134',
                color: '#FFFFFF',
                borderRadius: '8px',
                height: '40px',
                fontSize: '14px',
                fontWeight: 500,
                flex: 1,
                '&:hover': {
                  backgroundColor: '#1a1825',
                },
              },
            }}
          >
            Смотреть вакансию
          </Button>
          <Button
            variant="outline"
            component="a"
            href={vacancy.alternate_url}
            target="_blank"
            rel="noopener noreferrer"
            styles={{
              root: {
                borderColor: '#EAEBED',
                color: '#232134',
                borderRadius: '8px',
                height: '40px',
                fontSize: '14px',
                fontWeight: 500,
                flex: 1,
                '&:hover': {
                  backgroundColor: '#f8f8f8',
                },
              },
            }}
          >
            Откликнуться
          </Button>
        </Group>
      </Stack>
    </Box>
  );
}
