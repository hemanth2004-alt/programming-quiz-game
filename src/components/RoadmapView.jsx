import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LANGUAGES } from '../data/languages'
import { QUIZZES } from '../data/quizzes'

function RoadmapView({ language, progress }) {
  const navigate = useNavigate()
  const [topics, setTopics] = useState([])
  const [selectedTopic, setSelectedTopic] = useState(null)

  useEffect(() => {
    // Get quiz topics for selected language
    const languageQuizzes = QUIZZES.filter(quiz => quiz.language === language)
    setTopics(languageQuizzes)
  }, [language])

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic)
  }

  const handleStartQuiz = (topic) => {
    navigate('/quiz', { state: { topic } })
  }

  const getTopicStatus = (topic) => {
    const topicProgress = progress[topic]
    if (!topicProgress) return 'locked'
    if (topicProgress.score >= 80) return 'completed'
    return 'in-progress'
  }

  const isTopicUnlocked = (index) => {
    if (index === 0) return true
    const previousTopic = topics[index - 1]
    const previousProgress = progress[previousTopic.name]
    return previousProgress && previousProgress.score >= 80
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <button
            onClick={() => navigate('/')}
            className="mb-6 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition"
          >
            ← Back to Languages
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">🗻 {language} Roadmap</h1>
          <p className="text-blue-100">Complete topics sequentially to master {language}</p>
        </div>

        {/* Mountain Roadmap */}
        <div className="relative">
          {/* Mountain visualization */}
          <svg className="w-full h-64 mb-8" viewBox="0 0 1000 300">
            {/* Mountain peaks */}
            <polygon points="0,300 150,100 300,300" fill="#3b82f6" opacity="0.3" />
            <polygon points="250,300 400,80 550,300" fill="#6366f1" opacity="0.3" />
            <polygon points="500,300 650,60 800,300" fill="#8b5cf6" opacity="0.3" />
            <polygon points="750,300 900,100 1000,300" fill="#a855f7" opacity="0.3" />
            
            {/* Peaks outline */}
            <polyline points="0,300 150,100 300,300" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="250,300 400,80 550,300" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="500,300 650,60 800,300" stroke="white" strokeWidth="2" fill="none" />
            <polyline points="750,300 900,100 1000,300" stroke="white" strokeWidth="2" fill="none" />
          </svg>

          {/* Topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic, index) => {
              const status = getTopicStatus(topic.name)
              const unlocked = isTopicUnlocked(index)
              const topicProgress = progress[topic.name]

              return (
                <div
                  key={topic.id}
                  className={`card cursor-pointer transition-all transform hover:scale-105 ${
                    !unlocked ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => unlocked && handleTopicSelect(topic)}
                >
                  {/* Status Icon */}
                  <div className="text-4xl mb-3">
                    {status === 'completed' && '✅'}
                    {status === 'in-progress' && '⏳'}
                    {status === 'locked' && '🔒'}
                  </div>

                  {/* Topic Info */}
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{topic.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{topic.questions.length} Questions</p>

                  {/* Progress Bar */}
                  {topicProgress && (
                    <div className="mb-3">
                      <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-green-500 h-full transition-all"
                          style={{ width: `${topicProgress.score}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{topicProgress.score}% Mastery</p>
                    </div>
                  )}

                  {/* Action Button */}
                  {unlocked && (
                    <button
                      onClick={() => handleStartQuiz(topic)}
                      className={`w-full py-2 rounded-lg font-semibold transition ${
                        status === 'completed'
                          ? 'btn btn-success'
                          : 'btn btn-primary'
                      }`}
                    >
                      {status === 'completed' ? 'Review' : 'Start'}
                    </button>
                  )}
                  {!unlocked && (
                    <button
                      disabled
                      className="w-full py-2 rounded-lg font-semibold btn btn-disabled"
                    >
                      Locked
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-12 card bg-white/10 border-2 border-white/20">
          <h3 className="text-white text-xl font-bold mb-4">Your Progress</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400">{Object.values(progress).filter(p => p.score >= 80).length}</p>
              <p className="text-white">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-400">{Object.values(progress).filter(p => p.score < 80 && p.score > 0).length}</p>
              <p className="text-white">In Progress</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-400">{topics.length - Object.keys(progress).length}</p>
              <p className="text-white">Remaining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapView
