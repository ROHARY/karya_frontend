import { BrowserRouter, Routes, Route } from "react-router-dom"
import TodoApp from "./components/todos/TodoApp";
import SignUp from "./components/authentication/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<TodoApp/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;