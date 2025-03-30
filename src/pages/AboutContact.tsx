
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AboutContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
      action: <Check className="h-4 w-4" />
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="flex-1 space-y-10 p-6">
      {/* About Section */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About StratoFi</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Empowering investors with AI-driven insights and precision tools for smarter financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At StratoFi, we believe that advanced financial analytics shouldn't be limited to institutional investors.
              Our mission is to democratize access to AI-powered investment tools, making them accessible to individual
              investors around the world.
            </p>
            
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              We envision a future where every investor, regardless of their experience level or portfolio size,
              can make data-driven decisions with confidence. By harnessing the power of artificial intelligence,
              we aim to level the playing field in the financial markets.
            </p>
            
            <h2 className="text-2xl font-bold">Our Values</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li className="mb-2">Transparency in all our financial analyses and recommendations</li>
              <li className="mb-2">Innovation that continuously improves our predictive capabilities</li>
              <li className="mb-2">Accessibility to financial tools regardless of technical expertise</li>
              <li className="mb-2">Security and privacy in handling sensitive financial information</li>
              <li>Education to empower users to become better investors</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <Card className="glass-card flex-1">
              <CardHeader>
                <CardTitle>Company Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-bold">2023</p>
                  <p className="text-muted-foreground">StratoFi founded with seed investment</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-bold">2024 Q1</p>
                  <p className="text-muted-foreground">Launch of beta platform with AI prediction capabilities</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-bold">2024 Q2</p>
                  <p className="text-muted-foreground">Public release with premium subscription tiers</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-bold">2024 Q3</p>
                  <p className="text-muted-foreground">Introduction of advanced portfolio optimization tools</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-bold">2024 Q4</p>
                  <p className="text-muted-foreground">International expansion and multi-language support</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Our Team</CardTitle>
                <CardDescription>
                  Founded by experts in finance, AI, and technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  StratoFi brings together a diverse team of financial analysts, data scientists,
                  and software engineers with experience from leading financial institutions and
                  technology companies. Our unique blend of expertise enables us to build
                  innovative solutions that address real investor needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto" id="contact">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Have questions or need assistance? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">support@stratofi.ai</p>
              <p className="text-muted-foreground">info@stratofi.ai</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">Mon-Fri, 9AM-5PM EST</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Office</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">123 Finance Street</p>
              <p className="text-muted-foreground">Tech City, CA 94103</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Your full name"
                      className="glass-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="your.email@example.com"
                      className="glass-input"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    placeholder="How can we help?"
                    className="glass-input"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={5} 
                    required 
                    placeholder="Provide details about your inquiry..."
                    className="glass-input"
                  />
                </div>
                
                <Button type="submit" className="btn-gradient text-white w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
