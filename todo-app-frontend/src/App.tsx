import React, { useState, useEffect } from 'react';
import './App.css';

// component imports
import { Grid, Text } from '@geist-ui/react';
import AddTodoButton from './components/AddTodoButton';
import DisplayToggle from './components/DisplayToggle';
import TodoItem from './components/TodoItem';
import type { Todo } from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // fetching the async/await way
  async function fetchTodos() {
    try {
      const response = await fetch('/todos').then((res) => (res.json()));
      setTodoList(response);
    } catch (e) {
      console.error(e);
    }
  }

  // We just want to show you the alternate way to "fetch": (called promise-chaining)
  /*
    function syncFetchTodos() {
      fetch('/todos')
        .then((res) => {
          setTodoList(res.json());
        })
        .catch((e) => console.error(e));
    }
  */

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='App'>
      <Text h1>Todo App</Text>
      <AddTodoButton />
      <DisplayToggle toggleHandler={setShowCompleted} />
      <Grid.Container gap={2} justify='center'>
        {todoList
          ? todoList.map((todo) => {
              if (todo.completed === showCompleted) {
                return (
                  <Grid>
                    <TodoItem todo={todo} />
                  </Grid>
                );
              }
              return null;
            })
          : null}
      </Grid.Container>
    </div>
  );
}

export default App;