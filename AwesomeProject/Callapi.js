import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet, Alert, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking } from 'react-native';
import { Button, ButtonGroup, withTheme } from '@rneui/themed';

const Callapi = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbxBFsMOaYvHlnANv_BEVYRMauzOLKAqFIsYLLHKQZMUt9T4SVwRq3ZLbpbQNKAJurU/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }



    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                    style={styles.bg}
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.card}>
                                    {/* <View style={styles.avatar}>
                                        <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                    </View> */}
                                    <View>
                                        <Text style={styles.cardtitle}>{item.nama}</Text>
                                        <Text style={styles.cardjenis}>{item.jenis}</Text>
                                        <Text style={styles.description}>{item.deskripsi}</Text>
                                        {/* <Text>{item.kelas}</Text>
                                        <Text>{item.jeniskelamin}</Text> */}
                                    </View>
                                    
                                    
                                </View>
                                <View style={styles.form}>
                                    {/* <Button title="LOKASI"  onPress={() => Linking.openURL('google.navigation:q=' + (item.latitude) + ',' + (item.longitude))} color={'black'} borderRadius={'3'}
                                    /> */}
                                    <Button
                                        title="LOKASI"
                                        buttonStyle={{
                                            borderColor: '#B73E3E',
                                            borderWidth: 2,
                                          }}
                                        containerStyle={{
                                            width: '100%',
                                        }}
                                        type="outline"
                                        titleStyle={{ color: '#B73E3E'}}
                                        onPress={() => Linking.openURL('google.navigation:q=' + (item.latitude) + ',' + (item.longitude))}
                                    />
                                </View>

                            </View>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Callapi

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    avatar: {
        borderRadius: 100,
        width: 80,

    },
    cardtitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    cardjenis: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'grey',
    },
    card: {
        flexDirection: 'row',
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
    form: {
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    description: {
        color: 'black',
        textAlign: 'justify'
    },
    bg : {
        backgroundColor: '#F0EBE3'
    }
})