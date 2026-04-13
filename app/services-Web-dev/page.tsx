'use client'

import Link from 'next/link'
import {
    Home,
    ChevronRight,
} from 'lucide-react'
import React, { useState } from 'react';

// Web Development specific FAQ data
const webDevelopmentFaqData = [
    {
        id: 1,
        question: 'What is Web Development and Why is it important in 2024?',
        answer: 'Web development is the process of building and maintaining websites and web applications. In 2024, it is crucial for businesses because it enables them to establish a strong online presence, reach a global audience, provide services 24/7, and stay competitive in the digital marketplace.'
    },
    {
        id: 2,
        question: 'Which is the best company for web development?',
        answer: 'The best company for web development is one that understands your business needs, has a proven track record, offers end-to-end solutions, and provides ongoing support. Digiwebclub is recognized for its expertise, client-centric approach, and innovative solutions.'
    },
    {
        id: 3,
        question: 'What does a web development company do?',
        answer: 'A web development company designs, builds, and maintains websites and web applications. This includes front-end and back-end development, UI/UX design, e-commerce solutions, CMS integration, and ongoing maintenance and support.'
    },
    {
        id: 4,
        question: 'Why hire a web development company in India?',
        answer: 'Hiring a web development company in India offers cost-effective solutions, access to a large pool of skilled developers, high-quality work, and timely project delivery. Indian companies are known for their technical expertise and customer-focused approach.'
    },
    {
        id: 5,
        question: 'How much does it cost to develop a website?',
        answer: 'The cost to develop a website varies based on the complexity, features, design requirements, and technology stack. Simple websites may cost a few hundred dollars, while complex web applications can cost several thousand. It is best to request a custom quote based on your needs.'
    },
    {
        id: 6,
        question: 'Who needs web development services?',
        answer: 'Any business, organization, or individual looking to establish or improve their online presence needs web development services. This includes startups, small businesses, large enterprises, e-commerce stores, and personal brands.'
    },
    {
        id: 7,
        question: 'What makes Digiwebclub different from other web development companies?',
        answer: 'Digiwebclub stands out due to its client-focused approach, experienced team, use of the latest technologies, transparent processes, and commitment to delivering high-quality, customized solutions on time.'
    },
    {
        id: 8,
        question: 'Can Digiwebclub help with both front-end and back-end development?',
        answer: 'Yes, Digiwebclub offers comprehensive web development services, including both front-end (UI/UX, responsive design) and back-end (server, database, API) development to deliver complete and robust web solutions.'
    },
    {
        id: 9,
        question: 'How can I get started with Digiwebclub for my web development project?',
        answer: 'You can get started by contacting Digiwebclub through their website or contact page. Share your project requirements, and their team will guide you through the process from consultation to project delivery.'
    },
    {
        id: 10,
        question: 'Why web development is important for your business?',
        answer: 'Web development is important for your business because it helps you reach more customers, build credibility, provide better customer service, and grow your brand online. A well-developed website can drive sales, improve engagement, and support your business goals.'
    },
];

function WebDevelopmentFAQ() {
    const [openItem, setOpenItem] = useState<number | null>(1);
    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };
    return (
        <div className="space-y-3 md:space-y-4">
            {webDevelopmentFaqData.map((item) => (
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
                        className={`transition-all duration-300 ease-in-out ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

function WebDevelopment() {
    // Services array for cards section
    const services = [
        {
            image: "https://intileo.com/wp-content/uploads/2024/09/WordPress-1.webp",
            alt: "WordPress Website",
            title: "WordPress Website",
            description: "WordPress is a well-known Content Management System (CMS) it is a portal used to make websites. We use it to make websites of any size or any niche. WordPress provides different plugins and themes to make any type of website. We design, build, and maintain WordPress websites for our clients."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/26808069_7176459-1-quv3xccngwdzh25lh6ipdjdgb8l6edm28pxxgxa82m.webp",
            alt: "Custom Coded Website",
            title: "Custom Coded Website",
            description: "Custom Coded Website is a website that is built from scratch using HTML, CSS, and JavaScript. We use it to make websites of any size or any niche. Custom Coded Websites are more flexible and can be customized to fit any business needs. We design, build, and maintain Custom Coded Websites for our clients."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/21727022_6505894-1-scaled-quv41t31xkis8s2wrb7q8i6sethm6ki9d0x19qh484.webp",
            alt: "E-commerce Website",
            title: "E-commerce Website",
            description: "E-commerce Website is a website that is built to sell products or services online. We use it to make websites of any size or any niche. E-commerce Websites are more flexible and can be customized to fit any business needs. We design, build, and maintain E-commerce Websites for our clients."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/11817460_4851504-1-scaled-quv44ratduk6opsmj34kk9dvjcy3cd7xfmmwi03mp0.webp",
            alt: "CMS Web development",
            title: "CMS Web development",
            description: "CMS Web development is a website that is built using a Content Management System (CMS). We use it to make websites of any size or any niche. CMS Websites are more flexible and can be customized to fit any business needs. We design, build, and maintain CMS Websites for our clients."
        },

    ];

    const tools = [
        {
            name: 'PHP',
            icon: <img src="/web-dev/php-brands.svg/" alt="PHP Logo" className="w-10 h-10" />,
        },
        {
            name: 'React',
            icon: <img src="/web-dev/laravel-brands.svg" alt="Laravel Logo" className="w-10 h-10" />,
        },
        {
            name: 'Next.js',
            icon: <img src="/web-dev/magento-brands.svg" alt="Magento Logo" className="w-10 h-10" />,
        },
        {
            name: 'Javascript',
            icon: <img src="/web-dev/code-solid.svg" alt="Javascript Logo" className="w-10 h-10" />,
        },
        {
            name: 'HTML',
            icon: <img src="/web-dev/html5-brands.svg" alt="HTML5 Logo" className="w-10 h-10" />,
        },
        {
            name: 'CSS',
            icon: <img src="/web-dev/css3-alt-brands.svg" alt="CSS3 Logo" className="w-10 h-10" />,
        },
    ];

    return (
        <>
        <div className="overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-r from-[#14473b] to-[#03a564] overflow-hidden">
                {/* Decorative Gradient Circles */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#14473b] to-[#039158] /10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#02ef91]/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#039bad] rounded-full opacity-20"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Web Development</h1>
                    <nav className="flex items-center space-x-2 text-white/80">
                        <Home className="w-4 h-4" />
                        <Link href="/">
                            <span className="text-sm">Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm text-[#05ce9b]">Web Development</span>
                    </nav>
                </div>
            </section>

            

            {/* Web Development Info Section */}
            <section className="py-16 bg-white flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#05ce9b]">Best Website Development Company in India</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 w-full">

                        <p className="mb-6 text-lg">How will investing in a website benefit my business? If you have this question stuck in your mind, read further to get a clear and honest answer. Whether a small business or a well-known brand every business needs a website that represents the business and interacts with its users. The number of companies shifting to online presence has shot up at a great rate.</p>
                        <p className="mb-8 text-lg">Before investing, you need to know about the market. Post-pandemic surveys represent a visibly massive shift from offline business to online which has caused a 200$ million shift in the market. These stats are clear answers to why you need a website for your brand. This is the reason why you see a rise in website development agencies in India because where there is demand, there is supply.</p>
                        <Link href="/contact">
                            <button className="bg-gradient-to-r from-[#14473b] to-[#039158]  hover:from-[#039bad] hover:to-[#05ce9b] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105">Free Consultation</button>
                        </Link>
                    </div>
                    {/* Right Column: Illustration */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="https://intileo.com/wp-content/uploads/2024/09/2807782_18157-1-1536x958.webp"
                            alt="Web Development Illustration"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* How Web Development Services Stimulate Business Growth */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="mb-6 text-lg">If you have a website dedicated to your brand, it will directly interact with your audience, it will showcase your brand, moreover, it will make your brand public. There are a lot more benefits of having a website:</p>
                    <ul className="list-disc pl-6 mb-6 text-base">
                        <li className="mb-2"><span className="font-semibold">Online Presence and Targeted Audience:</span> Making a website will help you participate in the competition for digital presence. Around 93% of users search for a business on a search engine. This means if you do not have a website you are targeting only 7% of the potential customers, leaving 93% of the business opportunities behind.</li>
                        <li className="mb-2"><span className="font-semibold">Credibility and trust:</span> A website is the first point of contact between the user and the business. If you have a promising and functional website, it will help in building trust and credibility in the market. This credibility will result in an increased retention rate and loyal customers.</li>
                        <li className="mb-2"><span className="font-semibold">Market Expansion:</span> Even if you are an offline-based business and already have an audience be it small or large.  You can go for website development this will help you increase and expand your market leading to more business and more customers or consumers.</li>
                        <li className="mb-2"><span className="font-semibold">Progress Tracking:</span> Website is an optimized way of tracking your progress as a business, you can see how you are performing and compare the progress. Having a website allows you to see analytics like, how many people saw your website, what was their activity on it, etc. This makes room for improvement and feedback.</li>
                        <li className="mb-2"><span className="font-semibold">Leads and Profits:</span> Creating an online presence helps you reach a comparatively high audience, you can reach people all over the world. You don't have to limit yourself to any region. Being available to a wider audience will open doors to new leads or potential customers ultimately resulting in increased profits.</li>
                        <li className="mb-2"><span className="font-semibold">Spread Information:</span> Selling is only one of the many uses of a website. If you are a niche-based business along with promoting yourself you can spread information about your niche. You can post blogs on your website that provide value to your customers. This enhances the trust factor in the clients.</li>
                    </ul>
                    <p className="mb-6 text-base">You can easily get web designing services from any web development company in India and start your digital journey today!</p>

                    <h3 className="text-2xl font-bold mb-4">Benefits of Hiring a Website Development Company in India</h3>
                    <p className="mb-4 text-base">Now that you are familiar with the importance of a website now you will read about the importance of a website development company. If you want to experience benefits like Online Presence and Targeted Audience, Credibility and trust, Market Expansion, Progress Tracking, Leads and Profits, etc. You need professional assistance for sure.</p>
                    <p className="mb-4 text-base">Along with these are several more benefits you will get if you hire a website development company in India:</p>
                    <ul className="list-disc pl-6 mb-6 text-base">
                        <li className="mb-2"><span className="font-semibold">Professionalism and expertise:</span> A website development company is a team of professionals. If you hire professionals for your website development it will reflect on your website. Getting things done from the experts results in satisfying results.</li>
                        <li className="mb-2"><span className="font-semibold">Project Management:</span> Everything is organized in an organization and to create a website and make a promising online presence you must be organized. Giving your project to skilled developers will get it managed and planned effectively.</li>
                        <li className="mb-2"><span className="font-semibold">Quality Assurance:</span> If you get your website made from professionals you will not have to compromise on quality. Companies guarantee quality and ensure a fully functional website for your brand. You will receive high-quality services with the latest technologies resulting in perfect websites.</li>
                        <li className="mb-2"><span className="font-semibold">Strategic Planning:</span> Every project needs planning and strategies to execute them perfectly. Web development professionals ensure strategized planning to deliver results on time and results that align with your business goals.</li>
                        <li className="mb-2"><span className="font-semibold">Reliability and punctuality:</span> If you have hired a team of professionals you can easily rely on them to make a fully functional and relevant website for your brand. Along with reliability, they offer punctuality, making sure they deliver each project on time.</li>
                    </ul>
                    <p className="mb-6 text-base">These are some benefits that you will experience if you hire a website development company in India, these are must-haves when it comes to developing a website that is going to represent your brand in front of the world.</p>

                    <h3 className="text-2xl font-bold mb-4">Which is the Best Website Development Company in India?</h3>
                    <p className="mb-4 text-base">The straight one-word answer to this question is Digiwebclub. At Intileo we offer IT solutions to businesses. We have been serving businesses for the past 10 years.  We have made technically sound and user-optimized websites for businesses like Astrochat, Bythebook, Anchor, and many more.</p>
                    <p className="mb-4 text-base">We provide full-stack website development services for all small or large-scale businesses. Our comprehensive services include:</p>
                    <ul className="list-disc pl-6 mb-6 text-base">
                        <li className="mb-2"><span className="font-semibold">Customized Web Solutions</span><br />We provide customized web solutions as customization helps in standing out from the crowd. It will allow you to get yourself a website just the way you like you can put personal touches to make it unique. Customization is vital for business websites because of the differences in the sectors and niches. We will create a website that is like none other and is made just for you and your business needs.</li>
                        <li className="mb-2"><span className="font-semibold">Responsive Design</span><br />Having a broad audience means your website should be easily accessible to everyone. We make responsive websites. Websites that perform equally well on all devices and screen sizes are known as responsive websites. These enhance the user experience of the website providing quality to your clients.</li>
                        <li className="mb-2"><span className="font-semibold">Innovation and Creativity</span><br />Innovation is an essential ingredient for an all-rounder website. Keeping up with the ever-changing world is very important. Our innovative developers make unique websites that stand out and follow the latest trends in the market. We make websites like no one else.</li>
                        <li className="mb-2"><span className="font-semibold">Tech Expertise</span><br />Being an IT solution company we hold top-notch tech expertise which is devoted to our web development services. We make technically fit websites that have features and buttons that enhance the user experience.</li>
                        <li className="mb-2"><span className="font-semibold">Quality Assurance</span><br />We assure high-quality services to our clients. Keeping the importance of a website we make quality websites that help in creating a solid online presence.</li>
                        <li className="mb-2"><span className="font-semibold">Timely Delivery</span><br />We understand the value of time and clients. Adhering to deadlines and delivering outputs on or before time is an add-on to our services.</li>
                    </ul>
                    <p className="mb-6 text-base">We focus on a client-centric operation and that is why take full responsibility from scratch till completion. Even after completion we maintain the websites and provide timely updates to keep them fresh and user-friendly.</p>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">Types of Websites we develop as Website Development Company in India
                </h2>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-8">
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
                    <h2 className=" text-3xl md:text-4xl text-center font-bold mb-4">Technologies we use to develop Websites</h2>
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

            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Steps we use to Create Your Website</h2>
                <div className="w-full max-w-4xl mx-auto">
                    <ol className="list-decimal pl-6 space-y-6 text-lg text-gray-700">
                        <li>
                            <span className="font-semibold">Planning and Research:</span> Whenever a project starts, it starts with planning. We believe in collaboration and this is why we take a session to discuss the goals and targets regarding the business. The type of website you need and your expectations regarding the results.
                        </li>
                        <li>
                            <span className="font-semibold">Designing:</span> The next step is to convert your vision into an aesthetically appealing website. This step includes the development of wire framing the outline of the website. In this part, we work closely on the User Experience and User interface part to enhance the look and feel of the website.
                        </li>
                        <li>
                            <span className="font-semibold">Development:</span> Development works on two parts, the front end, and back end both of which include coding, in the front end we code the user interface of the website using programming languages like HTML, CSS, and Java. In the backend, we code the internal functions and features of a website using languages like PHP, Python, or Ruby.
                        </li>
                        <li>
                            <span className="font-semibold">Testing:</span> In this step, we test various aspects of the website. We check the functionality ensuring all the features are working properly or not. We check if the website is user-friendly or not and loading time or response time.
                        </li>
                        <li>
                            <span className="font-semibold">Deployment:</span> Once the Development and testing are done, the website is ready to be deployed on search engines.
                        </li>
                        <li>
                            <span className="font-semibold">Maintenance and updates:</span> The work does not end on the deployment part. After the launch, we are responsible for maintaining the website, regulating traffic, and also introducing needed updates timely to keep up with societal trends.
                        </li>
                    </ol>
                    <p className="mt-8 text-lg text-gray-800">These are the steps through which we create magic being a web development company in India. This is all about Web development, if you are aiming to launch a website for yourself do not waste time and get yourself a one-of-a-kind website from Intileo today!</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="w-full max-w-4xl mx-auto">
                    <WebDevelopmentFAQ />
                </div>
            </section>

        </div>
            </>
    )
}

export default WebDevelopment;