import { Dimensions, StyleSheet } from "react-native"
const { width, height } = Dimensions.get('window');

export const LoginStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#1a1a1a',
    },
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
    },
    content: {
      flex: 1,
      width: width,
      height: height,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    logo: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    logoText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '600',
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#333',
      borderRadius: 8,
      paddingHorizontal: 16,
      marginBottom: 12,
      color: '#fff',
    },
    loginButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
      marginTop: 50
    },
    loginButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '600',
    },
    registerButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#ff8c00',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    registerButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    googleButton: {
      width: '100%',
      height: 50,
      backgroundColor: '#4285f4',
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 12,
    },
    googleIcon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
    googleButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    forgotPasswordContainer: {
      marginTop: 8,
    },
    forgotPasswordText: {
      color: '#fff',
      fontSize: 14,
    },
  });