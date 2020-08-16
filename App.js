/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabScreen } from './src/componets/screens/MainTabScreen';
import { DrawerContent } from './src/componets/screens/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackScreen } from './src/componets/screens/RootStackScreen';

import { Bookmarks } from './src/componets/screens/Bookmarks';
import { Settings } from './src/componets/screens/Settings';
import { Support } from './src/componets/screens/Support';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const BookmarksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bookmarks" component={Bookmarks} options={{
        title: "Bookmarks",
        headerStyle: {
          backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
      {/* <Drawer.Navigator initialRouteName="HomeDrawer" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="BookmarkStack" component={BookmarksStack} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Support" component={Support} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;


// //stack Navigator
//
// const Stack = createStackNavigator();
//
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: "#009387"
//         },
//         headerTintColor: "#fff",
//         headerTitleStyle: {
//           fontWeight: "bold"
//         }
//       }}>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="ChatList" component={ChatList} />
//         <Stack.Screen name="Chat" component={Chat} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };