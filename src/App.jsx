import { useState } from "react"
import Todo from "./todo"



function App() {

  const [todos, setTodos] = useState([
    {
      sub: 'go to home'
    },
    {
      sub: 'go to school'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value);  // به‌روزرسانی مقدار اینپوت
  };

  const removeHnadler = (itemToRemove) => {
    setTodos(todos.filter(item => item?.sub !== itemToRemove?.sub));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        sub: inputValue
      }
    ])
    setInputValue('')

  };

  const updateHandler = (todoToUpdate, newSub) => {
    setTodos(todos.map(todo =>
      todo.sub === todoToUpdate.sub ? { ...todo, sub: newSub } : todo
    ));
  };


  return (
    <>
      <div className="bg-stone-200 min-h-screen">
        <div className="bg-stone-200 w-full max-w-[400px] mx-auto">

          <div className=" h-35 relative flex justify-center items-center bg-sky-600 text-white rounded-b-full mb-5">


            <div className="absolute top-1 left-5 cursor-not-allowed">
              <span className="text-2xl">☰</span>
            </div>

            <h3 className="text-2xl">To Do List</h3>

          </div>


          <div className="">
            <form action='#' onSubmit={handleSubmit} className="flex items-center border border-gray-100 rounded-lg overflow-hidden bg-white mx-4">
              <input type="text" required value={inputValue} className="px-4 py-2 w-full focus:outline-none" placeholder="Go to gym ... " onChange={handleChange}></input>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 border border-blue-300 hover:border-blue-400">Add</button>
            </form>
          </div>

          <h4 className="mt-3">Your Works:</h4>
          {todos.map((todo, index) => (
            <Todo
              todos={todo}
              key={index}
              remove={removeHnadler}
              update={updateHandler}
            />
          ))}

        </div>
      </div>

    </>
  )
}

export default App
