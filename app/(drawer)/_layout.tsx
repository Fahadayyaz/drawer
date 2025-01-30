// app/(drawer)/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: '#fff', width: 240 },
        drawerLabelStyle: { fontSize: 16 },
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
          drawerIcon: ({ color, size }) => <MaterialIcons name="design-services" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          title: 'FAQ',
          drawerIcon: ({ color, size }) => <AntDesign name="questioncircleo" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          title: 'Settings',
          drawerIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="logout"
        options={{
          title: 'Logout',
          drawerIcon: ({ color, size }) => <AntDesign name="logout" size={size} color={color} />,
        }}
      />
    </Drawer>
  );
}
