import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Search = ({ colorScheme, setUser, fetchData }) => {
  return (
    <View className='bg-white dark:bg-lightBlue' style={styles.container}>
      <View className='flex-row items-center'>
        <Feather name='search' size={32} color='#0079ff' />
        <TextInput
          placeholder='Search...'
          placeholderTextColor={colorScheme === 'light' ? '#4b6a9b' : '#fff'}
          onChangeText={(val) => setUser(val)}
          className='ml-1 p-2 pr-5 text-xl text-primaryLight dark:text-white w-56'
        />
      </View>
      <TouchableOpacity
        className='bg-primary py-2 px-4 rounded-xl'
        onPress={fetchData}
      >
        <Text className='text-white text-lg'>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    padding: 15,
    borderRadius: 15,
  },
});
