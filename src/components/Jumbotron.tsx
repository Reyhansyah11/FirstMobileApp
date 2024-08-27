import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';

const { width, height } = Dimensions.get('window');

interface JumbotronProps {
  imageSrc: ImageSourcePropType;
  title: string;
  subtitle?: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ imageSrc, title, subtitle }) => {
  return (
    <ImageBackground source={imageSrc} style={styles.jumbotron}>
      <View style={styles.textContainer}>
        <Text className='font-extrabold text-2xl text-white'>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  jumbotron: {
    width: width,
    height: height * 0.3, // Set to 30% of screen height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#rgba(0,0,0,0.8)', // Optional overlay to improve text readability
  },
  textContainer: {
    alignItems: 'center',
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    elevation: 3,
  },
});

export default Jumbotron;
