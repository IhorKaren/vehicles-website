import React, { useEffect, useState } from 'react';
import { DialogContent, TextField, Button, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { format } from 'date-fns';

// Mock data for messages
const mockMessages = [
    {
      id: 1,
      text: 'Hello! How can I help you today?',
      sender: 'Seller',
      timestamp: new Date('2024-02-12T09:00:00'),
    },
    {
      id: 2,
      text: 'I have a question about my order.',
      sender: 'You',
      timestamp: new Date('2024-02-12T09:01:00'),
    },
    // Add more messages as needed
  ];
const ChatInterface = ({ chatId }: any) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any>(mockMessages);

  const getMessagesFromServer = (chatId: any) => {
    console.log(`"getMessagesFromServer" ${chatId}`);
    // Simulate fetching new messages from the server
    return [
      ...messages, // Existing messages
      {
        id: messages.length + 1,
        text: 'This is a new message from the server.',
        sender: 'Seller',
        timestamp: new Date(),
      },
    ];
  };

  const sendMessageToServer = (chatId: any, newMessage: { id?: number; text: any; sender?: string; timestamp?: Date; }) => {
    console.log(`"sendMessageToServer" ${chatId} ${newMessage.text}`);
    // Simulate sending a message to the server and getting a response
    return newMessage;
  };
  useEffect(() => {
    const fetchMessages = () => {
      const fetchedMessages = getMessagesFromServer(chatId);
      setMessages(fetchedMessages);
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000);

    return () => clearInterval(intervalId);
  }, [chatId]);

  const handleSendClick = () => {
    if (message.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'You',
        timestamp: new Date(),
      };

      sendMessageToServer(chatId, newMessage);
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <DialogContent>
      <List sx={{ maxHeight: '300px', overflow: 'auto' }}>
        {messages.map((msg: { id: React.Key | null | undefined; sender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; text: any; timestamp: any; }) => (
          <React.Fragment key={msg.id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={msg.sender}
                secondary={
                  <>
                    {msg.text}
                    <br />
                    {format(msg.timestamp, 'p')}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          sx={{ p: '10px', ml: 1 }}
          variant="contained"
          color="primary"
          onClick={handleSendClick}
        >
          <SendIcon />
        </Button>
      </Box>
    </DialogContent>
  );
};

export default ChatInterface;
