'use client'

import Link from 'next/link'
import {
    Home,
    ChevronRight,
} from 'lucide-react'
import React, { useState } from 'react';

// App Development specific FAQ data
const AppDevelopmentFaqData = [
    {
        id: 1,
        question: 'What is App Development and Why is it Important?',
        answer: "App development is the process of creating software applications that run on mobile devices. It is important because mobile apps help businesses reach customers directly, improve engagement, streamline operations, and provide value-added services, making them essential in today's digital world."
    },
    {
        id: 2,
        question: 'Why is Mobile App Development Important for Your Business?',
        answer: 'Mobile app development is crucial for businesses as it enhances customer engagement, increases accessibility, builds brand loyalty, and provides a competitive edge. Apps allow businesses to offer personalized experiences, push notifications, and convenient services to users on the go.'
    },
    {
        id: 3,
        question: 'Which Company is Best for App Development services in India?',
        answer: 'The best company for app development in India is one with a proven track record, skilled developers, a client-centric approach, and a portfolio of successful projects. NICS Automation is recognized for delivering innovative, customized, and reliable mobile app solutions tailored to client needs.'
    },
    {
        id: 4,
        question: 'What is API in Mobile Application Development?',
        answer: 'An API (Application Programming Interface) in mobile app development allows different software systems to communicate with each other. APIs enable apps to access data, features, or services from other applications, making them essential for integrating third-party services and enhancing app functionality.'
    },
    {
        id: 5,
        question: 'What are Mobile Application Development Services?',
        answer: 'Mobile application development services include designing, building, testing, and maintaining mobile apps for platforms like iOS and Android. Services may also cover UI/UX design, backend development, API integration, app deployment, and ongoing support and updates.'
    },
    {
        id: 6,
        question: 'Why consider NICS Automation for the best Mobile App Development Services in India?',
        answer: 'NICS Automation offers a decade of experience, a skilled team, and a client-focused approach. We provide end-to-end mobile app solutions, from ideation to deployment and maintenance, ensuring high-quality, secure, and scalable apps that help your business grow.'
    },
    {
        id: 7,
        question: 'What Platforms or Technologies Do You Specialize in (iOS, Android, Cross-Platform)?',
        answer: 'We specialize in developing apps for iOS, Android, and cross-platform solutions using technologies like React Native, Flutter, and native development tools. This ensures your app reaches the widest possible audience with optimal performance.'
    },
    {
        id: 8,
        question: 'What is the App Development Process?',
        answer: 'Our app development process includes collaboration and planning, wireframing and design, development, testing, deployment, and ongoing maintenance. We work closely with clients at every step to ensure the final product meets their goals and expectations.'
    },
    {
        id: 9,
        question: 'What is the Difference Between Frontend and Backend Development in App Development?',
        answer: 'Frontend development focuses on the app\'s user interface and user experience, while backend development handles server-side logic, databases, and APIs. Both are essential for creating a functional, responsive, and secure mobile app.'
    },
    {
        id: 10,
        question: 'How Long Does it Take to Develop an App?',
        answer: 'The time to develop an app depends on its complexity, features, and platform. Simple apps may take a few weeks, while complex, feature-rich apps can take several months. We provide a detailed timeline after understanding your requirements.'
    },
];

function AppDevelopmentFAQ() {
    const [openItem, setOpenItem] = useState<number | null>(1);
    const toggleItem = (id: number) => {
        setOpenItem(openItem === id ? null : id);
    };
    return (
        <div className="space-y-3 md:space-y-4">
            {AppDevelopmentFaqData.map((item) => (
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

function AppDevelopment() {
    // Services array for cards section
    const services = [
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/10115990_4372937-1-scaled-quv672fhoc9q408zpqnl042pti2xpnfxzacqhu1pnk.webp",
            alt: "Custom Mobile App Development",
            title: "Custom Mobile App Development",
            description: "We promote collaboration through our custom mobile app development services. Your thoughts and ideas will be turned into a fully functional and high-technology mobile application through our skilled developers. We will work closely with your vision and will give you an app that helps you stand out."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/26764326_2112.i301.030.S.m004.c13.UI-and-UX-designers-concepts-isometric-composition-scaled-quv6a85ynalf4tns9ltfvtdhp4icl0zgqxahkbd2qo.jpg",
            alt: "Cross-Platform App Development",
            title: "Cross-Platform App Development",
            description: "Having a business comes with a diverse audience and users. An app that works on all operating systems is a must-have. We will create a versatile mobile app for you that works equally well on all operating systems, like IOS, Android, and the Web. A cross-platform mobile application will bind your diverse audience into one unit and will bring them to a common ground."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/16735339_5805710-scaled-quv6mbd8jl5cl9awz5jg0eawuogjynkjiszndbeafg.jpg",
            alt: "Native App Development",
            title: "Native App Development",
            description: "Native Apps are those that are specifically made for a platform. For example, IOS, and Android. These apps will perform only on the operating system they were made for. These Apps are made in a platform-specific language. We will create quality native apps for your business that are comparatively faster, interactive, responsive, and provide an enhanced user experience to your customers."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/11817460_4851504-1-scaled-quv44ratduk6opsmj34kk9dvjcy3cd7xfmmwi03mp0.webp",
            alt: "App Maintenance and Support",
            title: "App Maintenance and Support",
            description: "Once an app is developed, the work does not stop there. An app needs time-to-time maintenance to avoid dysfunction. The performance should be measured timely to set goals. We will stick with you throughout the process, even after the completion of the application. We take full responsibility for maintaining and debugging your mobile app, ensuring smooth flow."
        },

    ];

    const services2 = [
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/10045067_4348380-1-scaled-quv70ipftgl5w5gvqgyr4oinw4wyw8d6128ftydmow.webp",
            alt: "ECOMMERCE APP",
            title: "ECOMMERCE APP",
            description: "We are masters at creating user-friendly E-commerce Apps. If you are selling a product, and you need an app that can do justice to your business, you are in the right place. Our E-commerce mobile applications are highly user-friendly, they provide safety and privacy, optimized product showcasing, cart management, safe transactions and so much more. Join us to take your business to another level."
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/09/9907878_4289142-1-768x512.webp",
            alt: "ASTROLOGY APP",
            title: "ASTROLOGY APP",
            description: "Everybody wants to know their future, people are taking an interest in horoscopes and readings. We have created astrology apps that offer services like real-time readings, predictions, personalized horoscopes, user-friendliness, etc. We are not astrologers, but we can ensure you a successful business if you get your app made through us!"
        },
        {
            image: "https://intileo.com/wp-content/uploads/2024/09/6438115_3311827-1-2048x1365.webp",
            alt: "TAXI BOOKING APP",
            title: "TAXI BOOKING APP",
            description: "Taxi booking apps are such a relief in today's fast-paced world. A taxi booking app can save you priceless opportunities, save your energy, and have a smooth traveling experience. We have created taxi booking apps that offer services like real-time GPS tracking, scheduling rides, safe traveling, private transactions, driver and vehicle information, customer support, etc. Join us today and take a taxi to a better future."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/14258430_2003.i032.004.isometric-recruitment-agency-banners-1-scaled-quv7q7mmmfrb8g5dpkrna748faa5aed1k86828a8m8.webp",
            alt: "HRMS APP",
            title: "HRMS APP",
            description: "We have created some technically sound and functional Human Resource Management System Applications to ease the hiring process for our clients. Our apps provide services like recruitment, hiring, performance management, attendance, salary distribution and deduction etc. They are the comprehensive HR solution that makes tasks easy."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/6607851_3357019-1-scaled-quv7ezg0zoe0k4gh9q22i140zlmbcjsgonnfp8xixs.webp",
            alt: "TOUR-TRAVEL BOOKING APP",
            title: "TOUR-TRAVEL BOOKING APP",
            description: "Everything has become online and so does travel. Everybody has their reasons for traveling, whether it is a vacation, a business trip, a family visit, or any kind of travel. We create apps that offer services for all. Our tour and travel apps have a lot to offer. Services like bookings, personalized recommendations, location, expenses, etc. are an important part of our travel apps."
        },
        {
            image: "https://intileo.com/wp-content/uploads/elementor/thumbs/13749260_2006.i518.005.online-education-vertical-banners-1-scaled-quv7jua0av1cjleiwtmodszrh9ol492jcozqypqasg.webp",
            alt: "LMS APP",
            title: "LMS APP",
            description: "An LMS app is an application that manages and provides educational training programs. These Learning Management Systems are often used in schools, organizations, and companies to provide training for students and employees. Our responsive LMS apps offer services like progress tracking, content management, step-by-step teaching, and certifications."
        },

    ];

    const tools = [
        {
            name: 'Databases',
            icon: <img src="/app-dev/database-solid.svg" alt="Databases Logo" className="w-10 h-10" />,
            description: 'MySQL, PostgreSQL, MongoDB, Firebase'
        },
        {
            name: 'Frameworks',
            icon: <img src="/app-dev/window-maximize-solid.svg" alt="Frameworks Logo" className="w-10 h-10" />,
            description: 'React Native, Flutter, Xamarin, Ionic'
        },
        {
            name: 'Backend',
            icon: <img src="/app-dev/laptop-code-solid.svg" alt="Backend Logo" className="w-10 h-10" />,
            description: 'Node.js, Python, Ruby on Rails, PHP, Java'
        },
        {
            name: 'Programming Languages',
            icon: <img src="/app-dev/code-solid.svg" alt="Programming Logo" className="w-10 h-10" />,
            description: 'Swift, Kotlin, Java, Objective-C, JavaScript, Dart.'
        },
        {
            name: 'Cloud Services',
            icon: <img src="/app-dev/cloud-arrow-up-solid.svg" alt="Cloud Logo" className="w-10 h-10" />,
            description: 'AWS, Google Cloud, Azure'
        },
        {
            name: 'DevOps Tools',
            icon: <img src="/app-dev/connectdevelop-brands.svg" alt="DevOps Logo" className="w-10 h-10" />,
            description: 'Jenkins, Docker, Kubernetes'
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
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">App Development</h1>
                    <nav className="flex items-center space-x-2 text-white/80">
                        <Home className="w-4 h-4" />
                        <Link href="/">
                            <span className="text-sm">Home</span>
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm text-[#05ce9b]">App Development</span>
                    </nav>
                </div>
            </section>

            

            {/* App Development Info Section */}
            <section className="py-16 bg-white flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#05ce9b]">Best Mobile App Development services in India</h2>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2 w-full">

                        <p className="mb-6 text-lg">Do I need an app for my business? Is it worth investing in an app? Yes! Keeping the digital trends in mind, a mobile application is the best way to increase customer satisfaction. Introducing your customers to an app devoted to your services will help in delivering a clear message to them. This results in customer sustainability, enhanced customer experience, and increased revenue, sales, recognition, and brand visibility.</p>
                        <p className="mb-8 text-lg">All of us want these benefits for our businesses, but how? This is where NICS Automation comes into play. We have been providing extensive IT solutions for the past 10+ years. We offer proficient mobile app development services in India to every business that wants to grow.</p>
                        <p className="mb-8 text-lg">We specialize in creating highly interactive Native, Custom, and cross-platform mobile applications that follow digital trends. Whether you are a service provider or a product, you can contact us to get your customized mobile application today.</p>
                        <Link href="/contact">
                            <button className="bg-gradient-to-r from-[#14473b] to-[#039158]  hover:from-[#039bad] hover:to-[#05ce9b] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 shadow-lg hover:scale-105">Free Consultation</button>
                        </Link>
                    </div>
                    {/* Right Column: Illustration */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="https://intileo.com/wp-content/uploads/2024/09/5467426_1720-1-1536x1024.webp"
                            alt="App Development Illustration"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* How App Development Services Stimulate Business Growth */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">How Can Mobile App Development Services help to Grow Your Business in India</h3>
                    <p className="mb-6 text-lg">Today's tech world is evolving every day and competition is getting higher with great speed. A mobile app is the best way to reach your target audience and provide them with the experience they deserve. An application helps you clear up the crowd and only cater to people who are potential customers for your business. Developing an app for your business will lead you to benefits like:</p>
                    <ul className="list-disc pl-6 mb-6 text-base">
                        <li className="mb-2"><span className="font-semibold">Increased Visibility</span> Developing an app for your business will help you stand out in the competition. Having an app devoted just to you for displaying and marketing your product or service will result in increased visibility.</li>
                        <li className="mb-2"><span className="font-semibold">Increased sales and revenue</span> A fully functional and technically sorted app will help your customers view your products and services with ease. Which will increase the retention rate followed by increased sales and revenue.</li>
                        <li className="mb-2"><span className="font-semibold">Better user experience and engagement</span> You can offer a better user experience to your valuable customers when your mobile application is fully responsive, is appealing to the eyes, and justifies your product or service. Being straight and clear will increase engagement and will result in loyal customers.</li>
                        <li className="mb-2"><span className="font-semibold">Directly connecting to your audience</span> Having an app for your business will help you connect to your audience without competing on the search engines. You can announce anything, launch a product, or convey a message to your customers with ease. Connecting with customers and getting their feedback will make room for improvement. </li>
                    </ul>
                    <p className="mb-6 text-base">Around 85% of users choose mobile apps over websites because of a better experience. Creating a mobile application for your business is the best thing to do for never-ending growth and success.</p>


                    <p className="mb-4 text-base">App development services can help in creating a professional and functional mobile application for your business. Irrespective of the size and niche of your business, an application can be developed purely customized and devoted to your product or service.</p>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">Types of Mobile App Development Services in India
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

            {/* Why Choose Intileo Section */}
            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Why Choose NICS Automation for your Mobile App Development services?</h2>
                <div className="w-full max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
                    <p>NICS Automation has been serving for the past 10 years. Brands like Astrochat, Margdarshak, etc. have put their valuable trust in us. We offer services like custom app development, cross-platform app development, native app development, app maintenance and support, business consulting and strategy, mobile app prototype and so much more.</p>
                    <p>Our highly skilled developers will work closely with your dream to turn it into a beautiful reality. We follow a client-centric approach in which we ensure client satisfaction by creating functional mobile apps for their business because, at the end of the day, the client is what matters the most. We collaborate to create applications that include the client's personal touch, which helps in standing out from the crowd.</p>
                    <p>We make sure that the application is technically fit and appealing to the eyes, it should follow trends, and lastly, it should convey a clear message about your brand. Our versatile team will create a customized application that meets all your expectations.</p>
                    <p className="font-semibold text-blue-700">Are you ready to transform? So are we!</p>
                </div>
            </section>

            {/* How Your App Will Be Developed Section */}
            <section className="py-16 bg-white flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">How your app will be developed</h2>
                <div className="w-full max-w-4xl mx-auto text-lg text-gray-700">
                    <p className="mb-6">In NICS Automation, we believe in transparency. You deserve to know the procedure that is going to revolutionize your business. We follow a client-friendly approach to creating top-notch mobile applications that ensure growth and visibility.</p>
                    <ol className="list-decimal pl-6 space-y-6">
                        <li>
                            <span className="font-semibold">Step 1 - Collaboration:</span> This is the first and most important step in the mobile development process. In this section, we conduct a client session that helps in making major decisions. This includes discussing the goal, the target audience, the essence of the application, the service or product description, the tone of the brand, the color palette, and customizations. This session prevents misunderstandings and helps us deliver the exact result you are looking for.
                        </li>
                        <li>
                            <span className="font-semibold">Step 2 – Framing and Planning:</span> This is where the work starts. We outline your app. The outline includes app features, its look and feel, its user interface, and functionality. We will make a blueprint of your application so that we can deliver your fully functional application to you on time.
                        </li>
                        <li>
                            <span className="font-semibold">Step 3 – Design:</span> This is the creative section. This step includes designing the app. Determining the kind of UX/UI it will contain. It is an important step in making an aesthetically appealing app that enhances the user experience and customer satisfaction.
                        </li>
                        <li>
                            <span className="font-semibold">Step 4 – Development:</span> Now that we have designed the application, it's time to give it functionality. After designing, the app goes to our skilled developers who prepare technical codes for your application. There will be a unique code behind each feature and button ensuring smooth execution.
                        </li>
                        <li>
                            <span className="font-semibold">Step 5 – Testing:</span> Once the app is appealing to the eyes and also functional, we implement various testing methods on it. Testing is a vital step of any mobile app development procedure. Conducting several tests prevents dysfunction and promotes debugging.
                        </li>
                        <li>
                            <span className="font-semibold">Step 6 – Deployment:</span> Now your application is all set to rock! We have designed, developed, and tested it. Now it is time to deploy the app on certain platforms like Play Store, Apple Store, etc.
                        </li>
                        <li>
                            <span className="font-semibold">Step 7 – Maintenance and Updates:</span> Our work does not stop here. We ensure time-to-time maintenance and updates of the application. To keep the app functional and available for the market, updates should be made to keep it up with the trends. We will provide real-time assistance to ensure a smooth future for the brand.
                        </li>
                    </ol>
                    <p className="mt-8 font-semibold text-blue-700">This is how we turn our dreams into reality. With seven simple steps, we can help you reach your desired business reach and growth!</p>
                </div>
            </section>

            {/* Services Cards Section */}
            <section className="py-16 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center">Types of Mobile App Development Services in India
                </h2>
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 bg-white rounded-3xl shadow-lg p-8">
                    {services2.map((service2, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:bg-gradient-to-r  hover:from-[#14473b] hover:to-[#03a564] hover:text-white shadow-md group"
                        >
                            <img src={service2.image} alt={service2.alt} className="w-full max-w-xs mb-6 transition duration-300 rounded-xl group-hover:shadow-xl" />
                            <h3 className="text-2xl font-bold mb-2">{service2.title}</h3>
                            <p className="text-base">{service2.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tools Used Section */}
            <section className="py-20 bg-white flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="md:w-1/3 w-full flex flex-col justify-center items-center px-8 md:px-0 mb-8 md:mb-0">
                    <h2 className=" text-3xl md:text-4xl text-center font-bold mb-4">Technologies we used to offer mobile app development services in India</h2>
                </div>
                <div className="md:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {tools.map((tool, idx) => (
                        <div
                            key={tool.name}
                            className={`group flex flex-col items-center justify-center rounded-2xl p-10 min-h-[180px] shadow-md transition duration-300 cursor-pointer border border-transparent hover:bg-gradient-to-r  hover:from-[#14473b] hover:to-[#03a564] hover:text-white hover:border-[#03a564]`}
                        >
                            <div className="mb-4">{tool.icon}</div>
                            <span className="text-xl font-semibold text-center">{tool.name}</span>
                            <p className="text-center text-base mt-2 text-gray-600 group-hover:text-white">{tool.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                <div className="w-full max-w-4xl mx-auto">
                    <AppDevelopmentFAQ />
                </div>
            </section>

        </>
    )
}

export default AppDevelopment;