export const handleRedirect = (role, navigate) => {
  switch (role) {
    case "chef":
      navigate("/chef-account");
      break;
    case "user":
      navigate("/orders");
      break;
    case "courier":
      navigate("/courier-account");
      break;
    default:
      break;
  }
};
