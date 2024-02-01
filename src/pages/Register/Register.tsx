import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { clearError } from "../../redux/auth/authSlice";
import { AppDispatch } from "../../redux/store";
import { authError } from "../../redux/auth/selectors";
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
    console.log(dispatch(registerUser(user)));
  };

  return <RegisterForm onSubmit={onSubmit} />;
};

export default Register;
