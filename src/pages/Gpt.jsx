import React, {useState, }from 'react'
import axios from 'axios';

function Gpt() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = async () => {
        // Add user's message to the chat
        setMessages([...messages, { role: 'user', content: input }]);

        // Make a request to the ChatGPT API
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [...messages, { role: 'assistant', content: 'Your welcome message or initial content' }],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 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',
                    },
                }
            );

            // Add assistant's response to the chat
            setMessages([...messages, { role: 'assistant', content: response.data.choices[0].message.content }]);
        } catch (error) {
            console.error('Error fetching response from ChatGPT API:', error);
        }

        // Clear the input field
        setInput('');
    };

    return (
        <>

            <div className='w-full text-center text-2xl'>
                Our onsite ai for debugging
            </div>
            {/* <div>
                <div>
                    {messages.map((message, index) => (
                        <div key={index} className={message.role}>
                            {message.content}
                        </div>
                    ))}
                </div>
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div> */}
        </>
    );
}

export default Gpt
