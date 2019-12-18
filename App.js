import React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import styles from './src/design/design';
import DetailsScreen from './src/components/Details';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>This is my first react native app.</Text>
          <Button
            title="Press me"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
    )
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

export default App;