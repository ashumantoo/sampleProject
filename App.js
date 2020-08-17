/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabScreen } from './src/componets/screens/MainTabScreen';
import { DrawerContent } from './src/componets/screens/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackScreen } from './src/componets/screens/RootStackScreen';

import { AuthContext } from './src/componets/context/context';

import { Bookmarks } from './src/componets/screens/Bookmarks';
import { Settings } from './src/componets/screens/Settings';
import { Support } from './src/componets/screens/Support';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';

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
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authcontext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fsgs');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fsgs');
      setIsLoading(false);
    },
  }), [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authcontext}>
      <NavigationContainer>
        {userToken ? (
          <Drawer.Navigator initialRouteName="HomeDrawer" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="BookmarkStack" component={BookmarksStack} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Support" component={Support} />
          </Drawer.Navigator>
        ) : (
            <RootStackScreen />
          )}
      </NavigationContainer>
    </AuthContext.Provider>
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