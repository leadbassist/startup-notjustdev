import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import Colors from "./src/constants/Colors";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Username",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
      placeHolder: "123@domain.com",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
      placeHolder: "Password",
    },
  ],
};

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: Colors.light.primary,
    borderRadius: 5,
  },
  buttonDisabled: {
    ...AmplifyTheme.buttonDisabled,
    backgroundColor: Colors.light.dark,
    borderRadius: 5,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: Colors.light.primary,
  },
};

export default withAuthenticator(App, { signUpConfig, theme: customTheme });
