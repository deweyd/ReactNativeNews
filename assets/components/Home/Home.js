import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import data from '../../data.json'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from "react";
import useApi from '../api';


const Home = () => {
    const navigation = useNavigation();
    const filteredByTypeNews = data.articles.filter(item => item.type === 'news');
    const filteredByTypeArticles = data.articles.filter(item => item.type === 'articles');
    const filteredByTypeInterview = data.articles.filter(item => item.type === 'interview');
    const filteredByTypePhoto = data.articles.filter(item => item.type === 'photo');
    const filteredByTypeVideo = data.articles.filter(item => item.type === 'video');

    const general = useApi('general');
    const [order3, setOrder3] = useState([]);
    useEffect(() => {
        if (general.news.length > 0) {
            setOrder3(general.news);
        }
    }, [general]);
    const business = useApi('business');
    const [order, setOrder] = useState([]);
    useEffect(() => {
        if (business.news.length > 0) {
            setOrder(business.news);
        }
    }, [business]);
    const entertainment = useApi('entertainment');
    const [order2, setOrder2] = useState([]);
    useEffect(() => {
        if (entertainment.news.length > 0) {
            setOrder2(entertainment.news);
        }
    }, [entertainment]);
    const health = useApi('health');
    const [order4, setOrder4] = useState([]);
    useEffect(() => {
        if (health.news.length > 0) {
            setOrder4(health.news);
        }
    }, [health]);
    const science = useApi('science');
    const [order5, setOrder5] = useState([]);
    useEffect(() => {
        if (science.news.length > 0) {
            setOrder5(science.news);
        }
    }, [science]);
    const sports = useApi('sports');
    const [order6, setOrder6] = useState([]);
    useEffect(() => {
        if (sports.news.length > 0) {
            setOrder6(sports.news);
        }
    }, [sports]);
    const technology = useApi('technology');
    console.log(technology)
    const [order7, setOrder7] = useState([]);
    useEffect(() => {
        if (technology.news.length > 0) {
            setOrder7(technology.news);
        }
    }, [technology]);


    return (
        <View>
            <ScrollView>
            <Header/>
            <View style={styles.top}>
                    <Text style={styles.title_}>General</Text>
                    <FlatList
                        data={order3.slice(0, 3)}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'General' })}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('General', { selectedItem: 'general', selectedTitle: 'General' })}>
                        <Text style={styles.link}>All news general</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.top}>
                <Text style={styles.title_}>Business</Text>
                <FlatList
                    data={order.slice(0, 3)}
                    style={styles.container}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'Business' })}>
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
                <TouchableOpacity onPress={() => navigation.navigate('Business', { selectedItem: 'business', selectedTitle: 'Business' })}>
                    <Text style={styles.link}>All news Business</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.top}>
                    <Text style={styles.title_}>Entertainment</Text>
                    <FlatList
                        data={order2.slice(0, 3)}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'Entertainment' })}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Entertainment', { selectedItem: 'entertainment', selectedTitle: 'Entertainment' })}>
                        <Text style={styles.link}>All news Entertainment</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.top}>
                    <Text style={styles.title_}>Health</Text>
                    <FlatList
                        data={order4.slice(0, 3)}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'Health' })}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Health', { selectedItem: 'health', selectedTitle: 'Health' })}>
                        <Text style={styles.link}>All news Health</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.top}>
                    <Text style={styles.title_}>Science</Text>
                    <FlatList
                        data={order5.slice(0, 3)}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'Science' })}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Science', { selectedItem: 'science', selectedTitle: 'Science' })}>
                        <Text style={styles.link}>All news Science</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.top}>
                    <Text style={styles.title_}>Sports</Text>
                    <FlatList
                        data={order6.slice(0, 3)}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'Sports' })}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Sports', { selectedItem: 'sports', selectedTitle: 'Sports' })}>
                        <Text style={styles.link}>All news Sports</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.top}>
                    <Text style={styles.title_}>Technology</Text>
                    <FlatList
                        data={order7.slice(0, 3)}
                        style={styles.container}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('Page', { selectedItem: item, selectedTitle: 'Technology' })}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('Technology', { selectedItem: 'technology', selectedTitle: 'Technology' })}>
                        <Text style={styles.link}>All news Technology</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#fff',
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

export default Home;