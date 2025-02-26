import images from './assets/images';
import EditIcon from './assets/svgs/edit.svg';
import HistoryIcon from './assets/svgs/document.svg';
import Discount from './assets/svgs/discount-shape.svg';
import RequestIcon from './assets/svgs/money.svg';
import Setting from './assets/svgs/setting.svg';
import Logout from './assets/svgs/logout.svg';
import Receipt from './assets/svgs/invoice.svg';
import Notes from './assets/svgs/notes.svg';
import Salon from './assets/svgs/salon.svg';
import Clock from './assets/svgs/clock.svg';
import Calendar from './assets/svgs/calendar-black.svg';
import Service from './assets/svgs/document-text.svg';
import ApplePay from './assets/svgs/appleIcon.svg';
import CardPay from './assets/svgs/debtCard.svg';
import CardTick from './assets/svgs/card-tick.svg';
import LikeTag from './assets/svgs/like-tag.svg';

import moreIcon from './assets/svgs/more.svg'

const recentSearches = [
  'Beauty Unleashed',
  'Big Hair We Care',
  'Addictive Beauty',
  "Alexandra's Salon",
];
const mockData = [
  {
    id: 1,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 2,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 3,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 4,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
  {
    id: 5,
    image: images.room, // Replace with your image path
    title: 'Hair Avenue',
    location: 'Lakewood, California',
    distance: '2 km',
    rating: 4.7,
    reviews: 312,
    status: 'Cancelled',
  },
];

const menuOptions = [
  {title: 'Edit Salon Profile', img: EditIcon,  routeName:'editProfile'},
  {title: 'Bookings', img: HistoryIcon, routeName:'booking'},
  {title: 'Payment in & Payouts', img: CardTick, routeName:'savedCard'},
  {title: 'Complaints', img: RequestIcon , routeName:'favorites'},
  {title: 'Requests', img: RequestIcon, routeName:'invoiceList'},
  {title: 'Codes & Discount', img: Discount, routeName:'promotionScreen'}, //complaints
];

const categoriesOptions = [
  {title: 'Salon', img: images.salon},
  {title: 'Spa', img: images.spa},
  {title: 'Nail Art', img: images.nail},
  {title: 'Salon & Spa', img: images.salonSpa},
];

const settingOptions = [
  {title: 'Language', routeName:'language'},
  {title: 'Notification Settings' , routeName:'notificationSetting'},
  {title: 'Change Password', routeName:'changePassword'},
  {title: 'Privacy Policy', routeName:'privacyPolicy'},
  {title: 'Terms & Conditions', routeName:'termsCondition'},
  {title: 'Delete Account', routeName:'deleteAccount'},
];

const supportOptions = [{title: 'Customer Support', img: LikeTag ,routeName:'customerSupport'}];

const accountManagement = [
  {title: 'Settings', img: Setting, routeName:'settings'},
  {title: 'Logout', img: Logout, routeName:'logout'},
];


const bookingDetails = {
  items: [
    {name: 'Date', value: 'Wed, Sep 10 at 9:30 AM'},
    {name: 'Stylist', value: 'Marilyn Vetrovs'},
    {name: 'Timeslot', value: 'Sat 28 Sep 2024 at 9:30Am'},
  ],
};
const dummyData = {
  items: [
    {name: 'Hair Cut', price: 100},
    {name: 'Hair Wash', price: 50},
    {name: 'Hair Wash', price: 50},
  ],
  discount: -20,
  vatRate: 15,
};

const invoices = [
  {
    id: '1',
    date: 'Sep 10, 2024',
    time: '9:10 AM',
    name: 'Desirae Carder',
    service: 'Smart Cut',
    status: 'Paid',
    amount: 'SAR 250',
  },
  {
    id: '2',
    date: 'Sep 10, 2024',
    time: '9:10 AM',
    name: 'Desirae Carder',
    service: 'Smart Cut',
    status: 'Cancelled',
    amount: 'SAR 250',
  },
];

const languages = ['English', 'Arabic', 'Urdu', 'French', 'Spanish', 'Chinese'];

const salonCategories = ['Salon', 'Spa', 'Nail Art', 'Salon & Spa', 'Other'];
const loginlang = ['English', 'العربية'];
const toggleItems = [
  {id: 1, label: 'Payments', isEnabled: false},
  {id: 2, label: 'Schedule', isEnabled: false},
  {id: 3, label: 'Cancellation', isEnabled: false},
  {id: 4, label: 'Offers Notification', isEnabled: true},
  {id: 5, label: 'Other Notification', isEnabled: false},
];

const reasons = [
  'I am no longer using my account?',
  'The services is too expensive',
  'I want to change my phone number',
  'I don,t understand how to use',
  'Privacy concerns.',
  'Other',
];
const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Eget turpis risus ut nullam posuere porttitor at vivamus. Proin augue morbi viverra scelerisque nunc nulla. Venenatis mattis in ultrices adipiscing. Mi purus augue donec ultricies.',
  },
  {
    question: 'What is React Native?',
    answer:
      'React Native is an open-source framework for building mobile apps using React and JavaScript.',
  },
  {
    question: 'How does state work in React?',
    answer: 'State is a way to manage dynamic data in a React component.',
  },
];

const discounts = [
  {
    id: '1',
    title: '20% off on first-time booking',
    discount: '20%',
    validity: '24 Oct 2024',
    remaining: '3',
  },
  {
    id: '2',
    title: '15% off on second booking',
    discount: '15%',
    validity: '31 Dec 2024',
    remaining: '5',
  },
];

const allPointData = [
  {id: 1, points: 25, expiryDate: '02/12/2024'},
  {id: 2, points: -50, expiryDate: '03/15/2024'},
  {id: 3, points: 100, expiryDate: '04/10/2024'},
];

const earnPointData = [
  {id: 1, points: 25, expiryDate: '02/12/2024'},
  {id: 2, points: 50, expiryDate: '03/15/2024'},
  {id: 3, points: 100, expiryDate: '04/10/2024'},
];

const usedPointData = [
  {id: 1, points: -25, expiryDate: '02/12/2024'},
  {id: 2, points: -50, expiryDate: '03/15/2024'},
  {id: 3, points: -100, expiryDate: '04/10/2024'},
];

const serviceData = [
  {
    id: '1',
    image: images.room,
    title: 'Hair Avenue',
    location: 'Moratuwa, Colombo',
    date: 'Mon 21 Sep 2024',
    service: 'Hair Cut',
    professional: 'Marilyn Vetrovs',
    distance: '2 km',
  },
];

const slides = [
  {
    key: '1',
    title_1: 'Streamline Your Salon',
    title_2: 'Operations',
    text: 'Manage bookings, clients, and services effortlessly',
    image: images.intro3,
  },
  {
    key: '2',
    title_1: 'Control Your Schedule',
    title_2: '',
    text: 'Accept, reschedule, or cancel appointments with a few taps.',
    image: images.intro1,
  },
  {
    key: '3',
    title_1: 'Grow Your Salon with',
    title_2: 'ANAQA',
    text: 'Increase your reach and manage everything from one platform.',
    image: images.intro2,
  },
];

const invoiceDetailRows = [
  {
    label: 'Invoice No',
    value: '65548910',
    image: Receipt,
  },
  {
    label: 'Salon',
    value: 'Hair Avenue',
    image: Salon,
  },
  {
    label: 'Service',
    value: 'Facial',
    image: Service,
  },
  {
    label: 'Dates',
    value: 'Wed, 03 Jan 2024',
    image: Calendar,
  },
  {
    label: 'Time',
    value: '01:00 AM',
    image: Clock,
  },
  {
    label: 'Notes',
    value: 'Lorem ipsum dolor sit amet consectetur. pretium etiam.',
    image: Notes,
  },
];

const invoiceSummry = [
  {
    id: 1,
    title: 'All Invoices',
    count: '06',
  },
  {
    id: 1,
    title: 'Paid',
    count: '04',
  },
  {
    id: 1,
    title: 'Cancelled',
    count: '02',
  },
];

const notificationData = [
  {
    title: 'Today',
    data: [
      {
        heading: 'Booking Cancelled',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Today’s Special Offers',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Payment Successful!',
        subHeading: 'You have made a salon payment',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        heading: 'Booking Cancelled',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Payment Successful!',
        subHeading: 'You have made a salon payment',
      },
    ],
  },
  {
    title: '17 Aug 2024',
    data: [
      {
        heading: 'Booking Cancelled',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Payment Successful!',
        subHeading: 'You have made a salon payment',
      },
      {
        heading: 'Account Setup Successful!',
        subHeading: 'You have made a salon payment',
      },
    ],
  },
];

const messages = {

  registerProcess: {
    title: 'Registration in Process!',
    subheading: 'Please wait for verifying your account by ',
    subheading2:'ANAQA company.',
    subheading3: "We'll give you a shout as soon as your salon gets",
    subheading4:'the go-ahead from ANAQA!',

  },

  register: {
    title: 'Register Successfully!',
    subheading: 'Your registration request has been successfully done.',
  },
  cancel: {
    title: 'Canceled Successfully!',
    subheading: 'Your booking has been canceled successfully.',
  },
  remove: {
    title: 'Removed Successfully!',
    subheading: 'Your salon has been successfully removed from favorites.',
  },
};

const complaints = [
  {name:'Pending' , value:'02' , routeName:''},
  {name:'Resolved' , value:'10',routeName:''},
  {name:'Rejected' , value:'01',routeName:''},
];

const professionals = [
  { id: 1, name: 'John Doe', profession: 'Hair Specialist' },
  { id: 2, name: 'Jane Smith', profession: 'Nail Artist' },
  { id: 3, name: 'Robert Brown', profession: 'Makeup Artist' },
  { id: 4, name: 'Alice Johnson', profession: 'Skin Care Specialist' },

  { id: 2, name: 'Jane Smith', profession: 'Nail Artist' },
  { id: 3, name: 'Robert Brown', profession: 'Makeup Artist' },
  { id: 4, name: 'Alice Johnson', profession: 'Skin Care Specialist' },

  { id: 2, name: 'Jane Smith', profession: 'Nail Artist' },
  { id: 3, name: 'Robert Brown', profession: 'Makeup Artist' },
  { id: 4, name: 'Alice Johnson', profession: 'Skin Care Specialist' },

];
const More = [
  {name:'Profile' , value:'Manage and update your salon profile, services, and availability easily.' ,img:images.profileimg,routeName:'profileScreen'},
  {name:'Anaqa Commision' , value:"Track and manage salon pros' commission rates for accurate payouts and transparency." ,img:images.anaqacommision, routeName:''},
  {name:'Working Hours' , value:'Create timeslots according to professionals availability and service management.',img:images.hours,routeName:''},
  {name:'Service Management' , value:'Clear and flexible pricing & services options designed to suit your salon’s unique needs.',img:images.serviceimg,routeName:''},
  {name:'Professionals' , value:"Manage your salon's team of professionals and their availability with ease.",img:images.profession,routeName:''},
  {name:'Statistics' , value:'Comprehensive reports to help track and optimize your salon’s performance and growth.',img:images.statistics,routeName:''},

];

const bookingStatus = [
  {name:'Total Bookings' , value:'56' , routeName:'',status:'Pending'},
  {name:'Pending' , value:'02' , routeName:''       ,status:'Pending'},
  {name:'Confirmed' , value:'10',routeName:''       ,status:'Confirmed'},
  {name:'Cancelled' , value:'301',routeName:''      ,status:'Cancelled'},
  {name:'Completed' , value:'101',routeName:''      ,status:'Completed'},
];
const staticBookings = [
  {
    customer: 'Cheyenne Franci',
    date: 'Wed, Sep 10 at 9:30 AM',
    professional: 'Marilyn Vetrovs',
    timeslot: 'Sat 28 Sep 2024 at 9:30 AM',
    services: [
      {name: 'Hair Cut', price: 100},
      {name: 'Hair Wash', price: 50},
    ],
  },
];

const paymentMethods = [
  {
  id: '1',
  key:'applePay',
  name: 'Apple Pay',
  Icon: ApplePay,
  },
  {
    id: '2',
    key:'creditCard',
    name: 'Credit/Debit Card',
    Icon: CardPay,
  },
];
const pointsButtons = ['All', 'Earned Points', 'Used Points'];
const requestStatus = ['Pending', 'Resolved', 'Rejected'];

const openingHours = [
  {id:1,  day:'Monday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Tuesday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Wednesday', time:'Open at: 08AM-09PM'},
  {id:1,  day:'Thursday', time:'Open at: 08AM-09PM'},
  {id:1,  day:'Friday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Saturday', time:'Open at: 09AM-10PM'},
  {id:1,  day:'Sunday', time:'Closed'},
];
const AvailableTimeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
  '09:00 PM',
  '10:00 PM',
  '11:00 PM',
  '12:00 AM',
];
const timeSlots = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
];

const promotiondata = [
  {
    id: "1",
    image:images.promotion,
    title: "20% off on Hair cut for first-time customers.",
    max: "Max booking: Sar 400",
    exp: "Exp date: 18-10-2024",
  },
  {
    id: "2",
    image:images.promotion,
    title: "Visit us to avail exciting offers.",
    max: "Max order: Sar 200",
    exp: "Exp date: 30-06-2025",
  },
  {
    id: "3",
    image:images.promotion,
    title: "30% off on all services for first-time customers.",
    max: "Max purchase: Sar 300",
    exp: "Exp date: 25-12-2024",
  },
  {
    id: "4",
    image:images.promotion,
    title: "Limited period offer: Book now!",
    max: "Max spend: Sar 500",
    exp: "Exp date: 15-03-2026",
  },
  {
    id: "5",
    image:images.promotion,
    title: "Discount code: NEWCLIENT",
    max: "Max transaction: Sar 350",
    exp: "Exp date: 05-09-2027",
  },
];

const graphTabs = {
  sales: 'sales',
  customers:'customers',
}

const statuses = ['Completed', 'Pending', 'Cancelled', 'Confirmed'];
const professionalsList = ['Unassigned', 'Zaheer', 'Waqar', 'Mudassar', 'Rizwan', 'Zeeshan'];

const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
const getRandomProfessional = () => professionalsList[Math.floor(Math.random() * professionalsList.length)];

const bookingHistory = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1, 
  date: 'Sep 10, 2024',
  time: '9:10 AM',
  title: 'Hair Avenue',
  location: 'Lakewood, California',
  services: 'Services: Hair Cut, Hair Wash',
  price: 'SAR 200',
  professional:getRandomProfessional(),
  status: getRandomStatus(), // Assign a random status
  imageUri: images.room,
}));


export {
  salonCategories,
  recentSearches,
  mockData,
  menuOptions,
  dummyData,
  invoices,
  languages,
  supportOptions,
  settingOptions,
  accountManagement,
  toggleItems,
  reasons,
  faqs,
  discounts,
  allPointData,
  earnPointData,
  usedPointData,
  categoriesOptions,
  serviceData,
  slides,
  invoiceDetailRows,
  invoiceSummry,
  loginlang,
  notificationData,
  messages,
  complaints,
  staticBookings,
  paymentMethods,
  pointsButtons,
  requestStatus,
  openingHours,
  AvailableTimeSlots,
  bookingStatus,
  professionals,
  timeSlots,
  bookingDetails,
  More,
  promotiondata,
  graphTabs,
  bookingHistory

};
