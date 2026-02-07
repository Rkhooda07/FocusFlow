# STRUCTURE

/            → Dashboard
/tasks       → Task Manager
/focus       → Focus Timer
/habits      → Habit Tracker
/settings    → Theme + preferences

# COMPONENT HIERARCHY

App
 └── Layout
      ├── Sidebar
      ├── Navbar
      └── Page (Outlet)
           ├── PageHeader
           ├── PageContent
           └── PageWidgets


# FILE STRUCTURE

src/
├── components/
│   ├── ui/           (Button, Modal)
│   ├── layout/       (Sidebar, Navbar)
│   └── common/
├── pages/
│   ├── Dashboard
│   ├── Tasks
│   ├── Focus
│   ├── Habits
│   └── Settings
├── hooks/
├── context/
├── styles/
├── utils/
└── App.jsx
