

import Header from './components/Header';
import TaskInput from './components/TaskInput';
import Task from './components/Task';
import Footer from './components/Footer';
function App() {
  const tasks = [
    { id: 1, text: 'Read a book', done: false },
    { id: 2, text: 'Take a shower', done: false },
    { id: 3, text: 'Sleep', done: false },
  ];

  return (
    <div className="main">
      <Header />
      <div style={{ maxWidth: '400px' }} className="mx-auto">
        <TaskInput />
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
