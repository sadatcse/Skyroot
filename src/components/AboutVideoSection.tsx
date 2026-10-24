import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

// Content Dictionary for both languages
const content = {
  bn: {
    subtitle: "আমাদের সম্পর্কে",
    title: "আপনার জীবনযাত্রার নতুন সংজ্ঞা",
    p1: "স্কাইরুট রিয়েল এস্টেট লিমিটেড ২০০৯ সালে প্রতিষ্ঠিত হয়, যার লক্ষ্য ছিল শক্তিশালী ব্র্যান্ড, নির্ভরযোগ্য পণ্য এবং বিস্তৃত পরিসরের সেবার মাধ্যমে মানুষের জীবনযাত্রার মান উন্নত করা। বাংলাদেশের ক্রমবর্ধমান রিয়েল এস্টেট খাতে মূল্য এবং উদ্ভাবনের সমন্বয় ঘটাতে একটি 'ড্রিম টিম' নিয়ে ২০১৫ সালে এটি রিয়েল এস্টেট খাতে প্রবেশ করে। নকশা, কাঠামোগত মাত্রা, স্থান ও সম্পদ সংরক্ষণের পাশাপাশি পরিবেশগত সুস্থতার ওপর উল্লেখযোগ্য মনোযোগ দেওয়ার মাধ্যমে আমরা আপনাকে আবাসিক ও বাণিজ্যিক আবাসনে সর্বোচ্চ সহায়তা প্রদান করি।",
    p2: "বিভিন্ন ক্ষেত্রের দক্ষতাকে একত্রিত করে সমসাময়িক জীবনযাত্রার উৎকৃষ্ট উদাহরণ তৈরি করতে আমরা স্বাতন্ত্র্যমণ্ডিত সেবা প্রদান করি এবং কঠোরভাবে প্রজেক্ট হস্তান্তরের সময়সীমা মেনে চলি। সততা এবং বিশ্বস্ততার দিক থেকে ঢাকায় আপনার সবচেয়ে নির্ভরযোগ্য ডেভেলপার হওয়ার প্রতিশ্রুতি আমরা দিচ্ছি।",
    button: "আরও জানুন",
    videoTitle: "সর্ববৃহৎ ডেভেলপার",
    videoSubtitle: "বসুন্ধরা আবাসিক এলাকায়"
  },
  en: {
    subtitle: "ABOUT US",
    title: "REDEFINING YOUR STANDARD OF LIVING",
    p1: "Skyyroot Real Estate Ltd was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the real estate sector in 2015 with its 'dream team' dedicated to merge value and innovation in the evolving real estate sector of Bangladesh. Through considerable focus on design, structural dimension, and feasibility in the sense of space and resource conservation; as well as environmental soundness; we deliver you optimum support in residential and commercial accommodation.",
    p2: "Conjoining the expertise of different fields to develop and bring in the quintessence of contemporary lifestyle, we provide distinguished services and strictly maintain project handover deadlines. We assure you to be your most reliable developer in Dhaka in terms of integrity and credibility.",
    button: "Learn More",
    videoTitle: "The Biggest Developer",
    videoSubtitle: "in Bashundhara R/A"
  }
};

export const AboutVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lang, setLang] = useState('bn'); // 'bn' for Bangla, 'en' for English

  const t = content[lang];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setLang('bn')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${lang === 'bn' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
                }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${lang === 'en' ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:text-primary'
                }`}
            >
              English
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            key={lang} // Forces re-animation when language changes
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                {t.subtitle}
              </span>
              <h2 className={`text-4xl md:text-5xl font-bold text-primary leading-tight ${lang === 'bn' ? 'leading-snug' : ''}`}>
                {t.title.split(' LIVING')[0]}
                {lang === 'en' && <br className="hidden md:block" />}
                {lang === 'en' ? ' LIVING' : ''}
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>

            <button className="px-10 py-3 border border-transparent text-white font-bold bg-primary hover:bg-emerald-600 hover:text-white transition-all duration-300 rounded-sm text-sm">
              {t.button}
            </button>
          </motion.div>

          {/* Right Video Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[9/16] w-full max-w-sm mx-auto group"
          >
            {!isPlaying ? (
              <div className="relative w-full h-full cursor-pointer overflow-hidden rounded-md shadow-lg" onClick={() => setIsPlaying(true)}>
                <img
                  src="/videos/skyroot-intro-poster.jpg"
                  alt="Skyyroot Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">
                    {t.videoTitle}
                  </h3>
                  <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md mb-6">
                    {t.videoSubtitle}
                  </p>

                  {/* Play Button */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600/30 rounded-full animate-ping"></div>
                    <button
                      className="relative w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-red-700"
                      aria-label="Play Video"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <video
                className="w-full h-full object-cover rounded-md shadow-lg bg-black"
                src="/videos/skyroot-intro.mp4"
                poster="/videos/skyroot-intro-poster.jpg"
                title="Skyyroot Real Estate Ltd Video"
                controls
                autoPlay
                playsInline
              ></video>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};