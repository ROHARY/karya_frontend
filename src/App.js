import SignUpPage from "./components/sign_in/SignUp";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ProtectedRoute from './components/RestrictedRoute'
import SignIn from "./components/sign_in/SignInPage";
import TodoApp from './components/todos/TodoApp'
import NotificationForm from "./components/notification/NotificationForm";
import DashboardLayout from "./components/dashboard/dashboard";
import NotFound from './components/NotFound'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/sign-up"></Navigate>} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout></DashboardLayout>
              </ProtectedRoute>
            } >
              <Route index element={
                <ProtectedRoute>
                  <TodoApp></TodoApp>
                </ProtectedRoute>
              }></Route>

              <Route path="notifications" element={
                <ProtectedRoute>
                <NotificationForm></NotificationForm>
                </ProtectedRoute>
              }></Route>
            </Route>
            <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
            <Route path={'/sign-up'} element={<SignUpPage></SignUpPage>}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}
export default App;