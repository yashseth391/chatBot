import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constant/Messages';

const HomeScreen = () => {
    const navigator = useNavigation();
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking] = useState(false);
    return (
        <View style={styles.outside}>

            <View style={styles.container}>
                <View style={styles.header}>
                    {/* bot icon */}
                    <View style={styles.body}>
                        <Image source={require("../../assests/bot.jpeg")} style={styles.image} />
                    </View>
                    {messages.length > 0 ?
                        (<View style={styles.header2}>
                            <Text style={styles.heading}>Assistant</Text>
                            <View style={styles.header3}>

                                <ScrollView
                                    bounces={false}
                                    showsVerticalScrollIndicator={false}
                                >
                                    {messages.map((message, index) => {
                                        if (message.role === 'assistant') {
                                            if (message.content.includes('https')) {
                                                return <View style={styles.assistant} key={index}>
                                                    <View style={styles.assistantMessageImage}>

                                                        <Image source={{ uri: message.content }} style={styles.messageImage}
                                                            resizeMode='contain'
                                                        />
                                                    </View>
                                                </View>;
                                            }
                                            else {
                                                return <View style={styles.assistant} key={index}>
                                                    <View style={styles.assistantMessage}>
                                                        <Text style={styles.text}>{message.content}</Text>
                                                    </View>
                                                </View>;
                                            }

                                        }
                                        else {
                                            return <View style={styles.user} key={index}>
                                                <View style={styles.userMessage}>
                                                    <Text style={styles.text}>{message.content}</Text>
                                                </View>
                                            </View>;
                                        }
                                    })}
                                </ScrollView>
                            </View>
                        </View>) :

                        (<Features />)}
                    {/* recording,clearing and sending message */}
                    <View style={styles.bottom}>
                        {recording ?
                            (<TouchableOpacity >
                                <Image source={require("../../assests/Recording.jpg")} style={styles.audioImage} />
                            </TouchableOpacity>) :
                            (
                                <TouchableOpacity >
                                    <Image source={require("../../assests/audioButton.png")} style={styles.audioImage} />
                                </TouchableOpacity>
                            )
                        }
                        {
                            messages.length > 0 ?
                                (<TouchableOpacity onPress={() => setMessages([])}>
                                    <Text style={styles.clearButton}>Clear</Text>
                                </TouchableOpacity>) : null
                        }
                        {
                            speaking ?
                                (<TouchableOpacity onPress={() => setSpeaking(false)}>
                                    <Text style={styles.stopButton}>Stop</Text>
                                </TouchableOpacity>) : null
                        }

                    </View>
                </View>
            </View>
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
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
    audioImage: {
        width: wp('21%'),
        height: hp('10%'),

    },
    body: {
        flexDirection: "row",
        justifyContent: "center"

    },
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    clearButton: {
        color: 'blue',
        fontSize: wp('5%'),
        fontWeight: 'bold',
        backgroundColor: "#b8b7ba",
        position: "absolute",
        left: 60,
        textAlign: "center",
        height: hp('4%'),
        width: wp('20%'),
        borderRadius: 10,

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
    image: {
        height: hp('15%'),
        width: hp('15%'),
    },
    messageImage: {
        width: wp('60%'),
        height: wp('60%'),
        borderRadius: 10,
    },
    outside: {
        backgroundColor: 'white',
        flex: 1,
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
    stopButton: {
        color: 'black',
        fontSize: wp('5%'),
        fontWeight: 'bold',
        backgroundColor: "#b8b7ba",
        position: "absolute",
        right: 60,
        borderRadius: 10,
        textAlign: "center",
        height: hp('4%'),
        width: wp('20%'),
    },
    text: {
        fontSize: wp('4%'),
        margin: 5,
    },
    txt: {
        fontSize: 30,
        color: 'red'
    },

})