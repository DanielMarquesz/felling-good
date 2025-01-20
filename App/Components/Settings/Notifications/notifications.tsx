import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Switch,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

type NotificationPeriod = {
  id: string;
  label: string;
  enabled: boolean;
};

const NotificationSettingsScreen: React.FC = () => {
  const [periods, setPeriods] = useState<NotificationPeriod[]>([
    { id: 'morning', label: 'Morning', enabled: true },
    { id: 'afternoon', label: 'Afternoon', enabled: false },
    { id: 'evening', label: 'Evening', enabled: false },
  ]);

  const handleToggle = (id: string) => {
    setPeriods(periods.map(period => 
      period.id === id ? { ...period, enabled: !period.enabled } : period
    ));
  };

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  const { width, height } = useWindowDimensions(); // Adjust dimensions for reactivity

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
              <Icon name="arrow-back" size={24} color="#fff" /> {/* Use Icon from react-native-vector-icons */}
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
          <TouchableOpacity onPress={handleHome} style={styles.headerButton}>
            <Icon name="home" size={24} color="#fff" /> {/* Use Icon from react-native-vector-icons */}
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>

          {/* Notification Toggles */}
          <View style={styles.togglesContainer}>
            {periods.map(period => (
              <View key={period.id} style={styles.toggleRow}>
                <Text style={styles.toggleLabel}>{period.label}</Text>
                <Switch
                  value={period.enabled}
                  onValueChange={() => handleToggle(period.id)}
                  trackColor={{ false: '#666', true: '#ff8c00' }}
                  thumbColor="#fff"
                />
              </View>
            ))}
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
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
  },
  togglesContainer: {
    marginTop: 10,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  toggleLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NotificationSettingsScreen;
