import {
  Container,
  Title,
  Text,
  Stack,
  Box,
  Group,
  Badge,
  Divider,
} from '@mantine/core';
import { MapPin, Mail, Phone, ExternalLink, Github, Code } from 'lucide-react';

export function About() {
  return (
    <Container size="xl" py={40}>
      <Stack gap={32}>
        {/* Заголовок */}
        <Box>
          <Title order={1} size={28} fw={700} c="#232134" mb={8}>
            Обо мне
          </Title>
          <Text size="md" c="#ACADB9">
            Frontend Developer · Product Owner
          </Text>
        </Box>

        {/* Основная информация */}
        <Box
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAEBED',
            borderRadius: '12px',
            padding: '24px',
          }}
        >
          <Stack gap={24}>
            {/* Контакты */}
            <Group gap="xl" wrap="wrap">
              <Group gap={8}>
                <Phone size={16} color="#5E96FC" />
                <Text size="sm">+7 (967) 127-56-06</Text>
              </Group>
              <Group gap={8}>
                <Mail size={16} color="#5E96FC" />
                <Text size="sm">petr.start@gmail.com</Text>
              </Group>
              {/* <Group gap={8}>
                <MapPin size={16} color="#5E96FC" />
                <Text size="sm">Москва</Text>
              </Group> */}
            </Group>

            <Divider />

            {/* О себе */}
            <Stack gap={16}>
              <Title order={2} size={20} fw={600}>
                О себе
              </Title>
              <Text size="sm" c="#232134" style={{ lineHeight: 1.6 }}>
                Frontend Developer с бэкграундом Product Management. Более 5 лет
                опыта в IT — запускал и развивал digital-продукты с нуля,
                формировал команды, принимал технические решения, защищал
                решения на уровне руководства. Непрерывно развивал экспертизу во
                фронтенде с разработчиками в продуктовой команде: участвовал в
                обсуждении архитектуры, код-ревью и проработке UX/UI. С апреля
                2025 года целенаправленно развиваюсь как Frontend-разработчик
                (React, TypeScript, JavaScript ES6+, Vite, Webpack), создавая
                проекты и изучая современные инструменты и архитектурные
                подходы.
              </Text>
            </Stack>

            <Divider />

            {/* Навыки */}
            <Stack gap={16}>
              <Title order={2} size={20} fw={600}>
                Навыки
              </Title>
              <Stack gap={12}>
                <div>
                  <Text fw={600} mb={8}>
                    Frontend
                  </Text>
                  <Group gap={8} wrap="wrap">
                    {[
                      'HTML5',
                      'CSS3',
                      'SCSS',
                      'JavaScript (ES6+)',
                      'React',
                      'TypeScript',
                    ].map((skill) => (
                      <Badge key={skill} variant="light" color="blue" size="md">
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </div>
                <div>
                  <Text fw={600} mb={8}>
                    Инструменты
                  </Text>
                  <Group gap={8} wrap="wrap">
                    {[
                      'Git',
                      'Webpack',
                      'Vite',
                      'StackBlitz',
                      'Figma',
                      'Vitest',
                    ].map((skill) => (
                      <Badge key={skill} variant="light" color="blue" size="md">
                        {skill}
                      </Badge>
                    ))}
                  </Group>
                </div>
              </Stack>
            </Stack>

            <Divider />

            {/* Проекты */}
            <Stack gap={16}>
              <Title order={2} size={20} fw={600}>
                Проекты
              </Title>
              <Stack gap={20}>
                {/* Лендинг для сервисного центра CPS */}
                <Box>
                  <Group gap={8} mb={8}>
                    <Code size={16} color="#5E96FC" />
                    <Text fw={600} size="sm">
                      Лендинг для сервисного центра CPS
                    </Text>
                  </Group>
                  <Group gap={8} mb={8}>
                    <Badge variant="outline" color="blue" size="sm">
                      HTML5
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      SCSS (БЭМ)
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      JavaScript
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      Webpack
                    </Badge>
                  </Group>
                  <Text size="sm" style={{ lineHeight: 1.6 }}>
                    Реализовал модульное модальное окно на чистом JS, управление
                    состоянием через Custom Events. Адаптивная сетка построена
                    на CSS Grid/Flexbox. Использовал методологию БЭМ для
                    именования классов. Проект опубликован на GitHub Pages.
                  </Text>
                </Box>

                {/* Трейдинг-скрипты на Pine Script */}
                <Box>
                  <Group gap={8} mb={8}>
                    <Code size={16} color="#5E96FC" />
                    <Text fw={600} size="sm">
                      Трейдинг-скрипты на Pine Script
                    </Text>
                  </Group>
                  <Group gap={8} mb={8}>
                    <Badge variant="outline" color="blue" size="sm">
                      Pine Script
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      TradingView
                    </Badge>
                  </Group>
                  <Text size="sm" style={{ lineHeight: 1.6 }}>
                    TradingView Pine Scripts — автоматизация торговли: RSI,
                    дивергенции, визуализация точек входа, TP/SL, Elliott Wave +
                    FB и другие.
                  </Text>
                </Box>

                {/* JavaScript проекты */}
                <Box>
                  <Group gap={8} mb={8}>
                    <Code size={16} color="#5E96FC" />
                    <Text fw={600} size="sm">
                      JavaScript проекты
                    </Text>
                  </Group>
                  <Group gap={8} mb={8}>
                    <Badge variant="outline" color="blue" size="sm">
                      JavaScript ES6+
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      DOM API
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      Fetch API
                    </Badge>
                  </Group>
                  <Stack gap={8} mb={8}>
                    <Text fw={500} size="sm">
                      Поисковик репозиториев GitHub
                    </Text>
                    <Text size="sm" style={{ lineHeight: 1.6 }}>
                      Приложение для динамического поиска и сохранения
                      репозиториев. Ключевые особенности: автодополнение с
                      debounce для снижения нагрузки на API, простой интерфейс.
                    </Text>
                  </Stack>
                  <Stack gap={8}>
                    <Text fw={500} size="sm">
                      Набор мини-проектов
                    </Text>
                    <Text size="sm" style={{ lineHeight: 1.6 }}>
                      Калькулятор, менеджер задач, таймер, заметки. В каждом
                      реализована своя бизнес-логика, работа с DOM-событиями и
                      сохранение состояния.
                    </Text>
                  </Stack>
                </Box>

                {/* React & TypeScript проекты */}
                <Box>
                  <Group gap={8} mb={8}>
                    <Code size={16} color="#5E96FC" />
                    <Text fw={600} size="sm">
                      React & TypeScript проекты
                    </Text>
                  </Group>
                  <Group gap={8} mb={8}>
                    <Badge variant="outline" color="blue" size="sm">
                      React
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      SCSS
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      Vite
                    </Badge>
                    <Badge variant="outline" color="blue" size="sm">
                      Vitest
                    </Badge>
                  </Group>
                  <Text size="sm" style={{ lineHeight: 1.6 }}>
                    Проекты React: Управление состоянием приложения с помощью
                    Context API + useReducer. Роутинг между разными разделами
                    приложения через React Router. Использование кастомных хуков
                    для логики работы с данными. Адаптивный интерфейс,
                    написанный на SCSS-модулях. Написаны юнит-тесты для
                    утилитарных функций с использованием Vitest.
                  </Text>
                </Box>
              </Stack>
            </Stack>

            <Divider />

            {/* Опыт работы */}
            <Stack gap={16}>
              <Title order={2} size={20} fw={600}>
                Опыт работы
              </Title>
              <Box>
                <Text fw={600} size="sm">
                  Компания ООО "С-Маркетинг"
                </Text>
                <Text size="sm" c="#5E96FC" mb={4}>
                  Менеджер проектов → Продукт-менеджер / Product Owner →
                  Руководитель продукта
                </Text>
                <Text size="sm" c="#ACADB9" mb={8}>
                  Москва — 2019–2025
                </Text>
                <Text size="sm" style={{ lineHeight: 1.6 }} mb={8}>
                  Анализировал и автоматизировал обработку данных рекламных
                  кампаний (Power Query, Qlik Sense). Отвечал за продукты
                  Автокреатив, Автопилот, Таск-трекер — от идеи до релиза.
                  Формировал и руководил командами разработки, в рамках которых
                  активно развивал техническую экспертизу во фронтенде. Защищал
                  продуктовые решения на проектных комитетах (финансы,
                  стратегия).
                </Text>
                <Text size="sm" fw={600} c="#5E96FC">
                  Результаты: запустил несколько IT-продуктов с нуля;
                  сформировал и возглавил несколько команд разработки; получил
                  глубокое понимание процессов веб-разработки через прямое
                  взаимодействие с командой.
                </Text>
              </Box>
            </Stack>

            <Divider />

            {/* Образование */}
            <Stack gap={16}>
              <Title order={2} size={20} fw={600}>
                Образование
              </Title>
              <Box>
                <Text fw={600} size="sm">
                  МГИУ — Экономика и управление на предприятии в машиностроении
                </Text>
                <Text size="sm" c="#5E96FC" mb={4}>
                  Квалификация: экономист-менеджер
                </Text>
                <Text size="sm" c="#ACADB9">
                  Год окончания: 2015
                </Text>
              </Box>
            </Stack>

            <Divider />

            {/* Ссылки */}
            <Stack gap={16}>
              <Title order={2} size={20} fw={600}>
                Ссылки
              </Title>
              <Group gap="xl" wrap="wrap">
                <Group
                  component="a"
                  href="https://starrtrack.github.io/CV/"
                  target="_blank"
                  gap={4}
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                  <Text size="sm" c="#5E96FC">
                    Резюме онлайн
                  </Text>
                  <ExternalLink size={14} color="#5E96FC" />
                </Group>
                <Group
                  component="a"
                  href="https://github.com/StarrTrack"
                  target="_blank"
                  gap={4}
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                  <Github size={14} color="#5E96FC" />
                  <Text size="sm" c="#5E96FC">
                    GitHub
                  </Text>
                </Group>
                <Group
                  component="a"
                  href="https://stackblitz.com/PetrStarr"
                  target="_blank"
                  gap={4}
                  style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                  <Code size={14} color="#5E96FC" />
                  <Text size="sm" c="#5E96FC">
                    StackBlitz
                  </Text>
                </Group>
              </Group>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
