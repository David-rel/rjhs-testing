// components/ChatPopup.js
import { useState, useEffect } from 'react'

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Welcome to RJ Robotics Question Bot. Click a question get an answer.',
      type: 'system'
    }
  ])

  const questions = [
    {
      q: 'What is RJHS 3729?',
      a:
        'RJHS 372 is the robotics club at Regis Jesuit Highschool. This club is filled with amazing students and mentors who work together to build amazing robots.'
    },
    {
      q: 'What is FIRST robotics?',
      a:
        'FIRST robotics is a organization where we compete at and get challenges from. FIRST is used to inspire us and other robotics teams to build amazing robots.'
    },
    {
      q: 'How do we create robots?',
      a:
        'It is a process that involves everyone. between the 4 subsystems building out the CAD, electrical, build, and programming to create a robot. '
    },
    {
      q: 'How many people are in the club?',
      a:
        'there are 40 active people in the club and 7 mentors. Each person joins a subsystem and works with each other to create.'
    },
    {
      q: 'what Teams are there?',
      a:
        'We are a team all together that is split between many subsystems. Main ones being: build, electrical, programming, and CAD'
    },
    {
      q: 'Is there a varsity team?',
      a: `Yes there is. If you are doing a lot for the team and they think you are ready then you can be on varsity pit crew. Yes you can letter it in`
    },
    {
      q: 'What specifically do we do?',
      a:
        'We build robots for FIRST robotics. Ideate about how we can make ur club better. Work together as a team and learn new things about STEM.'
    },
    {
      q: 'Where do we compete?',
      a:
        'We compete inside and outside of state. We compete in the Heartland Regional in Kansas for varsity team. and we compete in Colorado Regionals in Colorado for everyone.'
    },
    {
      q: 'How can I join?',
      a:
        'Its super easy. All you have to do is contact our supervisor or find us on our working times, or join our club at the club activities fair at school. and all you have to do is sign up.'
    },
    {
      q: 'Who can I contact?',
      a:
        'You can contact are main supervisor Molly Marchand at this email: mmarchand@regisjesuit.com'
    },
    { q: 'Why should I join?', a: 'You should join if you want to learn how to do team work in a friendly environment. Learn about STEM in a new way and to overall create amazing friends and team members in the club. If you have any love for robotics at all, then try it out' },
    { q: 'What are the hours?', a: 'Our hours are long but worth it for what we are creating. You do not have to make all of them. Tuesdays and Thursdays 3-5(or 3-7 during competition season), Saturdays 8-3 during competition season and Sundays 12-4 during competition season' },
    { q: 'Do I need to know anything before joining?', a: 'Nope. our amazing team leads and mentors will help teach you everything you need to know to succeed. All you need to do is be open ot them.' }
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
            <h3 className="font-semibold text-lg">RJ Robotics Question Bot (alpha)</h3>
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
