import { useState, MouseEvent } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import MainModal from "../../components/Modal/Modal";
import { ChangePasswordFormValues, CreditCardFormValues } from "src/App.types";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";
import CreditCardForm from "../../components/CreditCardForm/CreditCardForm";

const AccountSettings = () => {
  const [{ passwordModal, cardModal }, setIsModalOpen] = useState({
    passwordModal: false,
    cardModal: false,
  });

  const openModal = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "password") {
      setIsModalOpen((prevState) => ({ ...prevState, passwordModal: true }));
      return;
    }

    setIsModalOpen((prevState) => ({ ...prevState, cardModal: true }));
  };

  const closeModal = () => {
    setIsModalOpen({
      passwordModal: false,
      cardModal: false,
    });
  };

  const onPasswordSubmit = (data: ChangePasswordFormValues) => {
    console.log(data);
  };

  const onCreditCardSubmit = (data: CreditCardFormValues) => {
    console.log(data);
  };

  return (
    <Box p={1} width="100%">
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "start" },
          gap: { xs: 1, md: 5 },
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography variant="h6" mb={2}>
            Account
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="body1">Password</Typography>
              <Typography>**************</Typography>
            </Box>
            <Button
              id="password"
              onClick={openModal}
              variant="outlined"
              sx={{ flexShrink: 0 }}
            >
              Change password
            </Button>
          </Box>
          <Divider />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box>
              <Typography variant="body1">Payment info for bidding</Typography>
            </Box>
            <Button
              onClick={openModal}
              variant="outlined"
              sx={{ alignSelf: "start", flexShrink: 0 }}
            >
              Register to bid
            </Button>
          </Box>
        </Box>
        <MainModal
          modalIsOpen={passwordModal || cardModal}
          closeModal={closeModal}
        >
          {passwordModal ? (
            <ChangePasswordForm onSubmit={onPasswordSubmit} />
          ) : (
            <CreditCardForm onSubmit={onCreditCardSubmit} />
          )}
        </MainModal>
      </Box>
    </Box>
  );
};

export default AccountSettings;
