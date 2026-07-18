'use client'

import Link from 'next/link'
import {
    Home,
    ChevronRight,
    BarChart3,
    Search,
    Flame,
    LineChart,
    Mail,
    Figma
} from 'lucide-react'
import React, { useState } from 'react';

// Digital Marketing specific FAQ data
const digitalMarketingFaqData = [
  {
    id: 1,
    question: 'What is Digital Marketing and Why is it important?',
    answer: 'Digital marketing refers to the use of digital channels, platforms, and technologies to promote products or services to consumers. It is important because it allows businesses to reach a larger audience, target specific demographics, measure results in real-time, and achieve cost-effective marketing outcomes.'
  },
  {
    id: 2,
    question: 'What are the benefits of investing in digital marketing?',
    answer: 'Benefits include increased brand visibility, targeted audience reach, measurable results, improved conversion rates, cost-effectiveness, and the ability to engage with customers through multiple channels.'
  },
  {
    id: 3,
    question: 'Why choose NICS Automation for the Best Digital Marketing Services?',
    answer: 'NICS Automation offers proven expertise, tailored solutions, global reach with a local touch, commitment to results, award-winning experience, and dedicated support for your digital marketing needs.'
  },
  {
    id: 4,
    question: 'How do I choose good Digital Marketing Services?',
    answer: 'Look for agencies with a strong track record, transparent processes, a wide range of services, positive client testimonials, and a focus on data-driven strategies.'
  },
  {
    id: 5,
    question: 'What are the different types of Digital Marketing Services?',
    answer: 'Types include Search Engine Optimization (SEO), Social Media Marketing (SMM), Content Marketing, Email Marketing, Pay Per Click (PPC), and UI/UX optimization.'
  },
  {
    id: 6,
    question: 'What is the future of Digital Marketing?',
    answer: 'The future of digital marketing involves increased personalization, automation, use of AI and data analytics, omnichannel strategies, and a focus on customer experience.'
  },
  {
    id: 7,
    question: 'What is Content Marketing, and Why is it Valuable?',
    answer: 'Content marketing involves creating and sharing valuable content to attract and engage a target audience. It is valuable because it builds trust, educates customers, and drives profitable actions.'
  },
  {
    id: 8,
    question: 'How can Digital Marketing Help My Business?',
    answer: 'Digital marketing can help your business by increasing online visibility, generating leads, improving customer engagement, and driving sales growth.'
  },
  {
    id: 9,
    question: 'Is Digital Marketing Suitable for Small Business or Startups?',
    answer: 'Yes, digital marketing is highly suitable for small businesses and startups as it offers cost-effective ways to reach and engage potential customers.'
  },
  {
    id: 10,
    question: 'How much does it cost to hire the Best Digital Marketing Company in India?',
    answer: 'The cost varies depending on the scope of services, business goals, and agency expertise. It is best to request a customized quote based on your specific needs.'
  },
];

function DigitalMarketingFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(1);
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  return (
    <div className="space-y-3 md:space-y-4">
      {digitalMarketingFaqData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md"
        >
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 sm:pr-8">
              {item.question}
            </h3>
            <div className="flex-shrink-0">
              {openItem === item.id ? (
                <span className="text-2xl text-[#05ce9b]">&#8722;</span>
              ) : (
                <span className="text-2xl text-[#05ce9b]">&#43;</span>
              )}
            </div>
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="h-px bg-gray-200 mb-3 sm:mb-4"></div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function DigitalMarketing() {
    // Services array for cards section
    const services = [
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/25921169_7155205-1-scaled-quv9aef756org4ojt4tmqrwlshqa8pzu28zorbknig.webp",
            alt: "SEO",
            title: "Search Engine Optimization (SEO)",
            description: "Search Engine Optimization is an optimizing process. It enhances the ranking and visibility of the website. SEO is a major feature of digital marketing services. It includes keyword research, link building, image and on-page websites, and technical optimization. It enhances the business including optimizing your details and providing result-oriented conversions."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/10802152_4530890-1-scaled-quv9dk5o450ggy3cczzhmh7do45p43jctvxftsw0lk.webp",
            alt: "SMM",
            title: "Social Media Marketing (SMM)",
            description: "Social Media Marketing is an approach. It helps the business to stand out on multiple social media platforms. It also helps to promote your online presence. SMM can enhance your business insights. It provides people with complete information about your business. You can reach out to you easily from a long distance."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/12698342_Bloggers-and-influencers-writing-articles-1-scaled-quv9h3zpxlvgbwxnmj8r1ky2ginm6xmungnh3fmh3c.webp",
            alt: "Content Marketing",
            title: "Content Marketing",
            description: "Content marketing is an essential and functional written representation of your product, brand, or business. It allows customers to connect, take action, and attain business goals. The content can help you gain valuable insights. You can grab the attention of the viewers and audience. Also, it helps you to convert or encourage them to visit your sites."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/3425175_59877-1-scaled-quv9opir6e9w6fwc9bh6p5x7bn7feusqp2hrqycwso.webp",
            alt: "Email marketing",
            title: "Email marketing",
            description: "Email Marketing is an enhancing modern technology approach. These are offered by any digital marketing agency. It helps you to attain better results as you can target the relevant audience. You can send them regular updates of your brand by sending emails. It helps them to find potential clients by targeting the bulk audience. It enhances loyalty for your business. You can also generate faith, build relationships, and enhance business success."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/18771520_6030259-1-scaled-quv9r6tf7no4teamrw2qs1dzr8zaq3n8pcgwc8oidk.webp",
            alt: "Pay Per Click (PPC)",
            title: "Pay Per Click (PPC)",
            description: "Pay Per Click is a paid advertisement method. It allows businesses to get paid online on the basis of clicks they get on their advertisements. It is completely based on keywords, locations, and search personalizations. It is one of the most efficient and effective methods of advertisements. It is completely result-oriented."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/31745454_7856001-1-scaled-quv9ttr4dxa3e0gqdj429vfjr5zdbj44qecxt6rqx4.webp",
            alt: "UI / UX",
            title: "UI / UX",
            description: "User Interface (UI) and User Experience (UX) are the major features, visuals, and experiences. It fascinates users towards the business presence. It satisfies the users and provides better user interactions and experiences. UI is the core or first impression that interacts with the user. It makes them get a better user experience."
        },


    ];

    const tools = [
        {
            name: 'Google Analytics',
            icon: <BarChart3 className="w-10 h-10" />, // blue highlight
        },
        {
            name: 'Google Search Console',
            icon: <Search className="w-10 h-10" />,
        },
        {
            name: 'Semrush',
            icon: <Flame className="w-10 h-10" />,
        },
        {
            name: 'Ahref',
            icon: <LineChart className="w-10 h-10" />,
        },
        {
            name: 'Mail Chimp',
            icon: <Mail className="w-10 h-10" />,
        },
        {
            name: 'Figma',
            icon: <Figma className="w-10 h-10" />,
        },
    ];

    return (
        <>

            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-r from-[#14473b] to-[#03a564] overflow-hidden">
                {/* Decorative Gradient Circles */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#14473b] to-[#039158] /10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#02ef91]/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#039bad] rounded-full opacity-20"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Digital Marketing</h1>
                    <nav className="flex items-center space-x-2 text-white/80">
                        <Home className="w-4 h-4" />
                        <Link href="/">
                            <span className="text-sm">Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm text-[#05ce9b]">Digital Marketing</span>
                    </nav>
                </div>
            </section>

           

            {/* Digital Marketing Info Section */}
            <section className="py-16 bg-white flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#05ce9b]">Result Oriented Digital Marketing Services in India</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 w-full">

                        <p className="mb-6 text-lg">In this modern world, digital marketing services are the most result-orienting and essential online marketing method. It allows a business to grow rapidly. You can grow your business through online platforms. It uses online mediums like social media, websites, google profiles, advertisements, and more.</p>
                        <p className="mb-8 text-lg">Digital marketing is a result-oriented marketing method. It allows businesses to showcase their presence on online platforms. Enterprises are widely shifting toward the online medium of business. These are found to be focused on enhancement. People are shifting and searching for reliable digital marketing services in India. Here we are, NICS Automation is your one-stop solution. We have helped hundreds of national and international firms grow their online presence. We aim to deliver fascinating digital marketing services in India.</p>
                        <Link href="/contact">
                            <button className="bg-gradient-to-r from-[#14473b] to-[#039158]  hover:from-[#039bad] hover:to-[#05ce9b] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105">Free Consultation</button>
                        </Link>
                    </div>
                    {/* Right Column: Illustration */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="https://intileo.com/wp-content/uploads/elementor/thumbs/13961233_5395108-1-quv96ycm3ryotqqo173rr0qchruukrc6xbme321h70.webp"
                            alt="Digital Marketing Illustration"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* How Digital Marketing Services Stimulate Business Growth */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">How Digital Marketing Services Stimulate Business Growth?</h3>
                    <p className="mb-4">Enhancing brand awareness is a great benefit of digital marketing services. The degree to which your target audience is aware of your brand. Online advertisements can actually raise brand recognition. The percentage is approx. 80% or more. It can enhance and create your business growth. It adapts personalized marketing services.</p>
                    <p className="mb-4">We at NICS Automation ensure that your business has a greater possibility of converting leads into consumers. Numerous chances exist in digital marketing with us. It helps to raise brand exposure in a smooth, non-disruptive manner. Infographics, blog entries, videos, social media posts, and PPC advertisements are some of the services. Digital marketing services offered by us generate leads. Also we ensure that you have a greater conversion rate. It boosts income and sales.</p>
                    <h4 className="text-2xl font-semibold mt-8 mb-4">The following is a comparison between digital marketing and traditional marketing services.</h4>
                    <div className="mb-6">
                        <ul className="list-disc pl-6 mb-4">
                            <li className="mb-2"><span className="font-semibold">Digital Marketing:</span>
                                <ul className="list-disc pl-6">
                                    <li>Any kind of marketing that takes place online, through email, or through mobile devices is referred to as digital marketing.</li>
                                    <li>Is highly popular for the significant growth in Internet marketing.</li>
                                    <li>Targets a huge number of potential audiences.</li>
                                    <li>Allows companies to structure their campaigns directly on electronic platforms.</li>
                                </ul>
                            </li>
                            <li className="mb-2"><span className="font-semibold">Traditional Marketing:</span>
                                <ul className="list-disc pl-6">
                                    <li>It involves offline marketing through radio, TV newspaper, and other offline advertisements.</li>
                                    <li>Large companies with huge resources still prefer it.</li>
                                    <li>Targets a specific number of audience.</li>
                                    <li>This marketing method has limitations and can never be used for marketing campaigns on a global level.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <p className="mb-4">The swift expansion of information technology (IT) has resulted in a shift in the methods used by business processes. It is found across several industries. Words like online business, e-tailing, e-commerce, etc. are all the rage. A few years ago, it was nearly unimaginable for business houses to expand their operations globally.</p>
                    <p className="mb-4">However, it is a fantastic time for them to do so. We, at NICS Automation, help businesses convert their current business models to online ones or incorporate digital marketing strategies into their current marketing plans. Brick-and-mortar companies now have a whole new range of opportunities. It helps them to grow their customer base in both existing and emerging markets.</p>
                    <h4 className="text-2xl font-semibold mt-8 mb-4">Advantages of Attaining Services from a Digital Marketing Services in India?</h4>
                    <p className="mb-4">Cold calling and print advertising are less relevant in the current digital era. It is imperative for modern organizations to prioritize their clients. Any reputable digital marketing business would agree to that. Meet the needs of your target population and stay in tune with them. These are essential. It could not be possible through ancient marketing methods. You must prefer digital mediums in this modern and advanced era.</p>
                    <p className="mb-4">Digital marketing is a powerful toolkit. It allows a company to interact with customers online. Remember that web design and digital marketing work hand in hand. It is becoming more important to polish the aesthetics of the website. It is done in addition to the advertising. It is important to choose a reliable and result-oriented digital marketing services in India. It allows you to make your business flourish.</p>
                    <p className="mb-4">We are a creative team since we have to continuously think of fresh, cutting-edge methods to draw in their target audience. We were involved in composing catchy copy, designing eye-catching ads, producing interesting material for social media, and other duties. We collaborate across functional lines with teams like sales, development, and design. Effective communication abilities support developing connections with stakeholders and effectively communicating their ideas.</p>
                    <p className="mb-4">The different digital marketing channels need to be understood. As a leading digital marketing services in India, we know how to use each channel to reach the target audience. We also help your brand to incorporate it into a coherent digital marketing strategy. We know the benefits and drawbacks of each channel for your business.</p>
                    <p className="mb-4">Data analysis is a crucial ability for digital marketing services to have in order to make wise judgments. We are familiar with data analysis programs like Google Analytics, comprehending important metrics like bounce and conversion rates. It makes your organization able to see trends and patterns to enhance marketing strategies. Our digital marketing services ensure:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Result Orientation</li>
                        <li>Manifesting Strategies</li>
                        <li>Innovation and Advancements</li>
                        <li>Competent Marketing Team</li>
                        <li>Highly Data Driven</li>
                        <li>Personalization and Responsive</li>
                    </ul>
                    <h4 className="text-2xl font-semibold mt-8 mb-4">Why Hire NICS Automation for Digital Marketing Services?</h4>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2"><span className="font-semibold">Proven Expertise and Excellence:</span> Digital marketing, offered by NICS Automation is an excellent way to get the word out. It is worthy, especially for new firms. Social media, Google Paid Search, and search engine optimization are excellent ways to build a brand's awareness and familiarity (SEO). With digital marketing, you can approach your potential clients. They are present in different regions in the world. You would observe better results through social media and online ads. These are in contrast to traditional marketing's limited reach.</li>
                        <li className="mb-2"><span className="font-semibold">Tailored Solution for Every Business:</span> Digital Marketing Services at NICS Automation, encourages two-way contact. Businesses can interact with customers in real time through social media, email, and surveys. It can improve customer relations. You might receive real-time client feedback with digital marketing. This information can be used by a digital marketing company. It helps them to improve their services and tailor their marketing initiatives. It is unlike traditional marketing, which relies solely on conjecture. Digital marketing offers verifiable data regarding the effectiveness of a campaign. Google Analytics is used. It is a tool that tracks website visits, ad clicks, and other analytics. It can assist businesses in making more informed marketing decisions.</li>
                        <li className="mb-2"><span className="font-semibold">Global Reach Local Touch:</span> Digital marketing with us enables businesses to capture a bigger market share. We help to boost brand recognition and customer loyalty. Digital marketing campaigns, offered by any digital marketing services are often economical. It is possible when compared to traditional methods. Email marketing and social media are two examples of free or inexpensive tools. It helps organizations generate leads and build relationships with customers. Research shows that digital marketing provides a good return on investment. We use Google Ads for advertising. Businesses may see a significant rise in revenue. It is done by deploying email campaigns and customized internet marketing.</li>
                        <li className="mb-2"><span className="font-semibold">Commitment to Results:</span> Businesses may gain deeper insight into the preferences and behaviors of their clients through digital marketing. As a result, they can enhance their goods and services. It helps them to continue to outperform the competitors. The goal of digital channel marketing is to boost sales. Businesses can draw in new customers and boost revenue from existing ones. They have access to engaging content and marketing efforts. They can also run Google ads, and promote their brand.</li>
                        <li className="mb-2"><span className="font-semibold">Award-Winning Experience:</span> We at NICS Automation have offered several leading businesses as well as entrepreneurs. We understand that digital marketing services are crucial to boost sales for your brands. You can attract potential buyers for your brands. Thus, we aim to offer exceptional services every time you approach us. We are renewed for the best-in-class digital marketing services. There is more to digital marketing than just visually appealing ads and social media posts. In the digital age, it all comes down to building genuine relationships with your customers. We also help in expanding your business in a sustainable manner. We have been awarded many times for our exceptional approach to digital marketing.</li>
                        <li className="mb-2"><span className="font-semibold">Dedicated Support:</span> Today, working with a digital marketing company is a must, not a choice. Getting unmatched excellence in digital marketing is possible. Choose services with a digital marketing company like NICS Automation. If you want to reach a certain demographic, rank better in search engine results. Digital marketing helps you to produce much-needed leads and be seen and heard on the internet!</li>
                    </ul>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">Services we Offers as a Digital Marketing Company in India?</h2>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 bg-white rounded-3xl shadow-lg p-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r  hover:from-[#14473b] hover:to-[#03a564] hover:text-white shadow-md group"
                        >
                            <img src={service.image} alt={service.alt} className="w-full max-w-xs mb-6 transition duration-300 rounded-xl group-hover:shadow-xl" />
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-base">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Used Section */}
            <section className="py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="md:w-1/3 w-full flex flex-col justify-center items-center px-8 md:px-0 mb-8 md:mb-0">
                    <h2 className=" text-3xl md:text-4xl text-center font-bold mb-4">Tools we used in Digital Marketing</h2>
                </div>
                <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {tools.map((tool, idx) => (
                        <div
                            key={tool.name}
                            className={`flex flex-col items-center justify-center rounded-2xl p-10 min-h-[180px] shadow-md transition duration-300 cursor-pointer border border-transparent hover:bg-gradient-to-r  hover:from-[#14473b] hover:to-[#03a564] hover:text-white hover:border-[#03a564]`}
                        >
                            <div className="mb-4">{tool.icon}</div>
                            <span className="text-xl font-semibold text-center">{tool.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="w-full max-w-4xl mx-auto">
                    <DigitalMarketingFAQ />
                </div>
            </section>

        </>
    )
}

export default DigitalMarketing;