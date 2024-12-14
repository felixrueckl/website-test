import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <p className="text-lg mb-4">
            Have a question or want to work together? Fill out the form below and I'll get back to you
            as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@example.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Vienna, Austria</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}