import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

interface ContactInfoProps {}

const ContactInfoScreen: React.FC<ContactInfoProps> = () => {
  const navigation = useNavigation();

  const handleSave = () => {
    // Implement save logic here
    console.log('Saving contact information');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()} 
              style={styles.headerButton}
            >
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Contact Information</Text>
          </View>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')} 
            style={styles.headerButton}
          >
            <Icon name="home" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#666"
            />
            
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="#666"
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Save</Text>
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
    padding: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 16,
  },
  inputContainer: {
    gap: 16,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#ff8c00',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ContactInfoScreen;