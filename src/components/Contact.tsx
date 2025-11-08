import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nnnabilaaasr19@gmail.com",
      href: "mailto:nnnabilaaasr19@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+62 82189643675",
      href: "tel:+62 82189643675"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Makassar,Indonesia",
      href: "https://maps.app.goo.gl/ydyXQGGKG41Pd8EXA"
    }
  ];

  return (
    <section id="contact" className="py-20 relative bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {contactInfo.map((info, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth card-shadow hover:glow-effect group"
              >
                <a 
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center gap-4"
                >
                  <div className="p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <info.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Map */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-border card-shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65747143927!2d119.24309754999999!3d-5.1477463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4671%3A0x3030bfbcaf770b0!2sMakassar%2C%20Makassar%20City%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Makassar Location"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;