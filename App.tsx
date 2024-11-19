import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/Login';
import MenuScreen from './Screens/Menu';
import ServiceDetailScreen from './Screens/Detail';
import AddServiceScreen from './Screens/Add';
import EditServiceScreen from './Screens/Edit';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
        <Stack.Screen name="AddService" component={AddServiceScreen} />
        <Stack.Screen name="EditService" component={EditServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
