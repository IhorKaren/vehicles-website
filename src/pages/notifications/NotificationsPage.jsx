import { Box } from "@mui/material";

import { NotificationsTable } from "@/components/NotificationsTable";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { useDisableToasts } from "@/hooks";
import { AppContainer } from "@/shared";
import { Main } from "@/shared/Main/Main";

const NotificationsPage = () => {
  useDisableToasts();

  return (
    <Main>
      <Box component="section" sx={{ flexGrow: 1 }}>
        <AppContainer
          sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <PageTitle>NOTIFICATIONS</PageTitle>

          <NotificationsTable />
        </AppContainer>
      </Box>
    </Main>
  );
};

export default NotificationsPage;
