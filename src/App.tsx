import AppNavigator from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store/store";
import useFontsLoaded from "./hooks/useFontsLoaded";
import { ActivityIndicator } from "react-native";


export default function App() {
  const loaded = useFontsLoaded();

  if (!loaded) {
    return <ActivityIndicator size="large" color="#000" />;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
