import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface TestimonialProps {
  profileImage: ImageSourcePropType;
  userName: string;
  jobPosition: string;
  description: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ profileImage, userName, jobPosition, description }) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.jobPosition}>{jobPosition}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  jobPosition: {
    fontSize: 14,
    color: '#777',
  },
  companyLogo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default Testimonial;
