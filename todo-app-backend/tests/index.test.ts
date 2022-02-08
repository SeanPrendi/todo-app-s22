import getTodoData, { Todo } from '../helpers';

test('gets well-formatted todo json object', () => {
  const data: Array<Todo> = getTodoData();
  const testObj = data[1];
  expect(testObj).toBeDefined();
  expect(testObj).toHaveProperty('id');
  expect(testObj).toHaveProperty('task');
  expect(testObj).toHaveProperty('due');
  expect(testObj).toHaveProperty('completed');
});