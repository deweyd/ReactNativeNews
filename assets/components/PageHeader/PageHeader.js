import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground} from 'react-native';
import data from '../../data.json'
import Header from "../Header/Header";
import useApiAll from "../apiAll";
import React from "react";
import { useNavigation } from '@react-navigation/native';


export default function PageHeader({ route }) {
    const { selectedItem, selectedTitle } = route.params;
    const navigation = useNavigation();
    const news = useApiAll(selectedItem);
    console.log(selectedItem)
    console.log(news.news)
    return (
        <ScrollView>
            <Header/>
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


        </ScrollView>
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
    subtitles: {
        fontSize: 18,
        marginBottom: 10,
        lineHeight: 25
    },
    link: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 25,
        paddingRight: 5,
        fontSize: 18,
        color: '#666',
        backgroundColor: '#fff',
        textDecorationLine: "underline"
    },
    title_: {
        fontSize: 25,
        color: '#666',
        marginLeft: 5,
        marginTop: 10,
        marginBottom: 10
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
        width: 125,
        height: 125,
        resizeMode: 'cover',
        marginBottom: 10,
        objectFit: "cover",
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
    details: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
        paddingBottom: 10
    },
});
