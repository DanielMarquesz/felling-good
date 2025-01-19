import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const QuestionMarkIcon = () => (
  <Svg width="120" height="120" viewBox="0 0 120 120">
    <Circle
      cx="60"
      cy="60"
      r="55"
      fill="none"
      stroke="#0099ff"
      strokeWidth="5"
    />
    <Path
      d="M60 85a5 5 0 100 10 5 5 0 000-10zm0-55c-11 0-20 9-20 20 0 2.8 2.2 5 5 5s5-2.2 5-5c0-5.5 4.5-10 10-10s10 4.5 10 10c0 5.5-4.5 10-10 10-2.8 0-5 2.2-5 5v15c0 2.8 2.2 5 5 5s5-2.2 5-5V65.9c8.3-2.5 14.3-10.2 14.3-19.2C79.3 35.7 70.7 30 60 30z"
      fill="#0099ff"
    />
  </Svg>
);

const HomeScreen: React.FC = () => {

  const navigation = useNavigation();

  const handleAnswer = () => {
    navigation.navigate('Answer');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Home</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.question}>How are you feeling today?</Text>
          
          <View style={styles.iconContainer}>
            <QuestionMarkIcon />
          </View>

          <TouchableOpacity style={styles.okButton} onPress={handleAnswer}>
            <Text style={styles.okButtonText}>Ok</Text>
          </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: '600',
  },
  settingsButton: {
    padding: 5,
  },
  settingsIcon: {
    color: '#fff',
    fontSize: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 40,
    textAlign: 'center',
  },
  iconContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#333',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  okButton: {
    backgroundColor: '#ff8c00',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  okButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;