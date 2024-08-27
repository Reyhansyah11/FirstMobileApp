import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface CommentProps {
  id: string;
  username: string;
  comment: string;
  time: string;
  avatar: string;
}

const commentsData: CommentProps[] = [
  {
    id: '1',
    username: 'john_doe',
    comment: 'This is amazing!',
    time: '2h',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '2',
    username: 'jane_doe',
    comment: 'Love this!',
    time: '3h',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '3',
    username: 'alice_smith',
    comment: 'Great work, keep it up!',
    time: '4h',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '4',
    username: 'charlie_brown',
    comment: 'Impressive!',
    time: '5h',
    avatar:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '5',
    username: 'david_jones',
    comment: 'Can’t wait to see more!',
    time: '6h',
    avatar:
      'https://images.unsplash.com/photo-1536084006720-6c105926e135?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '6',
    username: 'emily_clark',
    comment: 'Amazing content!',
    time: '7h',
    avatar:
      'https://images.unsplash.com/photo-1494510669218-6174f28694b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: '7',
    username: 'frank_wright',
    comment: 'This is inspiring!',
    time: '8h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '8',
    username: 'george_king',
    comment: 'Well done!',
    time: '9h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '9',
    username: 'hannah_scott',
    comment: 'Really like this!',
    time: '10h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '10',
    username: 'isaac_williams',
    comment: 'Fantastic!',
    time: '11h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '11',
    username: 'jessica_hill',
    comment: 'Amazing details!',
    time: '12h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '12',
    username: 'kevin_brown',
    comment: 'So cool!',
    time: '13h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '13',
    username: 'laura_white',
    comment: 'I absolutely love this!',
    time: '14h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '14',
    username: 'michael_smith',
    comment: 'This is top notch!',
    time: '15h',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '15',
    username: 'natalie_jones',
    comment: 'Brilliant work!',
    time: '16h',
    avatar: 'https://via.placeholder.com/150',
  },
];

const CommentScreen: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>(commentsData);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim().length > 0) {
      const comment: CommentProps = {
        id: (comments.length + 1).toString(),
        username: 'your_username', // Ubah sesuai nama pengguna Anda
        comment: newComment,
        time: '1m', // Waktu posting bisa disesuaikan
        avatar: 'https://via.placeholder.com/150', // Ubah sesuai avatar Anda
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const renderComment = ({item}: {item: CommentProps}) => (
    <View style={styles.commentContainer}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.commentContent}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.commentList}
      />

      <View style={styles.addCommentContainer}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Add a comment..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddComment} style={styles.postButton}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  commentContent: {
    marginLeft: 10,
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  commentList: {
    marginBottom: 10,
  },
  addCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    marginRight: 10,
  },
  postButton: {
    backgroundColor: '#0095f6',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CommentScreen;
