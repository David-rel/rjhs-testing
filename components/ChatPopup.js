// components/ChatPopup.js
import { useState, useEffect } from 'react'

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      message:
        'Welcome to RJ Robotics Question Bot. Click a question get an answer.',
      type: 'system'
    }
  ])

const questions = [
  {
    q: 'What is RJHS 3729?',
    a:
      'RJHS 3729 is the robotics club at Regis Jesuit High School. The club consists of talented students and mentors who collaborate to build impressive robots.'
  },
  {
    q: 'What is FIRST Robotics?',
    a:
      'FIRST Robotics is an organization that provides competition opportunities and challenges for robotics teams like ours. Its purpose is to inspire us and other teams to create innovative robots.'
  },
  {
    q: 'How do we build robots?',
    a:
      'Robot creation is a collaborative process involving all members. The four main subsystems—CAD, electrical, build, and programming—work together to design and assemble the robot.'
  },
  {
    q: 'How many members does the club have?',
    a:
      'Our club has 40 active members and 7 mentors. Each person joins a subsystem and collaborates with others to contribute to the team.'
  },
  {
    q: 'What are the main teams within the club?',
    a:
      'Our club is divided into several subsystems, including build, electrical, programming, and CAD.'
  },
  {
    q: 'Is there a varsity team?',
    a: `Yes, there is. If you consistently contribute to the team and demonstrate readiness, you can become part of the varsity pit crew. You can also earn a varsity letter for your participation.`
  },
  {
    q: 'What specifically does the club do?',
    a:
      'We build robots for FIRST Robotics competitions, brainstorm ways to improve our club, collaborate as a team, and learn new STEM concepts and skills.'
  },
  {
    q: 'Where do we compete?',
    a:
      'We participate in competitions both in-state and out-of-state. The varsity team competes in the Heartland Regional in Kansas, while all members compete in the Colorado Regionals.'
  },
  {
    q: 'How can I join?',
    a:
      'Joining is easy! You can contact our supervisor, find us during our working hours, or sign up at the club activities fair at school.'
  },
  {
    q: 'Whom should I contact?',
    a:
      'You can reach out to our main supervisor, Molly Marchand, at this email: mmarchand@regisjesuit.com'
  },
  {
    q: 'Why should I join?',
    a:
      'Join if you want to develop teamwork skills in a supportive environment, learn about STEM in an engaging way, create amazing robots, and make lasting friendships with fellow club members. If you have any interest in robotics, give it a try!'
  },
  {
    q: 'What are the club hours?',
    a:
      'Our hours can be long, but they are worthwhile for the projects we create. Attendance at all sessions is not mandatory. We meet on Tuesdays and Thursdays from 3-5 PM (or 3-7 PM during competition season), Saturdays from 8 AM to 3 PM during competition season, and Sundays from 12-4 PM during competition season.'
  },
  {
    q: 'Do I need prior knowledge to join?',
    a:
      'No, you do not need any prior experience. Our team leads and mentors will teach you everything you need to succeed. Just be open and willing to learn.'
  }
]


  const [availableQuestions, setAvailableQuestions] = useState([...questions])
  const [randomQuestions, setRandomQuestions] = useState(getRandomQuestions())

  function getRandomQuestions() {
    const shuffledQuestions = availableQuestions.sort(() => 0.5 - Math.random())
    return shuffledQuestions.slice(0, 3)
  }

  const handleQuestionClick = (question, answer) => {
    setChatMessages([...chatMessages, { message: question, type: 'question' }])
    setAvailableQuestions(availableQuestions.filter(q => q.q !== question))

    setTimeout(() => {
      setChatMessages(prevChatMessages => [
        ...prevChatMessages,
        { message: answer, type: 'answer' }
      ])
      if (availableQuestions.length > 0) {
        setRandomQuestions(getRandomQuestions())
      }
    }, 1000)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (availableQuestions.length <= questions.length - 3) {
      setAvailableQuestions([...questions])
    }
  }, [availableQuestions])

  return (
    <div className="fixed bottom-5 right-5 hidden md:flex lg:flex z-50">
      {isOpen ? (
        <div
          className="flex flex-col bg-white shadow-lg rounded-lg"
          style={{ width: '30rem', height: '36rem' }} // Custom width and height
        >
          {' '}
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h3 className="font-semibold text-lg">
              RJ Robotics Question Bot (alpha)
            </h3>
            <button onClick={toggleChat} className="focus:outline-none z-10">
              X
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-scroll">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${
                  msg.type === 'question'
                    ? 'text-white bg-red-600'
                    : 'text-black bg-gray-200'
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-gray-300">
            {availableQuestions.length > 0 ? (
              randomQuestions.map((question, index) => (
                <button
                  key={index}
                  className="w-full px-3 py-1 mb-2 text-sm bg-white text-red-500 border border-red-500 rounded-lg focus:outline-none"
                  onClick={() => handleQuestionClick(question.q, question.a)}
                >
                  {question.q}
                </button>
              ))
            ) : (
              <div className="w-full px-3 py-1 mb-2 text-sm text-center text-gray-500">
                That's all I have to answer. Bye!
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full focus:outline-none z-10"
        >
          RJ
        </button>
      )}
    </div>
  )
}

export default ChatPopup
