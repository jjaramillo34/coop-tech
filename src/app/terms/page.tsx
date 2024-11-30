import { Title } from "@/components/ui/title"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title variant="section" className="mb-8">Terms of Service</Title>
      
      <div className="prose prose-primary max-w-none">
        <p className="mb-4">
          Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using the CoopTech website.
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          By accessing our website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our website.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of CoopTech and its licensors.
        </p>

        <h2>User Account</h2>
        <p>
          When you create an account with us, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms.
        </p>

        <h2>Links To Other Web Sites</h2>
        <p>
          Our Service may contain links to third-party websites or services that are not owned or controlled by CoopTech.
        </p>
        <p>
          CoopTech has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
        </p>

        <h2>Termination</h2>
        <p>
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of New York State, without regard to its conflict of law provisions.
        </p>

        <h2>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:<br />
          Email: terms@cooptech.org<br />
          Address: 321 E 96th Street, New York, NY 10128
        </p>
      </div>
    </div>
  )
} 