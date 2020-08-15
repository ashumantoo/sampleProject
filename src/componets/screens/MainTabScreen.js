import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { Home } from './Home';
import { Login } from './Login';
import { ChatList } from './ChatList';
import { Chat } from './Chat';
import { Profile } from './Profile';
import { Explore } from './Explore';
import { Bookmarks } from './Bookmarks';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ChatListStack = createStackNavigator();
const ChatStack = createStackNavigator();
const LoginStack = createStackNavigator();
const BookmarksStack = createStackNavigator();

export const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#009387'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: "#009387",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreStackScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="explore" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="ChatList"
                component={ChatListStackScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="chatbox-sharp" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const headerMenuIcon = (navigation) => (
    <Icon.Button
        name="ios-menu"
        size={25}
        backgroundColor="#009387"
        onPress={() => {
            navigation.openDrawer();
        }}
    />
)

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
    </HomeStack.Navigator>
)

const ChatListStackScreen = ({ navigation }) => (
    <ChatListStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <ChatListStack.Screen name="ChatList" component={ChatList} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
        <ChatListStack.Screen name="chat" component={Chat} options={{ title: "Chats" }} />
    </ChatListStack.Navigator>
)

const ChatStackScreen = ({ navigation }) => (
    <ChatStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <ChatStack.Screen name="Chat" component={Chat} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
    </ChatStack.Navigator>
)

const LoginStackScreen = ({ navigation }) => (
    <LoginStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <LoginStack.Screen name="Login" component={Login} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
    </LoginStack.Navigator>
)

const ExploreStackScreen = ({ navigation }) => (
    <LoginStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <LoginStack.Screen name="Explore" component={Explore} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
    </LoginStack.Navigator>
)

const ProfileStackScreen = ({ navigation }) => (
    <LoginStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <LoginStack.Screen name="Profile" component={Profile} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
    </LoginStack.Navigator>
)

const BookmarksStackScreen = ({ navigation }) => (
    <BookmarksStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#009387"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}>
        <BookmarksStack.Screen name="Bookmarks" component={Bookmarks} options={{ headerLeft: () => headerMenuIcon(navigation) }} />
    </BookmarksStack.Navigator>
)