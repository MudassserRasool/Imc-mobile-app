import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './ChatBoot.style';
// import ChatBootHeader from "../../components/ChatBootHeader/ChatBootHeader";
import LottieView from 'lottie-react-native';
import * as Icon from 'react-native-feather';
import { Snackbar } from 'react-native-paper';
// import * as Device from "expo-device";

const ChatBoot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();
  const [visible, setVisible] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);
  const [response, setResponse] = useState('');
  const [userMessages, setUserMessages] = useState(['one', 'two', 'three']);
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);
  useEffect(() => {
    // Scroll to the end of the ScrollView when messages change
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]); // Trigger useEffect when messages change

  const openNumberForPhoneCall = () => {
    const phoneNumber = '+12344567890';
    const phoneNumberUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumberUrl);
  };
  const messageSent = [
    {
      role: 'system',
      content:
        'You are a helpful assistant and always answer me concisely and in a few words. I will ask you questions related to consultancy and diseases and , and you will provide brief and informative responses.  Thank you for understanding.',
    },
    { role: 'user', content: userMessage },
  ];
  const fetchAIResponse = async () => {
    if (userMessage.trim() === '') return;

    const apiKey = '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';
    // setMessages((prevMessages) => [...prevMessages, userMessage]);
    messages.push({ userMessage: userMessage });
    setUserMessage('');
    setLoading(true);
    try {
      const result = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
          'OpenAI-Beta': 'assistants=v1',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messageSent,
          max_tokens: 150,
        }),
      });

      const data = await result.json();

      if (data && data.choices && data.choices[0] && data.choices[0].message) {
        const newMessage = {
          text: data.choices[0].message.content,
          time: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          type: 'bot',
          // userMessage: userMessage,
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
      } else {
        alert('Unexpected API response:', data);
      }
    } catch (error) {
      alert('Error fetching AI response:', error);
    } finally {
      setLoading(false);
      setUserMessage('');
    }
  };

  const getVerticalOffset = () => {
    const { height } = Dimensions.get('window');
    return height >= 812 ? 90 : 45; // iPhone X and above have a height of 812 or more
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* <ChatBootHeader onToggleSnackBar={onToggleSnackBar} /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        keyboardVerticalOffset={Platform.OS === 'ios' ? getVerticalOffset() : 0}
        style={{
          flex: 1,
          flexDirection: 'column-reverse',
          marginBottom: 10,
          margin: 10,
        }}
      >
        {/* start input field to send message------------------ */}
        <View style={styles.messageChatInput}>
          <View style={styles.messageChatInputContainer}>
            <TextInput
              placeholder="Type Message"
              style={{ marginLeft: 10, flex: 1, padding: 10 }}
              // keyboardType="numbers-and-punctuation"
              placeholderTextColor={'#8F8F8F'}
              value={userMessage}
              onChangeText={(text) => setUserMessage(text)}
              onSubmitEditing={fetchAIResponse}
            />

            {/* <Text>ssssssss</Text> */}
            <View style={styles.sendButtonAndLine}>
              <View style={styles.verticalLine} />
              <TouchableOpacity
                style={styles.sendButtonBg}
                onPress={fetchAIResponse}
              >
                <Icon.Send
                  height="19"
                  width="19"
                  color="white"
                  // className="mr-0.5"
                  // style={{ marginRight: 6 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* end input field to send message------------------ */}

        <ScrollView
          onContentSizeChange={() => {
            scrollViewRef.current.scrollToEnd({ animated: true });
          }}
          ref={scrollViewRef}
        >
          {messages.map((message, index) => {
            return (
              <View className=" " key={index}>
                {message.userMessage && (
                  <View key={index} style={styles.userMessageContainer}>
                    <View style={styles.userMessageBg}>
                      <Text
                        style={[
                          styles.messageText,
                          Platform.OS === 'ios' && {
                            overflow: 'hidden',
                            borderRadius: 20,
                          },
                          {
                            backgroundColor: '#1C81CB',
                          },
                        ]}
                      >
                        {message.userMessage}
                      </Text>
                      <Text
                        style={[
                          styles.messageTime,
                          { textAlign: 'right' },
                          { margin: 5 },
                          { marginRight: 10 },
                        ]}
                        // className="text-right m-2 mr-4"
                      >
                        {message.time}
                      </Text>
                    </View>
                  </View>
                )}

                {message.text && (
                  <View style={styles.chatBootMessageContainer}>
                    <View style={styles.chatBootMessageBg}>
                      <Text
                        style={[
                          styles.messageText,
                          Platform.OS === 'ios' && {
                            overflow: 'hidden',
                            borderRadius: 20,
                          },
                          {
                            backgroundColor: '#3D3B3B',
                          },
                        ]}
                        // className="bg-[#3D3B3B]"
                      >
                        {message.text}
                      </Text>
                      <Text
                        style={[
                          styles.messageTime,
                          { textAlign: 'left' },
                          { marginLeft: 10 },
                          { margin: 5 },
                        ]}
                        // className="text-left m-2 ml-5"
                      >
                        {message.time}
                      </Text>
                    </View>
                    {/* end user message */}
                  </View>
                )}
              </View>
            );
          })}

          {loading && (
            // <Icon.MoreHorizontal
            //   color="#1C81CB"
            //   width={60}
            //   height={60}
            //   className="ml-3"
            // />
            <View style={styles.animationContainer}>
              <LottieView
                autoPlay
                ref={animation}
                style={{
                  width: 55,
                  height: 55,
                }}
                source={require('../../assets/Animation.json')}
              />
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.container}>
        <Snackbar
          visible={visible}
          duration={80000}
          style={styles.phoneCallSnackbar}
          onDismiss={onDismissSnackBar}
          action={{
            label: '',
            onPress: () => {
              onDismissSnackBar();
            },
          }}
        >
          <View style={styles.phoneCallSnackbarContainer}>
            <Icon.X
              height="20"
              width="20"
              color="black"
              onPress={onDismissSnackBar}
              style={styles.snackbarBackDismiss}
            />
            <Text style={styles.contactAiAgent}>Contact AI TITLE BROKER</Text>
            <Text style={styles.phoneNumberText}>+1 234 456 7890</Text>
            <TouchableOpacity
              style={styles.phoneCallButton}
              onPress={openNumberForPhoneCall}
            >
              <Text style={styles.phoneCallButtonText}>Call</Text>
            </TouchableOpacity>
          </View>
        </Snackbar>
      </View>

      {/* <GPT3Demo /> */}
    </View>
  );
};

export default ChatBoot;
