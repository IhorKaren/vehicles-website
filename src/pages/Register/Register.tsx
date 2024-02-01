import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth";
import { clearError } from "../../redux/auth";
import { AppDispatch } from "../../redux/store";
import { authError } from "../../redux/auth";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterFormValues } from "src/App.types";

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loginError: boolean = useSelector(authError);

  useEffect(() => {
    if (loginError) {
      console.log(`Incorrect email or password`);
      dispatch(clearError());
    }
  }, [loginError, dispatch]);

  const onSubmit = (user: RegisterFormValues): void => {
    dispatch(register(user));
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
