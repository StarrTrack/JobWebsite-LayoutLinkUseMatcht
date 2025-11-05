import { Container, Group, Text, Box } from '@mantine/core';
import { UserCircle, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();

  const linkStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: isActive ? '#5E96FC' : '#ACADB9',
    fontWeight: isActive ? 600 : 400,
    backgroundColor: isActive ? '#F0F5FF' : 'transparent',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#F5F5F5',
      color: isActive ? '#5E96FC' : '#7B7C88',
    },
  });

  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E8E8E8',
        padding: '16px 0',
      }}
    >
      <Container size="xl">
        <Group justify="space-between">
          <Group gap="xs">
            <Box
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#EA3A4D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              hh
            </Box>
            <Text size="lg" fw={600} c="#232134">
              .FrontEnd
            </Text>
          </Group>
          <Group gap="xs">
            <Link
              to="/vacancies"
              style={linkStyle(location.pathname === '/vacancies')}
            >
              <Briefcase size={16} />
              <Text size="sm">Вакансии FE</Text>
            </Link>
            <Link to="/about" style={linkStyle(location.pathname === '/about')}>
              <UserCircle size={16} />
              <Text size="sm">Обо мне</Text>
            </Link>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
