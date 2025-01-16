export default function Courses(){
    return(
        <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">PTE Academic</h3>
          <ul className="space-y-2">
            <li>✓ Complete course material</li>
            <li>✓ Practice tests and mock exams</li>
            <li>✓ One-on-one coaching sessions</li>
            <li>✓ Flexible timing options</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">IELTS Training</h3>
          <ul className="space-y-2">
            <li>✓ Comprehensive study material</li>
            <li>✓ Regular mock tests</li>
            <li>✓ Speaking practice sessions</li>
            <li>✓ Writing evaluation</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Spoken English</h3>
          <ul className="space-y-2">
            <li>✓ Extensive vocabulary and grammar lessons</li>
            <li>✓ Listening comprehension exercises</li>
            <li>✓ Interactive conversation practice</li>
            <li>✓ Personalized feedback on pronunciation</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Duolingo</h3>
          <ul className="space-y-2">
            <li>✓ Tailored study resources for all skill levels</li>
            <li>✓ Real-life test simulations</li>
            <li>✓ Practice for all language skills</li>
            <li>✓ Instant feedback and progress tracking</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    )
}