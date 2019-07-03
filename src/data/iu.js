export default {
  name: 'Yang Ai',
  description: 'A Passinate full-stack developer with 3 years working experience',
  jobTitle: 'Part-time IT programmer and Web Designer',
  sourceCode: 'https://github.com/YangAi/resume',
  from: {
    address_first: '524 N College Ave',
    address_second: 'Bloomington, 47404',
    email: 'yangai@indiana.edu',
    work_email: 'yangai@lvxingshai.com'
  },
  to: {
    name: 'Pratima Soni',
    company: 'Indiana Geological and Water Survey',
    address_first: '420 N. Walnut St.',
    address_second: 'Bloomington, IN 47404',
  },
  coverLetter: {
    date: 'June 29th, 2019',
    content: [
      'I am writing to express my great interest in the Part-time IT programmer and Web Designer. ' +
      'I found this opportunity through Jobs at IU. I’m currently a junior student at IU. ' +
      'I worked as a web developer for 3 years, during my time off because of health issue. ' +
      'I’m proficient in HTML, CSS(SCSS), Javascript, Vue.js, PHP, Mysql as well as many modern libraries and frameworks. ' +
      'I believe these skills would make me an excellent match for the job.',
      'In my previous experience, I founded a travel website with my friends. ' +
      'Since I was the only programmer for the first year, I did all the coding work for both front-end and back- end. ' +
      'Our website is devoting on helping users travel abroad cheaper and wiser. ' +
      'To accomplish this goal, We primarily provide two services for our users.',
      'First, I build up an automatic cash-back system with more than 120 travel sites around the world. ' +
      'Our user can book products from any target website by themselves and get cash-back automatically. ' +
      'The system monitors every order through APIs and crawlers. ' +
      'We send messages through Wechat or SMS to notify our user when a new order comes out. ' +
      'Also, we pay our users directly through Wechat-Pay when an order is marked as finished. ' +
      'Our users have made about 700,000 USD transaction successfully through our system.',
      'Second, I developed a system monitoring travel products from several main travel websites in China automatically through crawlers. ' +
      'The system then compares and rates these products with data in our database, and find out those valuable products for our users. ' +
      'This system is now processing more than 10,000 products data every day.',
      'In addition, I only take 12.5 credits next semester because I want to give me more times to meet some people and get familiar with the new environment. ' +
      'That also means a would have plenty of free time to do a better job.',
      'Thank you for reading this letter and review my resume. ' +
      'I\'m confident about being a competent and contributing member to the team, and I hope to have the opportunity to discuss my experiences in greater detail with you.',
      'I look forward to answering any of your questions and learning more about this position and your development teams.'
    ]
  },
  resume: {
    summary: {
      title: 'Summary',
      content: [
        'Passinate web developer with 3 years working experience. ' +
        'handled more than 20 projects, including front-pages, dashboard with heavy data, as well as some back-end project. ' +
        'Proficient in <span class="text-red-600">HTML, CSS(SCSS), JavaScript, Vue.js, PHP</span>; plus some modern libraries and framework. ' +
        'Always welcoming for new skills and tools.'
      ]
    },
    experiences: {
      title: 'Experiences',
      groups: [
        {
          title: 'Main Programmer of a Travel Website',
          time: '2016.05 - now',
          content: [
            'In this job,  I was in charge of every front-end projects, as well as some back-end project when needed. ' +
            'I have cumulated lots of experience of working independently as well as working as a team.',
            '- Write efficient, maintainable, and reusable code for both mobile and desktop front-pages projects using HTML, SCSS, Vue.js, Lodash.js, TailwindCSS, and MuseUI.',
            '- Designed and Developed heavy-data dashboard for our partner and back-stage use using HTML, SCSS, Vue.js, Lodash.js, and ElementUI/IView.',
            '- Designed the full workflow for the automatic cash-back service and finished all the coding work using HTML, SCSS, Vue.js, PHP,  MySQL, and Redis. <span>The system has successfully processed transactions of 700,000 USD.</span>',
            '- Co-developed a crawler and data analysis system to identify valuable travel products and recommend to our users using Vue.js, PHP, and a little Python. <span>This system is now processing more than 10,000 products data every day.</span>',
            '- Develop a multi-notice service for internal use. Allow other developer and business manager sending website message, email, SMS, and Wechat message very easily.',
            '- Designed an internal framework to make front-end project more unify, easier to maintain, and lower development cost.'
          ]
        },
        {
          title: 'Website Develop for a Law Firm',
          time: '2019.02 - 2019.03',
          content: [
            'My most recent freelancer job was develop an official website for a Law Firm in Shanghai. ' +
            'I was responsible for all the front-end and database design. ' +
            'This project used  Laravel + Bootstrap + jQuery for the front-pages, and Vue.js + ElementUI for the dashboard.',
            '- Used a flexible structure. Everything on the website including all descriptive text could be modified easily on dashboard.',
            '- Used tagging system for all the resources. Allowed resources to be easily retrieved across categories, thus, increase the connection between different content section.',
            '- Developed a self-edit profile system, which allowed every lawyer edits resume profile and decides what to show all by himself or herself.'
          ]
        }
      ]
    },
    skills: {
      title: 'Skills',
      content: [
        {
          name: 'HTML',
          score: 100
        },
        {
          name: 'CSS(SCSS)',
          score: 100
        },
        {
          name: 'Vue.js',
          score: 100
        },
        {
          name: 'TailwindCSS',
          score: 100
        },
        {
          name: 'JavaScript',
          score: 80
        },
        {
          name: 'Lodash.js',
          score: 85
        },
        {
          name: 'PHP',
          score: 80
        },
        {
          name: 'Laravel',
          score: '70'
        },
        {
          name: 'MySql',
          score: 70
        },
        {
          name: 'MuseUI',
          score: '100'
        },
        {
          name: 'ElementUI',
          score: '90'
        },
        {
          name: 'Bootstrap',
          score: '85'
        },
        {
          name: 'jQuery',
          score: '75'
        },
        {
          name: 'Npm',
          score: '90'
        },
        {
          name: 'Git',
          score: '85'
        }
      ]
    },
    education: {
      title: 'Education',
      groups: [
        {
          title: 'Indiana University Bloomington',
          time: '2012.09 - now',
          content: [
            // 'Business General, Kelley School of Business'
          ]
        },
        {
          title: 'Ganzhou No.3 Middle School, China',
          time: '2009.09 - 2012.06',
          content: ['']
        }
      ]
    }
  }
}
