import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import Example from './Example';




export type ApplicationStackParamList = {
	Example: undefined;
};

export type ApplicationScreenProps = StackScreenProps<ApplicationStackParamList>;

const Stack = createStackNavigator<ApplicationStackParamList>();
function ApplicationNavigator() {
	return (
		<NavigationContainer >
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Example" component={Example} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default ApplicationNavigator;
