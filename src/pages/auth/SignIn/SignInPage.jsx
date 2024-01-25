import SignInForm from "@/components/SignInForm";
import { AuthContainerStyled } from "@/shared/AuthFormComponents/styles";
import { Main } from "@/shared/Main/Main";

const SignInPage = () => {
  return (
    <Main>
      <AuthContainerStyled>
        <SignInForm />
      </AuthContainerStyled>
    </Main>
  );
};

export default SignInPage;
