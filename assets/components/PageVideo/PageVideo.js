import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import data from '../../data.json'
import Header from "../Header/Header";



export default function PageVideo({ route }) {
    const { selectedItem } = route.params;
    return (
        <ScrollView>
            <Header/>
            <View style={styles.top}>
                <Text style={styles.title}>{selectedItem.content}</Text>

                <Text style={styles.details}>Author: {selectedItem.author}</Text>
                <Text style={styles.subtitle}>{selectedItem.title}</Text>
                <Text style={styles.subtitles}>{selectedItem.text}</Text>
            </View>


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
    top: {
        paddingLeft: 5,
        paddingRight: 5,
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
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 5,
        marginRight: 10
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitles: {
        fontSize: 18,
        marginBottom: 10,
        lineHeight: 25
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
        fontSize: 14,
        color: 'gray',
        marginTop: 5,
        paddingBottom: 10
    },
});