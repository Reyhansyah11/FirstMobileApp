// HomeScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Jumbotron from '../components/Jumbotron';
import Gallery from '../components/Gallery';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Jumbotron
        imageSrc={{ uri: 'https://images.unsplash.com/photo-1723569575972-e669a0917cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzZ8fHxlbnwwfHx8fHw%3D' }} // Ganti dengan URL gambar yang sesuai
        title="Selamat Datang"
        subtitle="Ini adalah Aplikasi Pertama Saya"
      />
      <Gallery />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
