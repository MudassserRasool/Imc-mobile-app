import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Profile from '../../components/profile/Profile';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import { themeColors } from '../../theme';
const Drawer = createDrawerNavigator();

// const CustomDrawerContent = ({ navigation }) => {
//   return (
//     <DrawerContentScrollView>
//       <Profile />
//     </DrawerContentScrollView>
//   );
// };

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Profile {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: themeColors.bgColor(1), // Set your desired color
        },
        headerTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name={'shopeTitle'}
        component={HomeScreen}
        options={{
          drawerStyle: {
            backgroundColor: themeColors.bgColor(1), // Set your desired color
          },
          headerTitleStyle: {
            color: 'white',
            marginLeft: 45,
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
