import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react'
import { useRouter } from 'next/router'

const systemMessage = {
  role: 'system',
  content:
    'Your are a tutor for Java and the package WPILib, and javascript and Next.JS, Tailwind CSS, and Azure DB. Only hve a happy attitude when talking. Do not answer any other questions apart from WPILib, java, jaavscript, Next.JS, tailwind css, Azure Cloud DB'
}

function App() {
  const router = useRouter()

  const { key } = router.query

  const [messages, setMessages] = useState([
    {
      message: `Hello, I'm Raider Bot, The official Chat Bot for the Regis Jesuit Robotics team! I am a tutor/teacher for WPILib, and Next.JS`,
      sentTime: 'just now',
      sender: 'ChatGPT'
    }
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async message => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: 'user'
    }

    const newMessages = [...messages, newMessage]

    setMessages(newMessages)

    setIsTyping(true)
    await processMessageToChatGPT(newMessages)
  }

  async function processMessageToChatGPT(chatMessages) {
    
    let apiMessages = chatMessages.map(messageObject => {
      let role = ''
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant'
      } else {
        role = 'user'
      }
      return { role: role, content: messageObject.message }
    })

    if (key == 'none') {
      alert('please enter a valid API key')
      router.reload()
    }

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      max_tokens: 200,
      messages: [systemMessage, ...apiMessages]
    }

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    })
      .then(data => {
        return data.json()
      })
      .then(data => {
        console.log(data)
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: 'ChatGPT'
          }
        ])
        setIsTyping(false)
      })
  }

  return (
    <div className="App h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-screen max-w-4xl">
        <MainContainer>
          <ChatContainer>
            <MessageList
              className="h-[calc(100%-3.5rem)]"
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator content="RaiderBot is typing" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput
              className="bottom-0"
              placeholder="Type message here"
              onSend={handleSend}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}
export default App
