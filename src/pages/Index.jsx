import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Package2, CheckCircle2, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Package2 className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Geofy</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground" href="#home">Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About Us</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">Pricing</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button className="bg-primary text-primary-foreground shadow hover:bg-primary/90" onClick={() => document.getElementById('membership').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-pastel-blue">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Affordable Energy for Everyone
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join Geofy and enjoy a fixed price energy membership for just 3000 SEK a month
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-primary text-primary-foreground shadow hover:bg-primary/90" onClick={() => document.getElementById('membership').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-pastel-green">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Geofy</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Geofy, we're committed to providing affordable, sustainable energy solutions for everyone. Our mission is to simplify energy consumption and make it accessible to all households.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Details Section */}
      <section id="membership" className="w-full py-12 md:py-24 lg:py-32 bg-pastel-yellow">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Membership</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enjoy worry-free energy consumption with our fixed price membership. For just 3000 SEK per month, you get:
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>No hidden fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>100% renewable energy</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Button className="bg-primary text-primary-foreground shadow hover:bg-primary/90">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-pastel-pink">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">What Our Customers Say</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
              <img
                alt="Customer"
                className="aspect-square rounded-full object-cover object-center"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <p className="text-xl font-semibold">John Doe</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "Geofy has made managing my energy consumption so much easier. I love the fixed price!"
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
              <img
                alt="Customer"
                className="aspect-square rounded-full object-cover object-center"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <p className="text-xl font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "The customer support is fantastic. They're always there when I need them."
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
              <img
                alt="Customer"
                className="aspect-square rounded-full object-cover object-center"
                height="80"
                src="/placeholder.svg"
                width="80"
              />
              <p className="text-xl font-semibold">Alex Johnson</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                "I appreciate that Geofy uses 100% renewable energy. It's great for the environment!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-pastel-purple">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <p className="text-gray-500 dark:text-gray-400">Geofy AB, 123 Energy Street, Stockholm, Sweden</p>
              <p className="text-gray-500 dark:text-gray-400">Phone: +46 123 456 789</p>
              <p className="text-gray-500 dark:text-gray-400">Email: info@geofy.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Geofy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Index;