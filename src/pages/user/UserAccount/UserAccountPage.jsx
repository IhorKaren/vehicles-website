import { PageTitle } from "@/components/PageTitle/PageTitle";
import UserProfile from "@/components/Profiles/UserProfile";
import { UserPageWrapperStyled } from "./UserAccountPage.styled";

const UserAccountPage = () => {
  return (
    <UserPageWrapperStyled>
      <PageTitle>USER PROFILE</PageTitle>
      <UserProfile />
    </UserPageWrapperStyled>
  );
};

export default UserAccountPage;
