import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const myMap = require('../peta/map.html');

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <ScrollView>
            <Text style={styles.title}>My Maps</Text>
            <View style={styles.listitems}>
                <Image source={require('../peta/ccsbenar.jpg')} style={styles.Image} />
                <Text style={styles.caption}>Peta Hujan Wilayah DAS Bogowonto</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/mediantinalah.jpg')} style={styles.Image} />
                <Text style={styles.caption}>Peta Perwilayahan DAS Tinalah</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/panggang.jpg')} style={styles.Image} />
                <Text style={styles.caption}>Peta Habitat Bentik Pulau Panggang</Text>
            </View>
            <View style={styles.listitems}>
                <Image source={require('../peta/1.jpg')} style={styles.Image} />
                <Text style={styles.caption}>Peta Batas Pantai Pantai Demak</Text>
            </View>
        </ScrollView>
    );
}

function MapsScreen() {
    return (
            <WebView
                source={ myMap }/>
    );
}

function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    );
}
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}  >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="home" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Maps" component={MapsScreen} options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="map-marked-alt" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="user" color={color} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
                    tabBarLabel: 'Mahasiswa',
                    tabBarIcon: ({ color, size }) => (
                        <Fontawesome5 name="users" color={'#4C4B16'} size={size} />
                    ),
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MyTabs;
const styles = StyleSheet.create({
    listitems: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        padding: 20,
    },
    Image: {
        width: 200,
        height: 300,
        resizeMode: 'stretch'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
    }
})