// src/pages/Home.js
import React from 'react';
import UserProfile from '../components/ui/UserProfile';
import ListsContainer from '../components/lists/ListsContainer';

function Home({ habits, todos, onToggleHabit, onToggleTodo, onUpdateHabit, onDeleteHabit }) {
  return (
    <div className="relative">
      <UserProfile />
      <ListsContainer
        habits={habits}
        todos={todos}
        onToggleHabit={onToggleHabit}
        onToggleTodo={onToggleTodo}
        onUpdateHabit={onUpdateHabit}
        onDeleteHabit={onDeleteHabit}
      />
    </div>
  );
}

export default Home;


// // NEW src/pages/Home.js
// import React from 'react';
// import AnimatedHome from '../components/animated/AnimatedHome';

// function Home({ habits, todos, onToggleHabit, onToggleTodo, onUpdateHabit, onDeleteHabit }) {
//   return (
//     <AnimatedHome
//       habits={habits}
//       todos={todos}
//       onToggleHabit={onToggleHabit}
//       onToggleTodo={onToggleTodo}
//       onUpdateHabit={onUpdateHabit}
//       onDeleteHabit={onDeleteHabit}
//     />
//   );
// }

// export default Home;