import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

const Header = ({ toggleColorScheme, colorScheme }) => {
  return (
    <View className='flex-row justify-between mt-8'>
      <Text className='text-xl text-primaryLight dark:text-light'>
        DevFinder.
      </Text>
      <TouchableOpacity
        className='flex-row items-center'
        onPress={toggleColorScheme}
      >
        <Text className='text-xl text-primaryLight dark:text-light mr-2'>
          {colorScheme === 'dark' ? 'LIGHT' : 'DARK'}
        </Text>
        {colorScheme === 'dark' ? (
          <Feather name='sun' size={24} color='#fff' />
        ) : (
          <Feather name='moon' size={26} color='#4b6a9b' />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
