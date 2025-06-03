// Data for the website
const servicesData = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 12-8.58 3.91a2 2 0 0 1-1.66 0L3.2 12"></path><path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L3.2 17"></path></svg>',
    title: 'Web Design',
    description: 'Eye-catching, modern designs that reflect your brand and engage your visitors.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
    title: 'Responsive Development',
    description: 'Websites that work flawlessly on all devices, from desktops to smartphones.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>',
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and smooth performance for the best user experience.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>',
    title: 'SEO',
    description: 'Search engine optimization to help customers find your business online.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>',
    title: 'Content Creation',
    description: 'Compelling copy and visual content that tells your story and converts visitors.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
    title: 'Maintenance',
    description: 'Ongoing support, updates, and improvements to keep your site secure and current.'
  }
];

const portfolioData = [
  {
    id: 1,
    title: "Crystal Vision Tutoring",
    category: "Web Development",
    image: "pics/studying.png",
    link: "https://crystalvisiontutoring.netlify.app/"
  },
  {
    id: 2,
    title: 'Real Estate Agent Portfolio',
    category: 'Real Estate',
    image: 'https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: "https://eshuchikoti.netlify.app/"
  }
];

const aboutFeatures = [
  'Customized solutions',
  'Fast turnaround times',
  'SEO-friendly code',
  'Mobile-first approach',
  'Ongoing support',
  'Affordable pricing'
];

const testimonialData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    business: 'The Green Café',
    quote: 'Working with WebCraft was the best decision for our café rebrand. The new website perfectly captures our vibe and has significantly increased our online orders!',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    business: 'Rodriguez Law Firm',
    quote: 'As an attorney, I needed a website that conveys professionalism and trustworthiness. The site delivered on all fronts and has helped us attract new clients.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Emily Chen',
    business: 'Tranquil Spa & Wellness',
    quote: 'Our booking system has never been so efficient! The website is beautiful and our clients constantly compliment how easy it is to use.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];