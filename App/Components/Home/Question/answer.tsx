import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const CheckIcon = () => (
  <Svg width="100" height="100" viewBox="0 0 100 100">
    <Path
      d="M20 50l20 20 40-40"
      stroke="#32CD32"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </Svg>
);

const AnswerScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSettings = () => {
    navigation.navigate('Settings'); // Navega para a tela de configurações
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>You are Fine!</Text>
          
          <View style={styles.cardContainer}>
            <View style={styles.iconContainer}>
              <CheckIcon />
            </View>
            <Text style={styles.message}>Good to know!</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,        
    borderBottomColor: '#333',   
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIcon: {
    color: '#fff',
    fontSize: 24,
  },
  content: {
    flex: 1,
    width: width,
    height: height,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 30,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AnswerScreen;
