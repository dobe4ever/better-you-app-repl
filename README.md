# Better You Everyday - React App Documentation

Summary:
- App Name: BetterUeveryday
- Purpose: Personal development and habit tracking
- Main Features: Daily task tracking, progress visualization, note-taking, reminders
- Tech Stack: React, Tailwind CSS, React Router, Framer Motion
- Key Components:
  1. Bottom Navigation Bar: Home, News, Add (prominent), AI Coach, More
  2. Contextual Menu: Calendar, Stats, Community, Collaboration, Courses
  3. User Profile Section
  4. Task List with different types (habits, to-dos)
- Design Elements:
  - Color Scheme: Orange (primary), White (secondary)
  - Sleek, modern UI with rounded corners and smooth animations
  - Emphasis on responsive design for mobile use
  - Blur effects for overlays (e.g., contextual menu)
- Current Focus: Refining UI/UX, particularly the contextual menu and bottom navigation
- Next Steps: Await client feedback, potentially apply consistent design principles across all components

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technical Stack](#technical-stack)
3. [App Structure](#app-structure)
4. [Components](#components)
5. [Navigation](#navigation)
6. [Checklists](#checklists)
7. [User Interface](#user-interface)
8. [Future Considerations](#future-considerations)

## 1. Project Overview

"Better You Everyday" is a React-based personal development and habit tracking app. Its primary goal is to help users build and maintain positive habits through an intuitive interface for daily task tracking, progress visualization, note-taking, and reminders.

### Key Features
- Habit tracking
- To-do list management
- Progress visualization
- Reminders and notifications
- AI coaching (planned)
- Community and collaboration features (planned)

## 2. Technical Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: React Icons
- **Additional Libraries**:
  - @radix-ui/react-slot
  - class-variance-authority
  - clsx
  - tailwind-merge
  - tailwindcss-animate

## 3. App Structure

The app follows a standard React project structure:

```
Replit-TailwindCSS-Template-Node-js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── components
│   │   ├── ui
│   │   │   ├── Button.jsx
│   │   │   ├── HabitCard.jsx
│   │   │   ├── ToDoCard.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Icon.jsx
│   │   │   ├── AddTaskModal.jsx
│   │   │   ├── ProgressBar.jsx
│   │   ├── Header.jsx
│   │   ├── UserProfileCard.jsx
│   │   ├── HabitList.jsx
│   │   ├── ToDoList.jsx
│   │   ├── ToDoItem.jsx
│   │   ├── BottomNavBar.jsx
│   │   ├── LoginSignupForm.jsx
│   ├── lib
│   │   └── utils.js
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── LoginSignupForm.js
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## 4. Components

### Core Components
1. **Header**: App title and user profile
2. **BottomNav**: Main navigation component
3. **TaskList**: Renders both Habits and To-Do lists
4. **UserProfile**: Displays user information and progress

### UI Components
1. **Button**: Reusable button component
2. **Card**: Container for various content types
3. **Input**: Form input component

## 5. Navigation

The app uses a bottom navigation bar with the following structure:

- Home (default view)
- News
- Add ('+' icon)
- AI Coach
- More (opens submenu)
  - Calendar
  - Stats
  - Community
  - Collaboration
  - Courses

The navigation bar should remain visible at all times, pinned to the bottom of the screen.

### Add Menu
When the '+' icon is clicked, a modal or drawer should appear, covering approximately half the screen. This menu includes icons for:
- Custom
- Habit Library
- Celebrity Routines
- Influencer Routines
- Challenges
- Popular Habits

## 6. Checklists

### To-Do Checklist
Features:
- Add/remove items
- Check/uncheck items
- Options menu (accessed via '3 dots' icon):
  - Delete
  - One time only (toggle)
  - Highlight star (toggle)
  - Private/public (select)
  - Set priority (low, medium, high)
  - Set alarm
  - Color selection
  - Edit name
  - Pin to top (toggle)

### Habits Checklist
Features:
- Similar to To-Do checklist
- Option to hide/unhide checked items
- Clicking an item opens a full page view (for future monetization)
- Options menu:
  - Deadline (calendar UI)
  - Edit name
  - Private/public (select)
  - Category (personal, health, financial, etc.)
  - Color selection
  - Set reminder
  - Highlight star
  - Change priority
  - One time only (toggle)
  - Delete item

## 7. User Interface

The app uses a custom color scheme with an emphasis on orange (#FF5722) as the primary color. The UI should be clean, modern, and easy to navigate.

Key UI elements:
- User profile card with progress indicator
- Checklist items with clear, tappable areas
- Prominent '+' button in the navigation bar
- Modal/drawer for the Add menu
- Options menus for checklist items

## 8. Future Considerations

- Implementation of AI coaching features
- Development of community and collaboration tools
- Integration of a calendar view for long-term planning
- Creation of detailed statistics and progress tracking
- Potential monetization through the Habits full page view (e.g., affiliate marketing, product recommendations)

This documentation will be updated as the project progresses and new features are implemented or requirements change.