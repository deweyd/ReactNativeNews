import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import data from '../../data.json'
import Header from "../Header/Header";
import { useNavigation } from '@react-navigation/native';

const Video = () => {
    const navigation = useNavigation();
    const filteredByType = data.articles.filter(item => item.type === 'video');
    return (
        <View style={styles.top}>
            <Header/>
            <StatusBar style="auto" />
            <FlatList
                data={filteredByType}
                style={styles.container}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.articleContainer} onPress={() => navigation.navigate('PageVideo', { selectedItem: item })}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.text}>
                            {/*<Text style={styles.subtitle}>{item.title}</Text>*/}
                            <Text numberOfLines={4} style={styles.content}>{item.content}</Text>
                            <Text numberOfLines={2} style={styles.details}>
                                Published by {item.author} on {new Date(item.published_at).toLocaleDateString()}
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
    details: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
        paddingBottom: 10
    },
});

export default Video;