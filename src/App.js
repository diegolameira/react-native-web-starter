import React from 'react'
import { View, Text, Animated, StyleSheet, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components';

import { Button } from './components';

import light, { Light, Dark } from './components/Themes';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          selectedTheme: Dark,
        };
        this.imageAnimation = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.loop(
          Animated.timing(this.imageAnimation, {
              toValue: 1,
              duration: 1005
          })
        ).start();

        StatusBar.setBarStyle('light-content');
    }

    toggleTheme = () => {
      this.setState(({selectedTheme}) => ({
        selectedTheme: selectedTheme == Light ? Dark : Light
      }));
    }

    render() {
        const rotationStyle = { transform: [{
            rotate: this.imageAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            })
        }] };

        return (
          <ThemeProvider theme={this.state.selectedTheme}>
            <View style={styles.app}>
                <View style={styles.appHeader}>
                    <Animated.Image
                        style={[styles.headerImage, rotationStyle]}
                        resizeMode={'contain'}
                        source={require('./assets/react-logo.png')}
                    />
                    <Text style={styles.appTitle}>Welcome to React Native Web️</Text>
                    <Button onPress={this.toggleTheme} theme={Light}>
                      Toggle Theme
                    </Button>
                </View>
                <Text style={styles.appIntro}>
                    To get started, edit src/App.js and save to reload.
                </Text>

                <Button
                  title="Default Button (dark)"
                  />

                <Button
                  title="Default Button (alert)"
                  onPress={() => alert('foi')}
                  />

                <Button
                  theme={Light}
                  >Light Button (forced)</Button>

                <Button
                  theme={Dark}
                  >Dark Button (forced)</Button>
            </View>
          </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    appHeader: {
        flex: 1,
        backgroundColor: '#222',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerImage: {
        width: 200,
        height: 200,
        flex: 3
    },
    appTitle: {
        flex: 1,
        fontSize: 16,
        color: 'white'
    },
    appIntro: {
        flex: 3,
        fontSize: 30,
        textAlign: 'center'
    }
})
