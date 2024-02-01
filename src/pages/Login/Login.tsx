import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth";
import { clearError } from "../../redux/auth";
import { AppDispatch } from "../../redux/store";
import { authError } from "../../redux/auth";
import LoginForm from "../../components/LoginForm/LoginForm";
import { LoginFormValues } from "src/App.types";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginError: boolean = useSelector(authError);

  useEffect(() => {
    if (loginError) {
      console.log(`Incorrect email or password`);
      dispatch(clearError());
    }
  }, [loginError, dispatch]);

  const onSubmit = (user: LoginFormValues): void => {
    dispatch(login(user));
  };

  return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
