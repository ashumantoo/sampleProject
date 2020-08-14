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

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} /> }>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Home" component={HomeStackScreen} /> */}
        {/* <Drawer.Screen name="ChatList" component={ChatListStackScreen} />
        <Drawer.Screen name="Chat" component={ChatStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} /> */}
      </Drawer.Navigator>
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