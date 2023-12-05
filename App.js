import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./assets/components/Home/Home";
import Page from "./assets/components/Page/Page";
import News from "./assets/components/News/News";
import Articles from "./assets/components/Articles/Articles";
import Interview from "./assets/components/Interview/Interview";
import Photo from "./assets/components/Photo/Photo";
import Video from "./assets/components/Video/Video";
import PageVideo from "./assets/components/PageVideo/PageVideo";
import PageHeader from "./assets/components/PageHeader/PageHeader";
const Stack = createStackNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Page" component={Page} />
          <Stack.Screen name="PageHeader" component={PageHeader} />
          <Stack.Screen name="News" component={News} />
          <Stack.Screen name="Business" component={News} />
          <Stack.Screen name="Entertainment" component={News} />
          <Stack.Screen name="General" component={News} />
          <Stack.Screen name="Health" component={News} />
          <Stack.Screen name="Science" component={News} />
          <Stack.Screen name="Sports" component={News} />
          <Stack.Screen name="Technology" component={News} />
          <Stack.Screen name="Articles" component={Articles} />
          <Stack.Screen name="Interview" component={Interview} />
          <Stack.Screen name="Photo" component={Photo} />
          <Stack.Screen name="Video" component={Video} />
          <Stack.Screen name="PageVideo" component={PageVideo} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
