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

type ContactCardProps = {
  name: string;
  whatsapp: string;
  notifyAt: string;
  onDelete: () => void;
  onEdit: () => void;
};

const ContactCard: React.FC<ContactCardProps> = ({ name, whatsapp, notifyAt, onDelete, onEdit }) => (
  <View style={styles.card}>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>WhatsApp: {whatsapp}</Text>
      <Text style={styles.cardDescription}>Notify at: {notifyAt}</Text>
    </View>
    <View style={styles.contactActions}>
      <TouchableOpacity onPress={onDelete} style={[styles.actionButton, styles.deleteButton]}>
        <Text style={styles.actionButtonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onEdit} style={[styles.actionButton, styles.editButton]}>
        <Text style={styles.actionButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ContactScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  const handleAdd = () => {
    navigation.navigate('ContactInfo');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={handleBack} style={styles.headerButton}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Contacts</Text>
          </View>
          <TouchableOpacity onPress={handleHome} style={styles.headerButton}>
            <Icon name="home" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <ContactCard
            name="Sarah Johnson"
            whatsapp="+123456789"
            notifyAt="Morning"
            onDelete={() => {}}
            onEdit={() => {}}
          />
          <ContactCard
            name="Michael Smith"
            whatsapp="+987654321"
            notifyAt="Evening"
            onDelete={() => {}}
            onEdit={() => {}}
          />
        </View>

        {/* Floating Action Button */}
        <TouchableOpacity style={styles.fab} onPress={handleAdd}>
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>
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
    borderRadius: 12,
    marginBottom: 15,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#999',
    fontSize: 14,
    marginTop: 2,
  },
  contactActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    gap: 8,
  },
  actionButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  deleteButton: {
    backgroundColor: '#ff8c00',
  },
  editButton: {
    backgroundColor: '#444',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default ContactScreen;