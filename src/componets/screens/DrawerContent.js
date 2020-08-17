import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../context/context';

export const DrawerContent = (props) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const {signOut} = React.useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Title>Ashutosh Mantoo</Title>
                                <Caption>@ashumantoo</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                            <View style={[styles.section, { marginLeft: 20 }]}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem icon={({ color, size }) => (
                            <Icon
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                            label="Home"
                            onPress={() => { props.navigation.navigate("HomeDrawer") }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Entypo
                                name="user"
                                color={color}
                                size={size}
                            />
                        )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate("Profile") }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <MaterialIcon
                                name="chat-bubble"
                                color={color}
                                size={size}
                            />
                        )}
                            label="Chat"
                            onPress={() => { props.navigation.navigate("ChatList") }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <Entypo
                                name="bookmarks"
                                color={color}
                                size={size}
                            />
                        )}
                            label="Bookmarks"
                            onPress={() => { props.navigation.navigate("BookmarkStack") }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <MaterialIcon
                                name="settings"
                                color={color}
                                size={size}
                            />
                        )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate("Settings") }}
                        />
                        <DrawerItem icon={({ color, size }) => (
                            <MaterialIcon
                                name="person-pin"
                                color={color}
                                size={size}
                            />
                        )}
                            label="Support"
                            onPress={() => { props.navigation.navigate("Support") }}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <TouchableRipple onPress={() => toggleTheme()}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem icon={({ color, size }) => (
                    <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                    />
                )}
                    label="Sign Out"
                    onPress={() => { signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginTop: 15,
        borderTopColor: "#f4f4f4",
        borderTopWidth: 1
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})