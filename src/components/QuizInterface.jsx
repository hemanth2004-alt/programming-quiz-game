import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { QUIZZES } from '../data/quizzes'

function QuizInterface({ language, onComplete }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(60)
  const [startTime, setStartTime] = useState(Date.now())
  const [topic, setTopic] = useState('')

  useEffect(() => {
    // Get topic from state or URL
    const topicName = location.state?.topic?.name
    if (!topicName) {
      navigate('/roadmap')
      return
    }

    // Get quiz questions
    const quiz = QUIZZES.find(q => q.language === language && q.name === topicName)
    if (quiz) {
      setTopic(topicName)
      setQuestions(quiz.questions)
      setStartTime(Date.now())
    }
  }, [language, location, navigate])

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmitQuiz()
      return
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const handleSelectAnswer = (questionId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleSubmitQuiz = () => {
    // Calculate results
    let correctCount = 0
    questions.forEach((question, index) => {
      const selectedAnswerIndex = selectedAnswers[question.id]
      if (selectedAnswerIndex === question.correctAnswer) {
        correctCount++
      }
    })

    const accuracy = Math.round((correctCount / questions.length) * 100)
    const timeTaken = Math.floor((Date.now() - startTime) / 1000)

    const results = {
      topic: topic,
      language: language,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      accuracy: accuracy,
      timeTaken: timeTaken,
      answers: selectedAnswers,
      questions: questions
    }

    onComplete(results)
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center">
        <div className="text-white text-2xl">Loading quiz...</div>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const isAnswered = selectedAnswers[currentQuestion.id] !== undefined
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6 bg-white/10 rounded-lg p-4 backdrop-blur">
          <div className="flex justify-between items-center text-white mb-3">
            <h1 className="text-2xl font-bold">{language} - {topic}</h1>
            <div className={`text-2xl font-bold ${
              timeLeft <= 10 ? 'text-red-400' : 'text-green-400'
            }`}>
              ⏱️ {timeLeft}s
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div
              className="bg-green-400 h-full transition-all"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-white/80 text-sm mt-2">Question {currentQuestionIndex + 1} of {questions.length}</p>
        </div>

        {/* Question Card */}
        <div className="card mb-6 animate-slide-up">
          <h2 className="text-xl font-bold text-gray-800 mb-6">{currentQuestion.question}</h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                  selectedAnswers[currentQuestion.id] === index
                    ? 'bg-blue-500 text-white border-2 border-blue-600'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-2 border-transparent'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  checked={selectedAnswers[currentQuestion.id] === index}
                  onChange={() => handleSelectAnswer(currentQuestion.id, index)}
                  className="mr-3"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {/* Explanation (if answered) */}
          {isAnswered && (
            <div className={`p-4 rounded-lg mb-6 ${
              selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              <p className="font-bold mb-2">
                {selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
              </p>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex-1 py-3 rounded-lg font-bold transition ${
              currentQuestionIndex === 0
                ? 'btn btn-disabled'
                : 'btn btn-secondary'
            }`}
          >
            ← Previous
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              className="flex-1 py-3 btn btn-success font-bold"
            >
              Submit Quiz 🎯
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 py-3 btn btn-primary font-bold"
            >
              Next →
            </button>
          )}
        </div>

        {/* Question Indicators */}
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-10 h-10 rounded-lg font-bold transition ${
                currentQuestionIndex === index
                  ? 'bg-white text-purple-600'
                  : selectedAnswers[q.id] !== undefined
                  ? 'bg-green-400 text-white'
                  : 'bg-white/30 text-white hover:bg-white/50'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuizInterface
