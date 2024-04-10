import Project1 from './src/Project1';
import Project2 from './src/Project2';
import Project3 from './src/Project3';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Project4 from './src/Project4';
import Project5 from './src/Project5';
import Project6 from './src/Project6';
import Project7 from './src/Project7';
import Project8 from './src/Project8';
import Calculator from './src/Calculator';
const Drawer = createDrawerNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Project1" component={Project1} />
        <Drawer.Screen name="Project2" component={Project2} />
        <Drawer.Screen name="Project3" component={Project3} /> 
        <Drawer.Screen name="Project4" component={Project4} />
        <Drawer.Screen name="Project5" component={Project5} />
         <Drawer.Screen name="Project6" component={Project6} />
        <Drawer.Screen name="Project7" component={Project7} />
        <Drawer.Screen name="Project8" component={Project8} /> 
        <Drawer.Screen name="Calculator" component={Calculator} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;


