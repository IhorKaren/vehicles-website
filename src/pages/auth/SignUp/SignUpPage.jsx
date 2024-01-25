import SignUpForm from "@/components/SignUpForm";
import { AuthContainerStyled } from "@/shared/AuthFormComponents/styles";
import { Main } from "@/shared/Main/Main";

const SignUpPage = () => {
  return (
    <Main>
      <AuthContainerStyled>
        <SignUpForm />
      </AuthContainerStyled>
    </Main>
  );
};

export default SignUpPage;
