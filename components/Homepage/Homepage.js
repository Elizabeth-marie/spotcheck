import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, ImageBackground, Image, Alert, TouchableOpacity} from 'react-native'


export default class HomePage extends React.Component {
  render() {
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ImageBackground
        source={require('../../assets/images/homepage-dog.jpg')}
        style={styles.imageContainer}
        imageStyle={styles.image}
        >
        <View style={styles.container}>
          <Text style={styles.textStyle}>Enter Location</Text>
          <TextInput
            autoCorrect={false}
            placeholder="Search any city"
            placeholderTextColor="black"
            style={styles.textInput}
            clearButtonMode="always"
            onChangeText={this.props.updateLocation}
          />

          <TouchableOpacity
              style={styles.button}
              onPress={() => {
              Alert.alert('You tapped the button!')}}>
            <Text >Fetch!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
  },

  smallText: {
    fontSize: 18,
},
textInput: {
  backgroundColor: 'rgba(222, 224, 226, 0.8)',
  borderWidth: 1,
  borderRadius: 5,
  color: 'white',
  height: 40,
  width: 300,
  marginTop: 10,
  marginHorizontal: 20,
  paddingHorizontal: 10,
  alignSelf: 'center',
},
imageContainer: {
  flex: 1,
  width: 450,
},
image: {
  flex: 1,
  width: null,
  height: null,
  resizeMode: 'cover',
},
button: {
  width: '25%',
  height: '4%',
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: 'white',
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center'
}
});