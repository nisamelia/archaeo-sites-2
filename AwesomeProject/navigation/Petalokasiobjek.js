import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, StyleSheet, ScrollView, f } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Callapi from '../Callapi';
import { Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

//Form input dari github pages
const forminput = 'https://nisamelia.github.io/pgpbl-12-react-native/';

//Peta web dari github pages
const webmap = 'https://nisamelia.github.io/pgpbl-12-react-native/map.html';

function HomeScreen() {
    return (
        <ScrollView style={styles.bgHome}>
            <View style={styles.card}>
                <Image source={require('../peta/berita1.jpg')} style={styles.img} />
                <View>
                    <Text style={styles.title}>Arkeolog Temukan Saluran Air Kuno di Situs Keraton Pleret</Text>
                    <Text style={styles.caption}>Dinas Kebudayaan (Disbud) DIY melalui Seksi Pemeliharaan Warisan Budaya Benda, Bidang Pemeliharaan dan Pengembangan Warisan Budaya dan Seksi Museum, telah menyelesaikan ekskavasi atau penggalian arkeologis benteng sisi barat yang disebut Kedaton IV</Text>
                    <Text style={styles.more} onPress={() => Linking.openURL('https://rejogja.republika.co.id/berita/rrj873291/arkeolog-temukan-saluran-air-kuno-di-situs-keraton-pleret')}>Selengkapnya...</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../peta/berita2.png')} style={styles.img} />
                <View>
                    <Text style={styles.title}>Balai Arkeologi DIY: Siswa, Ini Sejarah Kerajaan Mataram Kuno</Text>
                    <Text style={styles.caption}>Seperti dilansir dari laman Balai Arkeologi Daerah Istimewa Yogyakarta (DIY) Kemendikbud Ristek, ada hasil penelitian mengenai pusat Kerajaan Mataram Kuno dan Kawasan Lereng Timur Merapi 2018.</Text>
                    <Text style={styles.more} onPress={() => Linking.openURL('https://edukasi.kompas.com/read/2022/01/24/112818271/balai-arkeologi-diy-siswa-ini-sejarah-kerajaan-mataram-kuno?page=all')}>Selengkapnya...</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../peta/berita3.webp')} style={styles.img} />
                <View>
                    <Text style={styles.title}>Pelestarian Candi Borobudur Tak Hanya Tugas Arkeolog</Text>
                    <Text style={styles.caption}>Pembahasan soal kelestarian Candi Borobudur tidak hanya ditinjau dari aspek arkeologi saja.</Text>
                    <Text style={styles.more} onPress={() => Linking.openURL('https://radarjogja.jawapos.com/jawa-tengah/653107578/pelestarian-candi-borobudur-tak-hanya-tugas-arkeolog')}>Selengkapnya...</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('../peta/berita4.jpg')} style={styles.img} />
                <View>
                    <Text style={styles.title}>Tim Arkeolog Dinas Kebudayaan DIY Temukan Saluran Air Kuno di Pleret Bantul</Text>
                    <Text style={styles.caption}>Dinas Kebudayaan (Kundha Kabudayan) Daerah Istimewa Yogyakarta (DIY) menyelesaikan ekskavasi Kedaton IV di Situs Keraton Pleret, Kapanewon Pleret, Kabupaten Bantul pada Senin (13/3/2023).</Text>
                    <Text style={styles.more} onPress={() => Linking.openURL('https://yogyakarta.kompas.com/read/2023/03/16/072331278/tim-arkeolog-dinas-kebudayaan-diy-temukan-saluran-air-kuno-di-pleret?page=all')}>Selengkapnya...</Text>
                </View>
            </View>
        </ScrollView>

    );
}

function MapsScreen() {
    return (
        <WebView
            source={{ uri: webmap }} />
    );
}
function AddDataScreen() {
    return (
        <WebView
            source={{ uri: forminput }} />
    );
}

function ProfileScreen() {
    return (
        // <View>
        //     <Portofolio />
        // </View>
        <View style={styles.screen}>
            <View>
                {/* <Image
                source={{uri: 'https://disk.mediaindonesia.com/files/news/2022/12/30/WhatsApp%20Image%202022-12-22%20at%2017.06.59.jpg'}}
                ></Image> */}
                {/* <Image
                    source={{
                        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
                    }}
                    style={{ width: 400, height: 400, borderRadius: 400 / 2 }}
                /> */}
                <Image
                    style={styles.image}
                    source={{ uri: 'https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg' }}
                    resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
                />
            </View>
            <View>
                <Text style={styles.headerText}>Nisa Amelia</Text>
            </View>
            <View>
                <Text style={styles.textStyle}>Mahasiswa</Text>
            </View>
            <View>
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20} />
                        <Text style={{ color: "black", marginLeft: 20}}>Yogyakarta, Indonesia</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20} />
                        <Text style={{ color: "black", marginLeft: 20 }}>08123456789</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20} />
                        <Text style={{ color: "black", marginLeft: 20 }}>nisa.amelia@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text color="#B73E3E">FAVOURITES</Text>
                        <Text color="#B73E3E">0</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.inner}>
                        <Text>VISITED</Text>
                        <Text>0</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
function MhsScreen() {
    return (
        <View>
            <Callapi />
        </View>
    );
}

function MyTabs() {
    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarStyle: {
                        backgroundColor: 'white',
                        borderTopWidth: 0,
                    },
                    headerStyle: {
                        backgroundColor: '#B73E3E',

                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    // tabBarLabel: 'Home',


                    tabBarIcon: ({ focused, size }) => (
                        <Fontawesome5 name="home" color={focused ? '#B73E3E' : 'grey'} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Maps" component={MapsScreen} options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ focused, size }) => (
                        <Fontawesome5 name="map" color={focused ? '#B73E3E' : 'grey'} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen} options={{
                    tabBarLabel: 'Add Data',
                    tabBarIcon: ({ focused, size }) => (
                        <Fontawesome5 name="plus-square" color={focused ? '#B73E3E' : 'grey'} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="List Data" component={MhsScreen} options={{
                    tabBarLabel: 'List Data',
                    tabBarIcon: ({ focused, size }) => (
                        <Fontawesome5 name="list-ul" color={focused ? '#B73E3E' : 'grey'} size={size} />
                    ),
                }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ focused, size }) => (
                        <Fontawesome5 name="user" color={focused ? '#B73E3E' : 'grey'} size={size} />
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
        fontSize: 15,
        textAlign: 'justify',
    },
    more: {
        fontSize: 15,
        textAlign: 'center',
        color: "#0079EF",
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: "#000000",
    },
    container: {
        marginHorizontal: 20,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    cardtitle: {
        fontSize: 13.3,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'column',
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 20,
        marginVertical: 7
    },
    img: {
        width: "100%",
        height: 150,
    },
    navbg: {
        backgroundColor: '#DD5353'
    },
    screen: {
        // flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#F0EBE3'
    },
    imageContainer: {
        width: 400,
        height: 400,
        borderRadius: 400 / 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 5,

    },
    image: {
        // // width: '100%',
        // // height: 100,
        // borderRadius: '50%'
        width: 80,
        height: 80,
        // borderColor: '#DD5353',
        // borderWidth: 3,
        borderRadius: 37.5,

    },
    headerText: {
        fontSize: 20,
        paddingTop: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'center',
    },
    container2: {
        width: '100%',
        height: '85%',
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    box: {
        width: '50%',
        height: 70,
        borderColor: 'black',
    },
    inner: {
        flex: 1,
        backgroundColor: '#F0EBE3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    bgHome: {
        backgroundColor: '#F0EBE3'
    }
});