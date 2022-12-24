import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Entypo, Octicons } from '@expo/vector-icons';

const Main = ({ colorScheme, data }) => {
  const {
    html_url,
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    blog,
    twitter_username,
    company,
  } = data;
  return (
    <View className='bg-white dark:bg-lightBlue' style={styles.container}>
      <View className='flex-row items-center'>
        <Image
          source={require('../assets/user.png')}
          className='w-28 h-28 rounded-full'
        />

        <View className='ml-4'>
          <Text className='text-black dark:text-white text-xl font-bold'>
            {name ? name : 'The Octobat'}
          </Text>
          <Text className='text-primary font-bold text-lg my-1'>@octobat</Text>
          <Text className='text-primaryLight dark:text-white text-lg opacity-60'>
            Joined 25 Jan 2001
          </Text>
        </View>
      </View>
      <Text className='text-primaryLight dark:text-white text-xl mt-5 opacity-70'>
        This profile has no bio
      </Text>
      {/* followers */}
      <View className='flex-row justify-between bg-light dark:bg-darkBlue mt-5 p-5 rounded-xl'>
        <View className='items-center'>
          <Text className='text-lightBlue dark:text-white mb-2'>Repos</Text>
          <Text className='text-lightBlue dark:text-white'>0</Text>
        </View>
        <View className='items-center'>
          <Text className='text-lightBlue dark:text-white mb-2'>Followers</Text>
          <Text className='text-lightBlue dark:text-white'>0</Text>
        </View>
        <View className='items-center'>
          <Text className='text-lightBlue dark:text-white mb-2'>Following</Text>
          <Text className='text-lightBlue dark:text-white'>0</Text>
        </View>
      </View>
      {/* Links */}
      <View className='mt-5 space-y-6'>
        <View className='flex-row items-center'>
          <Entypo
            name='location-pin'
            size={28}
            color={colorScheme === 'light' ? '#4b6a9b' : '#fff'}
          />
          <Text className='ml-2 text-primaryLight dark:text-white opacity-70 text-lg'>
            Not available
          </Text>
        </View>
        <View className='flex-row items-center'>
          <Entypo
            name='link'
            size={28}
            color={colorScheme === 'light' ? '#4b6a9b' : '#fff'}
          />
          <Text className='ml-2 text-primaryLight dark:text-white opacity-70 text-lg'>
            Not available
          </Text>
        </View>
        <View className='flex-row items-center'>
          <Entypo
            name='twitter'
            size={28}
            color={colorScheme === 'light' ? '#4b6a9b' : '#fff'}
          />
          <Text className='ml-2 text-primaryLight dark:text-white opacity-70 text-lg'>
            Not available
          </Text>
        </View>
        <View className='flex-row items-center'>
          <Octicons
            name='organization'
            size={28}
            color={colorScheme === 'light' ? '#4b6a9b' : '#fff'}
          />
          <Text className='ml-2 text-primaryLight dark:text-white opacity-70 text-lg'>
            Not available
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
