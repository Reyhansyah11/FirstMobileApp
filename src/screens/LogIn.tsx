import React, { useState } from 'react';
import { TextInput, View, Text, Pressable } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logic untuk login
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View className="flex-1 justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <View className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <Text className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</Text>
        
        <TextInput
          className="w-full bg-gray-100 p-4 rounded-lg mb-4 border border-gray-300 focus:border-blue-500 focus:bg-white"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
        
        <TextInput
          className="w-full bg-gray-100 p-4 rounded-lg mb-6 border border-gray-300 focus:border-blue-500 focus:bg-white"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#888"
        />
        
        <Pressable 
          className="w-full bg-blue-600 p-4 rounded-lg active:bg-blue-700"
          onPress={handleLogin}
        >
          <Text className="text-white text-center font-semibold text-lg">Login</Text>
        </Pressable>

        <Text className="text-gray-600 text-center mt-4">
          Don't have an account? 
          <Text className="text-blue-500 font-semibold"> Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
