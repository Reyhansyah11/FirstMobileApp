import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';

interface DetailScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const DetailScreen: React.FC<DetailScreenProps> = ({navigation}) => {
  const images: string[] = [
    'https://images.unsplash.com/photo-1723227300708-1ff74add4195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzN8fHxlbnwwfHx8fHw%3D',
    'https://images.unsplash.com/photo-1723908183237-d8af011f465d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1708162664628-6913e8797929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const testimonialsData = [
    {
      profileImage: {
        uri: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      userName: 'John Doe',
      jobPosition: 'Software Engineer',
      description:
        'Saya sangat puas dengan layanan yang diberikan. Pengalaman saya bekerja dengan tim ini sangat luar biasa.',
    },
    {
      profileImage: {
        uri: 'https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      userName: 'Jane Smith',
      jobPosition: 'Product Manager',
      description:
        'Tim ini sangat profesional dan hasil kerja mereka melampaui ekspektasi saya. Saya sangat merekomendasikan mereka.',
    },
    {
      profileImage: {
        uri: 'https://images.unsplash.com/photo-1525873765963-8931ab571545?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      },
      userName: 'Alice Johnson',
      jobPosition: 'UX Designer',
      description:
        'Pengalaman bekerja dengan tim ini sangat menyenangkan dan saya sangat puas dengan hasil akhirnya.',
    },
    {
      profileImage: {
        uri: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob3RvJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
      },
      userName: 'Michael Brown',
      jobPosition: 'Graphic Designer',
      description:
        'Layanan yang luar biasa dan hasil akhir yang sempurna. Saya sangat senang dengan pengalaman ini.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Carousel images={images} />

      <View style={styles.Btn}>
        <TouchableOpacity
          style={styles.touchableButton}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.linkBack}>
            <Icon name="arrow-left" color="blue" style={styles.iconPrev} />
            <Text style={styles.linkText}>Kembali</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.touchableButton}
          onPress={() => navigation.navigate('About')}>
          <View style={styles.linkBack}>
            <Text style={styles.linkText}>About</Text>
            <Icon name="arrow-right" color="blue" style={styles.iconPrev} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            profileImage={testimonial.profileImage}
            userName={testimonial.userName}
            jobPosition={testimonial.jobPosition}
            description={testimonial.description}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconPrev: {
    marginHorizontal: 10,
  },
  Btn: {
    flexDirection: 'row',
  },
  touchableButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default DetailScreen;
