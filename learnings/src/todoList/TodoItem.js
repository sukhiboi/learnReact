import React from 'react';

const TodoItem = function (props) {
  const { todo, onClick } = props;
  const { content, id, isCompleted } = todo;
  const textDecoration = isCompleted ? 'line-through' : 'none';
  const bulletColor = isCompleted ? 'mediumseagreen' : 'lightblue';
  return (
    <div
      style={{ display: 'flex', padding: 5, fontFamily: 'sans-serif' }}
      onClick={() => onClick(id)}
    >
      <div style={{ width: 10, backgroundColor: bulletColor }}></div>
      <span style={{ textDecoration, paddingLeft: 10 }}>{content}</span>
    </div>
  );
};

export default TodoItem;
