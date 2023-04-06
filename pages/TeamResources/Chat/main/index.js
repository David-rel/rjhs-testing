import { useState } from 'react';
import { useRouter } from 'next/router';
import { IoSend } from 'react-icons/io5'
import Sidebar from '../../../../components/sidebar';


const systemMessage = {
  role: 'system',
  content:
    'Your are a tutor for Java and the package WPILib, and javascript and Next.JS, Tailwind CSS, and Azure DB. Only have a happy attitude when talking. Do not answer any other questions apart from WPILib, java, jaavscript, Next.JS, tailwind css, Azure Cloud DB'
};

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

        // Check if the API response has the expected structure
        if (
          data.choices &&
          data.choices[0] &&
          data.choices[0].message &&
          data.choices[0].message.content
        ) {
          setMessages([
            ...chatMessages,
            {
              message: data.choices[0].message.content,
              sender: 'ChatGPT'
            }
          ])
        } else {
          console.error('Unexpected API response:', data)
        }

        setIsTyping(false)
      })
  }


  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex items-center justify-center bg-red-400 w-full">
        <div className="w-full h-full max-w-4xl p-4 pb-20">
          <div className="bg-white h-full rounded-xl shadow-lg flex flex-col">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`my-2 mx-4 ${
                  message.sender === 'ChatGPT'
                    ? 'text-left text-red-700'
                    : 'text-right text-white'
                }`}
              >
                <div
                  className={`rounded-lg py-2 px-4 ${
                    message.sender === 'ChatGPT' ? 'bg-red-200' : 'bg-red-600'
                  }`}
                >
                  {message.message}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-left text-red-700">
                <div className="rounded-lg bg-red-200 py-2 px-4">
                  RaiderBot is typing...
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-red-300">
            <form
              onSubmit={e => {
                e.preventDefault()
                handleSend(e.target.message.value)
                e.target.message.value = ''
              }}
              className="p-4 flex"
            >
              <input
                name="message"
                type="text"
                className="w-full rounded-l-lg border-red-300 bg-white focus:border-red-500 focus:ring-0 text-red-700 p-2 outline-none"
                placeholder="Type message here"
              />
              <button
                type="submit"
                className="bg-red-600 text-white rounded-r-lg p-2"
              >
                <IoSend className="text-xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
export default App
