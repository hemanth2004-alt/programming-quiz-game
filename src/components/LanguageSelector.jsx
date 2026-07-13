import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LANGUAGES } from '../data/languages'

function LanguageSelector({ onSelect }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const navigate = useNavigate()

  // Extract unique categories
  const categories = ['All', ...new Set(LANGUAGES.map(lang => lang.category))]

  // Filter languages based on search and category
  const filteredLanguages = LANGUAGES.filter(lang => {
    const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || lang.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleSelectLanguage = (language) => {
    onSelect(language.name)
    navigate('/roadmap')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-4">🎮 Programming Quiz Game</h1>
          <p className="text-xl text-blue-100">Master 31+ Programming Languages Through Interactive Quizzes</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 animate-slide-up">
          <input
            type="text"
            placeholder="Search programming languages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg text-lg bg-white text-gray-800 placeholder-gray-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-white text-purple-600 shadow-lg transform scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLanguages.map((language, index) => (
            <div
              key={language.id}
              onClick={() => handleSelectLanguage(language)}
              className="card cursor-pointer transform hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-3">{language.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{language.name}</h3>
              <p className="text-gray-600 mb-3">{language.description}</p>
              <div className="flex items-center justify-between">
                <span className="badge badge-primary">{language.category}</span>
                <span className="text-sm text-gray-500">20+ Questions</span>
              </div>
            </div>
          ))}
        </div>

        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white text-xl">No languages found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default LanguageSelector
