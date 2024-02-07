import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { user } from "../../redux/auth";
import { Box, Link, Avatar, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MainModal from "../../components/Modal/Modal";
import { ChangeProfileFormValues } from "src/App.types";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { firstName, lastName, email, membership } = useSelector(user);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = (data: ChangeProfileFormValues) => {
    console.log(data);
  };

  return (
    <Box p={1}>
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
        <Avatar sx={{ width: { xs: "60px", md: "120px" }, height: "100%" }}>
          <PersonIcon
            sx={{ width: { xs: "60px", md: "120px" }, height: "100%" }}
          />
        </Avatar>
        <Box sx={{ justifyContent: { sx: "center", md: "start" } }}>
          <Typography variant="h5">{`${firstName} ${lastName}`}</Typography>
          <Typography variant="body1" mb={1}>
            {email}
          </Typography>
          <Typography variant="body1" textTransform={"capitalize"}>
            Membership: {membership}
          </Typography>
          <Link component={NavLink} to="#" sx={{ display: "block", mb: 1 }}>
            <Typography variant="body2">
              View available membership plans
            </Typography>
          </Link>
        </Box>
        <Button
          onClick={toggleModal}
          variant="outlined"
          sx={{ ml: { xs: "0", sm: "auto" }, flexShrink: 0 }}
        >
          Edit Profile
        </Button>
      </Box>
      <MainModal modalIsOpen={isModalOpen} closeModal={toggleModal}>
        <ProfileForm
          onSubmit={onSubmit}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      </MainModal>
    </Box>
  );
};

export default Dashboard;
