import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
  ViewToken,
} from 'react-native';

interface CarouselProps {
  images: string[];
}

const {width} = Dimensions.get('window');

const Carousel: React.FC<CarouselProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  };

  const handleViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    },
  ).current;

  return (
    <View style={styles.carouselContainer}>
        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.imageContainer}>
              <Image source={{uri: item}} style={styles.image} />
            </View>
          )}
          ref={flatListRef}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 200, // Atur tinggi sesuai kebutuhan
    position: 'relative',
  },
  imageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10, // Posisi pagination dari bagian bawah container
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'black',
    width: 14,
  },
  inactiveDot: {
    backgroundColor: 'black',
  },
});

export default Carousel;
