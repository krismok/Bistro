import { ContactForm } from "@/components/contact/ContactForm";
import { Map } from "@/components/contact/Map";

export default function Contact() {
  return (
    <main className="container mx-auto max-w-6xl px-4 md:px-8 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <ContactForm />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
          <Map />
          <div className="mt-6 space-y-4">
            <p>
              <strong>Address:</strong><br />
              123 Restaurant Street<br />
              City, State 12345
            </p>
            <p>
              <strong>Phone:</strong><br />
              (555) 123-4567
            </p>
            <p>
              <strong>Hours:</strong><br />
              Mon-Thu: 11am - 10pm<br />
              Fri-Sat: 11am - 11pm<br />
              Sun: 11am - 9pm
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
