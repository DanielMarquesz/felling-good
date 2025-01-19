import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,  
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,  
} from 'react-native';
import { LoginStyles } from './login.styles';
import { useNavigation } from '@react-navigation/native';


const LoginScreen: React.FC = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };


  return (
    <SafeAreaView style={LoginStyles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={LoginStyles.container}
      >
        <View style={LoginStyles.content}>
          {/* Logo */}
          <View style={LoginStyles.logoContainer}>
            {/* <Image
              source={require('./assets/heart-icon.png')}
              style={LoginStyles.logo}
            /> */}
            <Text style={LoginStyles.logoText}>Felling Good?</Text>
          </View>

          {/* Input Fields */}
          <TextInput
            style={LoginStyles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={LoginStyles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
          />

          {/* Login Button */}
          <TouchableOpacity style={LoginStyles.loginButton} onPress={handleLogin}>
            <Text style={LoginStyles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Register Button */}
          <TouchableOpacity style={LoginStyles.registerButton}>
            <Text style={LoginStyles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          {/* Google Login Button */}
          <TouchableOpacity style={LoginStyles.googleButton}>
            {/* <Image
              source={require('./assets/google-icon.png')}
              style={LoginStyles.googleIcon}
            /> */}
            <Text style={LoginStyles.googleButtonText}>Login with Google</Text>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity style={LoginStyles.forgotPasswordContainer}>
            <Text style={LoginStyles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default LoginScreen;