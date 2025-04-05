import SignUpPage from "./components/sign_in/SignUp";
import TodoApp from "./components/TodoApp";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<SignUpPage></SignUpPage>}></Route>
            <Route path="todos" element={<TodoApp></TodoApp>}></Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
export default App;