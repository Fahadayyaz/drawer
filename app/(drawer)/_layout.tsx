import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: '#fff', width: 240 },
        drawerLabelStyle: { fontSize: 16 },
        drawerActiveTintColor: 'green',
        drawerActiveBackgroundColor: 'lightgreen',
      }}
    >
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />, 
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />, 
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: 'About',
          drawerIcon: ({ color, size }) => <AntDesign name="infocirlceo" size={size} color={color} />, 
        }}
      />
      <Drawer.Screen
        name="services"
        options={{
          title: 'Services',
          drawerIcon: ({ color, size }) => <MaterialIcons name="design-services" size={size} color={color} />, 
        }}
      />
      
      <Drawer.Screen
        name="faq"
        options={{
          title: 'FAQ',
          drawerIcon: ({ color, size }) => <MaterialIcons name="chat" size={size} color={color} />, 
        }}
      />
      <Drawer.Screen name="Other"     options={{
          title: 'Other',
          drawerIcon: ({ color, size }) => <MaterialIcons name="chat" size={size} color={color} />, 
        }} />
      
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />, 
        }}
      />
      <View style={{ flex: 1 }} />
      <Drawer.Screen
        name="logout"
        options={{
          title: 'Logout',
          drawerIcon: ({ color, size }) => <MaterialIcons name="logout" size={size} color={color} />, 
        }}
      />
    </Drawer>
  );
}
