import { Platform, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useColorScheme } from 'nativewind';
import { StatusBar as SB } from 'expo-status-bar';
import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main';
import { useState } from 'react';

const API_URL = 'https://api.github.com/users';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [user, setUser] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/${user}`);
    const data = await response.json();
    if (response.status === 200) {
      setData(data);
    } else return;
  };

  return (
    <SafeAreaView
      style={styles.androidSafeView}
      className='flex-1 bg-light dark:bg-darkBlue px-5'
    >
      <Header toggleColorScheme={toggleColorScheme} colorScheme={colorScheme} />
      <Search
        colorScheme={colorScheme}
        setUser={setUser}
        fetchData={fetchData}
      />
      <Main colorScheme={colorScheme} data={data} />
      <SB style={colorScheme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeView: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : null,
  },
});
