// components/Gallery.tsx
import React, { useState, useCallback } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, Alert, View, Text, ImageSourcePropType, Modal, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

// Definisikan tipe untuk item gambar
interface ImageItem {
  id: string;
  uri: ImageSourcePropType;
  description: string;
}

// Data gambar dengan deskripsi
const images: ImageItem[] = [
  // Data gambar yang sama seperti sebelumnya
  { id: '1', uri: require('../images/img-1.jpg'), description: 'Pegunungan dengan langit cerah' },
  { id: '2', uri: { uri: 'https://images.unsplash.com/photo-1723417953479-e28b33dd2961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D' }, description: 'beautiful sunrise mountain nature' },
  { id: '3', uri: { uri: 'https://images.unsplash.com/photo-1708162664628-6913e8797929?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, description: 'small boat in the middle of a beautiful beach' },
  { id: '4', uri: { uri: 'https://images.unsplash.com/photo-1723766700475-3f8f1d3c0c1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'}, description: 'beutiful desert scenery at night' },
  { id: '5', uri: { uri: 'https://images.unsplash.com/photo-1723643136002-d49a1d7309d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'}, description: 'Viewpoint from the bottom of building to sky' },
  { id: '6', uri: { uri: 'https://images.unsplash.com/photo-1723441857662-d465a52e78d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D'}, description: 'Starry night from the top of the mountain' },
  { id: '7', uri: { uri: 'https://images.unsplash.com/photo-1724093829687-8a5c22bde17f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'}, description: 'Pegunungan dengan kabut' },
  { id: '8', uri: { uri: 'https://images.unsplash.com/photo-1710830549028-8d008023c72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D'}, description: 'Jalanan kota saat matahari terbenam' },
  { id: '9', uri: { uri: 'https://images.unsplash.com/photo-1719094251938-e596af9261de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D'}, description: 'Detail arsitektur modern' },
  { id: '10', uri: { uri: 'https://plus.unsplash.com/premium_photo-1723433351321-42e35c4b21e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTV8fHxlbnwwfHx8fHw%3D'}, description: 'Pantai dengan matahari terbenam' },
  { id: '11', uri: { uri: 'https://images.unsplash.com/photo-1723945256680-16e404be223b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D'}, description: 'Bunga liar di pedesaan' },
  { id: '12', uri: { uri: 'https://images.unsplash.com/photo-1723983548529-d6bc1bebdc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'}, description: 'Contoh gambar tambahan' }, // Gambar tambahan untuk pagination
  { id: '13', uri: { uri: 'https://images.unsplash.com/photo-1722545428077-ed01c3fded9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'}, description: 'Contoh gambar tambahan' }, 
  { id: '14', uri: { uri: 'https://images.unsplash.com/photo-1723594320558-d44cd861bb6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'}, description: 'Contoh gambar tambahan' }, 
  { id: '15', uri: { uri: 'https://images.unsplash.com/photo-1723369124721-180613159c78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D'}, description: 'Contoh gambar tambahan' }, 
  { id: '16', uri: { uri: 'https://images.unsplash.com/photo-1723309552998-785d257747d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D'}, description: 'Contoh gambar tambahan' }, 
  { id: '17', uri: { uri: 'https://images.unsplash.com/photo-1724123519061-9bea8416b1ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D'}, description: 'Contoh gambar tambahan' }, 
  { id: '18', uri: { uri: 'https://images.unsplash.com/photo-1723633740076-6dbbc648d753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4OHx8fGVufDB8fHx8fA%3D%3D'}, description: 'Contoh gambar tambahan' },
  { id: '19', uri: { uri: 'https://images.unsplash.com/photo-1447357704087-5de405e80f38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWlkZGxlJTIwZWFydHxlbnwwfHwwfHx8MA%3D%3D'}, description: 'Contoh gambar tambahan' },
  { id: '20', uri: { uri: 'https://images.unsplash.com/photo-1549492470-71a570de8e05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pZGRsZSUyMGVhcnR8ZW58MHx8MHx8fDA%3D'}, description: 'Contoh gambar tambahan' },
  { id: '21', uri: { uri: 'https://images.unsplash.com/photo-1577460551100-907ba84418ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1pZGRsZSUyMGVhcnR8ZW58MHx8MHx8fDA%3D'}, description: 'Contoh gambar tambahan' },
  { id: '22', uri: { uri: 'https://images.unsplash.com/photo-1529599087-bcf1dc4a7ae4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1pZGRsZSUyMGVhcnR8ZW58MHx8MHx8fDA%3D'}, description: 'Contoh gambar tambahan' }, 
  { id: '23', uri: { uri: 'https://images.unsplash.com/photo-1513612316413-74356aac7342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1pZGRsZSUyMGVhcnR8ZW58MHx8MHx8fDA%3D'}, description: 'Contoh gambar tambahan' },
  // Tambahkan lebih banyak gambar jika perlu
];

// Komponen CardImage
const CardImage: React.FC<{ uri: ImageSourcePropType; description: string }> = ({ uri, description }) => {
  const [liked, setLiked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const goToComments = () => {
    navigation.navigate('Comment'); // Pastikan 'Comment' adalah nama rute yang benar dalam navigasi Anda
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleShare = () => {
    Alert.alert('Berbagi gambar!');
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={uri} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={handleLike}>
            <Icon name="heart" size={24} color={liked ? 'red' : 'black'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Icon name="share" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={goToComments}>
          <Text style={styles.link}>View Comments</Text>
        </TouchableOpacity>
      </View>

      {/* Modal untuk menampilkan gambar ukuran asli */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
          <Image source={uri} style={styles.modalImage} resizeMode="contain" />
        </View>
      </Modal>
    </View>
  );
};

// Komponen Gallery dengan Pagination
const Gallery: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(11);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = images.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderItem = useCallback(({ item }: { item: ImageItem }) => (
    <CardImage uri={item.uri} description={item.description} />
  ), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={currentItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.columnWrapper}
      />
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 1}>
          <Icon name="chevron-left" size={24} color={currentPage === 1 ? 'gray' : 'black'} />
        </TouchableOpacity>
        <View style={styles.pageNumbers}>
          {[...Array(totalPages).keys()].map(page => (
            <TouchableOpacity key={page + 1} onPress={() => handlePageChange(page + 1)} style={styles.pageNumber}>
              <Text style={[styles.pageNumberText, currentPage === page + 1 && styles.activePage]}>{page + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={handleNextPage} disabled={currentPage === totalPages}>
          <Icon name="chevron-right" size={24} color={currentPage === totalPages ? 'gray' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  iconButton: {
    padding: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  pageNumbers: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  pageNumber: {
    marginHorizontal: 5,
  },
  pageNumberText: {
    fontSize: 16,
    color: 'black',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  modalImage: {
    width: '100%',
    height: '80%',
  },
  activePage: {
    fontWeight: 'bold',
  },
  link: {
    marginTop: 5,
    fontSize: 11,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default Gallery;
