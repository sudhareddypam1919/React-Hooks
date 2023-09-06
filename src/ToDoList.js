import react, {useState, useRef} from React;

function ToDoList () {
  //const [list, setList] = useState('');
  const list = null;
  const currentItem = useRef();

  handleTodoList ({
    list = currentItem.input.value
  })

  return (
    <div>
      <input type='text' val={list} />
      <button onClick={handleTodoList()}>Submit</button>
      <ul>
        <li>{list}</li> 
       </ul>
    </div>
  )
}

export default ToDoList