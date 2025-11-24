import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingAssistant from './components/BookingAssistant';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <BookingForm />
        <Testimonials />
      </main>
      <Footer />
      <BookingAssistant />
      
      {/* Global CSS styles injected here for simplicity in single-file requirement context, 
          though usually in index.css. Using standard Tailwind, but some custom animations 
          add flare to the landing page.
      */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }

        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </div>
  );
};

export default App;