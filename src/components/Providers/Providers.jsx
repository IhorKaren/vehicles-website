import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import { persistor, store } from "@/redux/store";
import { theme } from "@/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ProvidersPropTypes } from "./Providers.props";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>

            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

Providers.propTypes = ProvidersPropTypes;

export default Providers;
