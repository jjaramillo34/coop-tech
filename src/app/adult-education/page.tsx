import { Map } from "@/components/ui/map"

export default function AdultEducationPage() {
  return (
    <main className="flex-1">
      <div className="container py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Adult Education at Coop Tech</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expand your skills and advance your career with our evening adult education programs.
          </p>
        </div>

        {/* Program Overview */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">Program Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                  <p className="text-gray-600">
                    Open to adults aged 22 and older interested in career and technical education.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule</h3>
                  <p className="text-gray-600">
                    Evening classes available at our main campus location.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">
                    Classes are held at our main site:<br />
                    321 East 96th Street<br />
                    New York, NY 10128
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600">
                    Email: <a href="mailto:aecoop@d-79.com" className="text-primary hover:underline">aecoop@d-79.com</a><br />
                    Phone: <a href="tel:212-369-8800" className="text-primary hover:underline">212-369-8800</a> ext. 1273
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Available Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-6">How to Apply</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-2xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Reach out via email or phone to express your interest and get detailed program information.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-2xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                <p className="text-gray-600">
                  Complete and submit the application form along with any required documentation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-primary text-2xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Enroll</h3>
                <p className="text-gray-600">
                  Once accepted, complete the enrollment process and prepare to start your program.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

const programs = [
  {
    name: "Automotive Technology",
    description: "Learn essential automotive repair and maintenance skills.",
    features: [
      "Engine diagnostics and repair",
      "Brake systems",
      "Electrical systems",
      "Industry certification preparation"
    ]
  },
  {
    name: "Electrical Installation",
    description: "Master residential and commercial electrical systems.",
    features: [
      "Circuit installation",
      "Electrical theory",
      "Safety practices",
      "Code compliance"
    ]
  },
  {
    name: "Plumbing",
    description: "Develop skills in plumbing installation and repair.",
    features: [
      "Pipe fitting",
      "Fixture installation",
      "Blueprint reading",
      "Code requirements"
    ]
  },
  {
    name: "Carpentry",
    description: "Learn woodworking and construction techniques.",
    features: [
      "Woodworking basics",
      "Construction methods",
      "Tool operation",
      "Project planning"
    ]
  },
  {
    name: "HVAC/R",
    description: "Study heating, ventilation, air conditioning, and refrigeration.",
    features: [
      "System installation",
      "Maintenance procedures",
      "Troubleshooting",
      "Energy efficiency"
    ]
  },
  {
    name: "Welding",
    description: "Master various welding techniques and procedures.",
    features: [
      "Arc welding",
      "MIG/TIG welding",
      "Safety protocols",
      "Certification prep"
    ]
  }
]

const faqs = [
  {
    question: "What are the age requirements?",
    answer: "Our adult education program is open to individuals who are 22 years of age or older."
  },
  {
    question: "How long are the programs?",
    answer: "Program lengths vary depending on the course, but typically run for one semester in the evening."
  },
  {
    question: "Are there any prerequisites?",
    answer: "Prerequisites vary by program. Contact our admissions office for specific program requirements."
  },
  {
    question: "Is financial aid available?",
    answer: "Contact our admissions office to learn about available payment options and assistance programs."
  },
  {
    question: "What certifications can I earn?",
    answer: "Many programs offer industry-recognized certifications upon successful completion."
  }
] 