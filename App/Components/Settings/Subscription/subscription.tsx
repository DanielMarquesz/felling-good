import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const SubscriptionScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleHome = () => {
    navigation.navigate('Home');
  };

  const handleSubscribe = () => {
    // Implement subscription logic
    console.log('Subscribing...');
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
            <Text style={styles.headerTitle}>Assinatura</Text>
          </View>
          <TouchableOpacity onPress={handleHome} style={styles.headerButton}>
            <Icon name="home" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Assine agora!</Text>
          <Text style={styles.subtitle}>
            Experimente os benefícios do DailyCare com 5 dias grátis e apenas 5 reais por mês.
          </Text>

          <View style={styles.planContainer}>
            <Text style={styles.planTitle}>Plano de Assinatura</Text>
            <View style={styles.card}>
              <View style={styles.benefitsList}>
                <Text style={styles.benefitItem}>Check-ins diários de bem-estar</Text>
                <Text style={styles.benefitItem}>Notificações de contato</Text>
                <Text style={styles.benefitItem}>Alertas de emergência</Text>
                <Text style={styles.benefitItem}>Configurações de notificação personalizadas</Text>
                <Text style={styles.benefitItem}>Gerenciamento de contatos</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.subscribeButton}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeButtonText}>Assinar por 5 reais</Text>
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
    width: width,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#999',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 32,
  },
  planContainer: {
    marginBottom: 'auto',
  },
  planTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 12,
    padding: 15,
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    color: '#999',
    fontSize: 14,
  },
  subscribeButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  subscribeButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SubscriptionScreen;