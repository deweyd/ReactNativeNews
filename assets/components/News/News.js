import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ImageBackground} from 'react-native';
import data from '../../data.json'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import useApiAll from "../apiAll";

const News = ({ route }) => {
    const navigation = useNavigation();
    const { selectedItem, selectedTitle } = route.params;
    const news = useApiAll(selectedItem);

    return (
        <View style={styles.top}>
            <Header/>
            <StatusBar style="auto" />
            <Text style={styles.title_}>{selectedTitle}</Text>
            <FlatList
                data={news.news}
                style={styles.container}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item })}>
                        <ImageBackground
                            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/my-project-56788.appspot.com/o/kisspng-business-click-ecommerce-web-agency-service-plas-no-photo-5b2c4658b95cb8.1567866915296282487593%20(1).png?alt=media&token=bb6b4437-a548-44aa-8f29-9c184450444f' }}
                            style={styles.image}
                        >
                            <Image source={{ uri: item.urlToImage }} style={styles.image} />
                        </ImageBackground>
                        <View style={styles.text}>
                            {/*<Text style={styles.subtitle}>{item.title}</Text>*/}
                            <Text numberOfLines={4} style={styles.content}>{item.title}</Text>
                            <Text numberOfLines={2} style={styles.details}>
                                Published by {item.author} on {new Date(item.publishedAt).toLocaleDateString()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 150,
        marginBottom: 100,
        backgroundColor: '#fff',
    },
    top: {
        marginTop: 0
    },
    text: {
        display: "flex",
        flexDirection: "column",
        width: "60%",
    },
    articleContainer: {
        display: "flex",
        flexDirection: "row"
    },
    image: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        marginBottom: 10,
        marginRight: 10
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 3,
        marginTop: -3
    },
    content: {
        fontSize: 18,
        color: '#666',
        marginBottom: 5
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: '#666',
        marginBottom: 15,

    },
    title_: {
        fontSize: 25,
        color: '#666',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10
    },
    details: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
        paddingBottom: 10
    },
});

export default News;