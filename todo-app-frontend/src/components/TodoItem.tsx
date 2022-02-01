import React from 'react';

// import components
import { Card, Tag, Text } from '@geist-ui/react';

export interface Todo {
    id: number,
    task: string,
    due: string,
    completed: boolean,
  }

interface TodoItemProps {
    todo: Todo
}

const TodoItem = (props: TodoItemProps) => {
  let { todo } = props;

  return (
    <Card
      hoverable
      style={{ width: '25vw' }}
      type={todo.completed ? 'lite' : 'cyan'}
    >
      <Text h4>{todo.task}</Text>
      <Card.Footer>
        <Text p>Due: {todo.due}</Text>
        <Tag>ID: {todo.id}</Tag>
      </Card.Footer>
    </Card>
  );
};

export default TodoItem;