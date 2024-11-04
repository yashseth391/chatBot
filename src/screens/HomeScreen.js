import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constant/Messages';
import { apiCall } from '../api/Open_AI';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [messages, setMessages] = useState(dummyMessages);
    const [userInput, setUserInput] = useState('');

    const handleSend = async () => {
        if (userInput.trim()) {
            setMessages([...messages, {
                role: 'user',
                content: userInput.trim()
            }]);
            const response = await apiCall(userInput.trim());
            if (response.success) {
                setMessages(response.data);
            }
            setUserInput('');
        }
    };

    return (
        <View style={styles.outside}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.body}>
                        <Image source={require("../../assests/bot.jpeg")} style={styles.image} />
                    </View>
                    {messages.length > 0 ? (
                        <View style={styles.header2}>
                            <Text style={styles.heading}>Assistant</Text>
                            <View style={styles.header3}>
                                <ScrollView
                                    bounces={false}
                                    showsVerticalScrollIndicator={false}
                                >
                                    {messages.map((message, index) => {
                                        if (message.role === 'assistant') {

                                            return (
                                                <View style={styles.assistant} key={index}>
                                                    <View style={styles.assistantMessage}>
                                                        <Text style={styles.text}>{message.content}</Text>
                                                    </View>
                                                </View>
                                            );

                                        } else {
                                            return (
                                                <View style={styles.user} key={index}>
                                                    <View style={styles.userMessage}>
                                                        <Text style={styles.text}>{message.content}</Text>
                                                    </View>
                                                </View>
                                            );
                                        }
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    ) : (
                        <Features />
                    )}

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={userInput}
                            onChangeText={setUserInput}
                            placeholder="Type your message..."
                            placeholderTextColor="#666"
                        />
                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={handleSend}
                        >
                            <Text style={styles.sendButtonText}>Send</Text>
                        </TouchableOpacity>
                        {messages.length > 0 && (
                            <TouchableOpacity onPress={() => setMessages([])}>
                                <Text>Clear</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    outside: {
        backgroundColor: 'white',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10
    },
    header: {
        flex: 1,
        margin: 10,
    },
    body: {
        flexDirection: "row",
        justifyContent: "center"
    },
    image: {
        height: hp('15%'),
        width: hp('15%'),
    },
    header2: {
        marginBottom: 10,
    },
    header3: {
        height: hp('58%'),
        padding: 10,
        backgroundColor: "#d8d9d2",
    },
    heading: {
        fontSize: wp('5%'),
        fontWeight: 'bold',
        color: 'green',
    },
    assistant: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    assistantMessage: {
        width: wp('70%'),
        backgroundColor: "#b7ebb2",
        borderRadius: 10,
        margin: 5,
    },
    assistantMessageImage: {
        height: hp('30%'),
        width: wp('60%'),
        backgroundColor: "#b7ebb2",
        margin: 5,
        justifyContent: "center",
        borderRadius: 20
    },
    messageImage: {
        width: wp('60%'),
        height: wp('60%'),
        borderRadius: 10,
    },
    user: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    userMessage: {
        width: wp('70%'),
        backgroundColor: "white",
        borderRadius: 10,
        margin: 5,
    },
    text: {
        fontSize: wp('4%'),
        margin: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
        fontSize: wp('4%'),
    },
    sendButton: {
        backgroundColor: '#007AFF',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    sendButtonText: {
        color: 'white',
        fontSize: wp('4%'),
        fontWeight: '600',
    }
});