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
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type SettingsCardProps = {
  title: string;
  description: string;
  onPress: () => void;
};

const SettingsCard: React.FC<SettingsCardProps> = ({ title, description, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </TouchableOpacity>
);

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  const handleNotificationSettings = () => {
    navigation.navigate('SettingsNavigation');
  };

  const handleContactSettings = () => {
    navigation.navigate('Contact');
  };

  const handleSubscription = () => {
    navigation.navigate('Subscription');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
          <TouchableOpacity onPress={handleHome} style={styles.headerButton}>
            <Icon name="home" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <SettingsCard
            title="Notification Settings"
            description="Set the amount of requests per day"
            onPress={handleNotificationSettings}
          />
          <SettingsCard
            title="Contact Management"
            description="Manage emergency contacts"
            onPress={handleContactSettings}
          />
          <SettingsCard
            title="Subscription Options"
            description="Manage your subscription"
            onPress={handleSubscription}
          />
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    padding: 5,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 15,
  },
  content: {
    flex: 1,
    width: width,
    height: height,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  cardDescription: {
    color: '#999',
    fontSize: 14,
  },
});

export default SettingsScreen;
