import fakeData from './fakeToDo.json';

export interface Todo {
  id: Number;
  task: String;
  due: String;
  completed: Boolean;
}

const getTodoData = (): Array<Todo> => {
  return fakeData;
};

export default getTodoData;