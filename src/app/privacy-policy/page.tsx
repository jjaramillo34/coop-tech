import { Title } from "@/components/ui/title"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Title variant="section" className="mb-8">Privacy Policy</Title>
      
      <div className="prose prose-primary max-w-none">
        <p className="mb-4">
          This Privacy Policy describes how your personal information is collected, used, and shared when you visit CoopTech (&ldquo;the Site&rdquo;).
        </p>

        <h2>Personal Information We Collect</h2>
        <p>
          When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>

        <h2>How We Use Your Personal Information</h2>
        <p>
          We use the information that we collect generally to:
        </p>
        <ul>
          <li>Communicate with you</li>
          <li>Screen for potential risk or fraud</li>
          <li>Provide you with information or advertising relating to our products or services</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          When you submit information through the Site, we will maintain your information for our records unless and until you ask us to delete this information.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons.
        </p>

        <h2>Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email or by mail using the details provided below:
        </p>
        <p>
          Email: privacy@cooptech.org<br />
          Address: 321 E 96th Street, New York, NY 10128
        </p>
      </div>
    </div>
  )
} 