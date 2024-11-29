import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <main className="flex-1">
      <div className="container py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Coop Tech&apos;s programs, admissions, and student support services.
          </p>
        </div>

        {/* General Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b">General Information</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-coop">
              <AccordionTrigger>What is Coop Tech?</AccordionTrigger>
              <AccordionContent>
                Coop Tech is a Career and Technical Education (CTE) program. It is part of the DOE.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hse-diploma">
              <AccordionTrigger>Can I get my High School or HSE diploma at Coop Tech?</AccordionTrigger>
              <AccordionContent>
                No. Coop Tech is not a high school and it does not offer a path to a High School or a HSE diploma.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="completion-certificate">
              <AccordionTrigger>What does a student receive upon completion of a Coop Tech course?</AccordionTrigger>
              <AccordionContent>
                Students receive a Certificate of Completion from Coop Tech. This is not equivalent to a diploma or exiting credential. In addition, all courses offer career specific Industry Certification Exams that are open to all students.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cdos-credential">
              <AccordionTrigger>Does Coop Tech issue the CDOS credential?</AccordionTrigger>
              <AccordionContent>
                No. Coop Tech does not issue the CDOS credential.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cdos-courses">
              <AccordionTrigger>Can Coop Tech courses be used towards the CDOS Credential?</AccordionTrigger>
              <AccordionContent>
                Yes. Coop Tech courses are CTE certified. Students receive 3 elective CTE credits per semester that may be applied towards the CDOS credential. These credits are automatically reflected on a student's transcript upon successful completion of a course.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="job-placement">
              <AccordionTrigger>Does Coop Tech provide job placement or transition services?</AccordionTrigger>
              <AccordionContent>
                No. Coop Tech does not provide job placement. Transition planning is the responsibility of the referring school. Coop Tech is only a part of a robust transition plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="internship">
              <AccordionTrigger>Does Coop Tech offer an internship program?</AccordionTrigger>
              <AccordionContent>
                Coop Tech has an Office of Work-Based Learning that provides career training workshops and resources to all students. Internship opportunities are offered on an individual basis. All students are welcome to apply for an internship. Students are not guaranteed a paid internship.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="doe-calendar">
              <AccordionTrigger>Does Coop Tech follow the DOE calendar?</AccordionTrigger>
              <AccordionContent>
                Yes. Coop Tech is a DOE program and follows the DOE calendar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="course-length">
              <AccordionTrigger>How long are Coop Tech courses?</AccordionTrigger>
              <AccordionContent>
                Most courses are one year (2 semesters) long.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="class-schedule">
              <AccordionTrigger>What is the class schedule at Coop Tech?</AccordionTrigger>
              <AccordionContent>
                <p>Coop Tech has two class sessions: AM (8:30-11:00 AM) and PM (12:20-2:50 PM).</p>
                <p className="mt-2">*The class schedule may differ for Coop Tech off-sites.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Application Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Application Process</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="who-can-apply">
              <AccordionTrigger>Who can apply to Coop Tech?</AccordionTrigger>
              <AccordionContent>
                In order to apply to Coop Tech, applicants must be 17-21 years old and either in high school (11th and 12th grades only), a D79 program, or post-graduates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="alternate-assessment">
              <AccordionTrigger>Can students who are alternately assessed apply to Coop Tech?</AccordionTrigger>
              <AccordionContent>
                Yes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="travel-training">
              <AccordionTrigger>Can students who are not travel trained apply to Coop Tech?</AccordionTrigger>
              <AccordionContent>
                Yes. However, it is highly recommended that students be able to travel independently or in the process of being travel trained.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="d75-transportation">
              <AccordionTrigger>Who provides transportation arrangements for D75 students?</AccordionTrigger>
              <AccordionContent>
                Transportation arrangements must be put in place by the student's D75 School.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Student Support */}
        <section>
          <h2 className="text-3xl font-bold mb-6 pb-2 border-b">Student Support</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="special-ed-support">
              <AccordionTrigger>What Special Education supports are available at Coop Tech?</AccordionTrigger>
              <AccordionContent>
                Coop Tech is a general education vocational program. Classes are taught by CTE teachers and vary in size from 22-28 students. Some classes have a classroom paraprofessional. The main campus has a drop-in student support center on a limited schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="iep-support">
              <AccordionTrigger>Who provides additional supports and services for special education students as per a student's IEP?</AccordionTrigger>
              <AccordionContent>
                <p>The D75 School is responsible for any IEP mandated supports and services (i.e. individual paraprofessional support, related services, assistive technology, etc.).</p>
                <p className="mt-2">D75 Schools sending 4 or more students to Coop Tech are expected to provide programmatic paraprofessional support for the CTE classes.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </main>
  )
} 