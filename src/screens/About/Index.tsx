import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AboutMe = () => {
  const handleWhatsAppPress = () => {
    const url = 'https://wa.me/6281386394103'; // Ganti dengan nomor teleponmu
    Linking.openURL(url).catch(err => console.error('Error:', err));
  };

  const handleProfilePress = () => {
    const url = 'https://reyyyyy.vercel.app/'; // Ganti dengan URL profilmu
    Linking.openURL(url).catch(err => console.error('Error:', err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../images/User.jpeg')} // Ganti dengan URL foto profilmu
          style={styles.profileImage}
        />
        <Text style={styles.name}>Reyhansyah</Text>
        <Text style={styles.description}>
          Saya seorang pengembang web/mobile dengan keahlian dalam React dan React Native. Saya sangat antusias dalam menciptakan aplikasi inovatif dan berkualitas tinggi.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <TouchableOpacity onPress={handleWhatsAppPress}>
          <Text style={styles.sectionContents}>
            <Icon name={'logo-whatsapp'} color={'green'} size={18} /> 0813 8639 4103
          </Text>
        </TouchableOpacity>
        <Text style={styles.sectionContents}>
          <Icon name={'logo-instagram'} color={'red'} size={18} /> _rey.2.5
        </Text>
        <TouchableOpacity onPress={handleProfilePress}>
          <Text style={styles.sectionContents}>
            <Icon name={'link-outline'} color={'#6F55E6'} size={18} /> https://reyyyyy.vercel.app/
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Keahlian</Text>
        <Text style={styles.sectionContent}>
          <Icon name={'code-outline'} color={'#333'} size={18} /> JavaScript & TypeScript & PHP{'\n'}
          <Icon name={'logo-react'} color={'#333'} size={18} /> Next, React & React Native{'\n'}
          <Icon name={'logo-html5'} color={'#333'} size={18} /> HTML & CSS{'\n'}
          <Icon name={'color-palette-outline'} color={'#333'} size={18} /> Bootstrap & Tailwind{'\n'}
          <Icon name={'server-outline'} color={'#333'} size={18} /> SQL, MongoDB & Express{'\n'}
          <Icon name={'bulb-outline'} color={'#333'} size={18} /> Bun & HonoJS ( yang ini mah ngarep bjir )
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleWhatsAppPress}>
        <Text style={styles.buttonText}>Hubungi Saya</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#6F55E6',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6F55E6',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  sectionContents: {
    fontSize: 16,
    color: '#6F55E6',
    marginBottom: 10,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#6F55E6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutMe;
