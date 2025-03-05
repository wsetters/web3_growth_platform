export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Web3 Development
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Learn blockchain development from industry experts
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Start Learning Now
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience in blockchain development.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-600">From basics to advanced concepts, we cover everything you need to know about Web3.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Hands-on Projects</h3>
              <p className="text-gray-600">Build real-world projects and add them to your portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
              <p className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Access to Basic Courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Community Access
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic Support
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600">
              <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
              <p className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-600">/month</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  All Basic Plan Features
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced Courses
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  1-on-1 Mentoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Job Placement Support
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 