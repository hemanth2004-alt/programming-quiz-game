import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LanguageSelector from './components/LanguageSelector'
import RoadmapView from './components/RoadmapView'
import QuizInterface from './components/QuizInterface'
import ResultsDashboard from './components/ResultsDashboard'
import ReviewAnswers from './components/ReviewAnswers'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [userProgress, setUserProgress] = useState({})
  const [quizResults, setQuizResults] = useState(null)
  const navigate = useNavigate()

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('quizProgress')
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('quizProgress', JSON.stringify(userProgress))
  }, [userProgress])

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    navigate('/roadmap')
  }

  const handleQuizComplete = (results) => {
    setQuizResults(results)
    
    // Update progress
    const updatedProgress = { ...userProgress }
    if (!updatedProgress[selectedLanguage]) {
      updatedProgress[selectedLanguage] = {}
    }
    updatedProgress[selectedLanguage][results.topic] = {
      score: results.accuracy,
      completed: true,
      attempts: (updatedProgress[selectedLanguage][results.topic]?.attempts || 0) + 1
    }
    setUserProgress(updatedProgress)
    
    navigate('/results')
  }

  const handleBackToRoadmap = () => {
    setSelectedLanguage(null)
    setQuizResults(null)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <Routes>
        <Route path="/" element={<LanguageSelector onSelect={handleLanguageSelect} />} />
        <Route path="/roadmap" element={selectedLanguage ? <RoadmapView language={selectedLanguage} progress={userProgress[selectedLanguage] || {}} /> : null} />
        <Route path="/quiz" element={selectedLanguage ? <QuizInterface language={selectedLanguage} onComplete={handleQuizComplete} /> : null} />
        <Route path="/results" element={quizResults ? <ResultsDashboard results={quizResults} onBackToRoadmap={handleBackToRoadmap} /> : null} />
        <Route path="/review" element={quizResults ? <ReviewAnswers results={quizResults} onBackToRoadmap={handleBackToRoadmap} /> : null} />
      </Routes>
    </div>
  )
}

export default App
