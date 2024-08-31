```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── assets
│   │   └── symbol-and-text-horizontal-white.svg
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── out.css
├── README.md
├── replit.nix
├── src
│   ├── App.js
│   ├── components
│   │   ├── layout
│   │   │   ├── BottomNav.js
│   │   │   ├── Header.js
│   │   │   └── MainArea.js
│   │   ├── lists
│   │   │   ├── habits
│   │   │   │   ├── AddHabitBox.js
│   │   │   │   ├── HabitCardBack.js
│   │   │   │   ├── HabitCard.js
│   │   │   │   └── HabitsList.js
│   │   │   ├── List.js
│   │   │   ├── ListsContainer.js
│   │   │   └── todos
│   │   │       ├── AddToDoBox.js
│   │   │       ├── TodoCardBack.js
│   │   │       ├── TodoCard.js
│   │   │       └── TodosList.js
│   │   └── ui
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── ContextualMenu.js
│   │       ├── IconButton.js
│   │       ├── IconButtonWhite.js
│   │       ├── input.jsx
│   │       ├── LoginSignupForm.js
│   │       └── UserProfile.js
│   ├── data
│   │   └── dummyData.js
│   ├── index.css
│   ├── index.js
│   ├── lib
│   │   └── utils.js
│   └── pages
│       ├── AICoach.js
│       ├── Calendar.js
│       ├── Collaboration.js
│       ├── Community.js
│       ├── Courses.js
│       ├── Home.js
│       ├── News.js
│       └── Stats.js
├── STYLE_GUIDE.md
├── tailwind.config.js
└── yarn.lock
```


## Context about the project at hand:

### App Layout

- **Header**: Includes a hamburger menu and logo on the left, and notification and profile icons on the right.
- **Bottom Navigation**: Provides navigation to different app sections: Home, News, AI Coach, calendar, stats, community, Collaboration, courses
- **Scrolling**: The main content scrolls behind the fixed top header and bottom navigation.

### Home Section Components

1. **UserProfile.js**: Displays user profile information.
2. **ListsContainer.js**:
   - **HabitsList.js**: Contains habit-related components:
     - HabitCard.js
     - HabitCardBack.js
     - AddHabitBox.js
   - **TodosList.js**: Contains to-do related components:
     - TodoCard.js
     - TodoCardBack.js
     - AddToDoBox.js

### Detailed Component Interaction

- **HabitCard.js** and **TodoCard.js** are reusable components.
- **HabitsList.js** and **TodosList.js** are parent components that display lists of habit and to-do cards, respectively.
- **ListsContainer.js** wraps both the habits and todos lists, allowing them to be responsive and display side by side on larger screens.

### Differences Between Habits and Todos

- **Habits**:
  - Predefined by the app, with data pulled from a database (currently a local dummy data file).
  - Users can add new habits via the **AddHabitBox.js**, but cannot edit existing habits.
  - Once added, users can set options for habits or view the back side of the habit card (**HabitCardBack.js**).

- **Todos**:
  - Not predefined; users can create and add new todos using the **AddToDoBox.js**.
  - Users can edit or delete todos and view the back side of the to-do card (**TodoCardBack.js**).

Currently, there are 3 dummy habits and 5 dummy todos for testing and visualizing the frontend.

## Current Code:

// src/App.js
//...

// src/components/layout/BottomNav.js
//...

### Mission

1. Land on the 'Home' section immediately after logging in (bypassing the need to manually click 'Home').
2. Reorganize files and directories for better structure (Only if needed & without breaking anything).

Ask for any clarifications or let me know whats going on from your universe so we're in the same page. Lets sync our atomic watches & make as few assumptions as possible before planning any implementation. Sounds good bruh?