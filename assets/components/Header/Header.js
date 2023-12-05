import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import data from '../../data.json'

export default function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = async (text) => {
        setSearchQuery(text);
        const apiKey = 'c43cab50aaf74a36bdbadb2f4c72b7fe';
        const url = `https://newsapi.org/v2/everything?q=${text}&pageSize=20&apiKey=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFilteredData(data.articles || []);
            console.log(filteredData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const clearSearch = () => {
        setSearchQuery('');
        setFilteredData([]);
    };
    return (
        <View style={styles.header}>
            <Text onPress={() => navigation.navigate('Home')} style={styles.logo}>CNMNews</Text>
            <View>
                <TouchableOpacity onPress={toggleVisibility} style={styles.button}>
                    <View style={styles.buttonText}>{isVisible ? <Image style={styles.image} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/my-project-56788.appspot.com/o/icons8-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-50.png?alt=media&token=15b48e43-2cc4-45dd-8851-4285ea787bb5' }}/> : <Image style={styles.image} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/my-project-56788.appspot.com/o/images%2Ficons8-%D0%BC%D0%B5%D0%BD%D1%8E-50.png?alt=media&token=c9d34d2b-4a40-45c4-994f-a149216d0f0f' }}/>}</View>
                </TouchableOpacity>
            </View>
            {isVisible && (
                <View style={styles.block}>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'general', selectedTitle: 'General' })}>
                        <Text style={styles.link}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'business', selectedTitle: 'Business' })}>
                        <Text style={styles.link}>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'entertainment', selectedTitle: 'Entertainment' })}>
                        <Text style={styles.link}>Entertainment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'health', selectedTitle: 'Health' })}>
                        <Text style={styles.link}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'science', selectedTitle: 'Science' })}>
                        <Text style={styles.link}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'sports', selectedTitle: 'Sports' })}>
                        <Text style={styles.link}>Sports</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('PageHeader', { selectedItem: 'technology', selectedTitle: 'Technology' })}>
                        <Text style={styles.link}>Technology</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Search..."
                        onChangeText={(text) => {
                            if (text.length === 0) {
                                clearSearch();
                            } else {
                                handleSearch(text);
                            }
                        }}
                        value={searchQuery}
                    />
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate('Page', { selectedItem: item })}>
                            <Text style={styles.link}>{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Text>
                        </TouchableOpacity>}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#fff',
        fontStyle: "italic"
    },
    input: {
        color: "#fff",
        height: 40,
        borderColor: 'rgb(129 129 129)',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 10
    },
    link: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 5
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'cover'
    },
    header: {
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#666"
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    block: {
        padding: 20,
        borderRadius: 10,
        width: '100%'
    },
});