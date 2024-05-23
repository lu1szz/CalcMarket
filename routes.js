import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="index"
                component={Bem_Vindo}                
                 />
                 <Stack.Screen
                options={{ headerShown: false }}
                name="entrada"
                component={Acesso}
                />
                <Stack.Screen
                options={{ headerShown: false }}
                name="page1"
                component={Page1}
                />
                <Stack.Screen
                options={{ headerShown: false }}
                name="page2"
                component={Page2}
                />
                <Stack.Screen
                options={{ headerShown: false }}
                name="page3"
                component={Page3}
                />
                <Stack.Screen
                options={{ headerShown: false }}
                name="page4"
                component={Page4}
                />
                
        </Stack.Navigator>
        )
} 