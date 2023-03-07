import Video from "./screens/Video.js";
import { GestureHandLerRootView }from 'react-native-gesture-handler';
import Notifications from "./screens/Notifications.js";
import Account from "./screens/Account.js";
import News from "./screens/News.js"
import Ranking from "./screens/Ranking.js"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Video" component={Video} options={{headerShown: false,animation: 'none'}} />
        <stack.Screen name="Notifications" component={Notifications} options={{headerShown: false,animation: 'none'}}/>
        <stack.Screen name="Compte" component={Account} options={{headerShown: false,animation: 'none'}} />
        <stack.Screen name="Actualitées" component={News} options={{headerShown: false,animation: 'none'}} />
        <stack.Screen name="Classement" component={Ranking} options={{headerShown: false,animation: 'none'}} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
