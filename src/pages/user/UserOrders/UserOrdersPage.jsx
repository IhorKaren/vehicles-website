import { PageTitle } from "@/components/PageTitle/PageTitle";
import { UserOrdersTable } from "@/components/UserOrdersTable";
import { Main } from "@/shared/Main/Main";
import {
  UserOrdersPageContainer,
  UserOrdersPageSection,
} from "./UserOrdersPage.styled";

const UserOrdersPage = () => {
  return (
    <Main>
      <UserOrdersPageSection>
        <UserOrdersPageContainer>
          <PageTitle>Orders</PageTitle>
          <UserOrdersTable />
        </UserOrdersPageContainer>
      </UserOrdersPageSection>
    </Main>
  );
};

export default UserOrdersPage;
