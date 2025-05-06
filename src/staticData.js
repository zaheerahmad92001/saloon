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
import CardTick from './assets/svgs/card-tick.svg';
import LikeTag from './assets/svgs/like-tag.svg';
import ProfileMore from './assets/svgs/morepProfile.svg';
import Professionals from './assets/svgs/professionals.svg';
import ServiceManagment from './assets/svgs/serviceManagment.svg';
import Statistics from './assets/svgs/statistics.svg';
import WorkingHours from './assets/svgs/workingHours.svg';
import AnaqaCommission from './assets/svgs/anaqaCommission.svg';
import PromotionIcon from './assets/svgs/promotion.svg';
import AvailabilityIcon from './assets/svgs/Clockprofessional.svg';
import TotalBookingIcon from './assets/svgs/Document-history.svg';
import StateIcon from './assets/svgs/chart-2.svg';

const storagekeys = {
  authToken:'authToken',
  isFirstLaunch:'isFirstLaunch',
  refreshToken:'refreshToken',
};

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
  {title: 'Payment in & Payouts', img: CardTick, routeName:'payout'},
  {title: 'Complaints', img: RequestIcon , routeName:'complaints'},//favorites
  {title: 'Requests', img: RequestIcon, routeName:'requests'}, //invoiceList
  {title: 'Codes & Discount', img: Discount, routeName:'promotionScreen'}, //complaints
];


const singleProfessionalMenuOptions = [
  {title: 'Edit Professional', img: EditIcon,  routeName:'editSingleProfessionalProfile'},
  {title: 'Availability ', img: AvailabilityIcon, routeName:'editProfessionalSchedule'},
  // {title: 'Availability ', img: AvailabilityIcon, routeName:'availability'},  //'editProfessionalSchedule'},
  {title: 'Total Bookings', img: TotalBookingIcon, routeName:'professionalBookings'},
  {title: 'Statistics', img: StateIcon , routeName:'statScreen'},//favorites

];


const settingOptions = [
  {title: 'Language', routeName:'language'},
  {title: 'Off Days', routeName:'offDays'},
  {title: 'Accessibility Settings ', routeName:'accessAbilitySettings'},
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


const statisticsservices = [
  {
    id: '1',
    name: 'Hair Cut',
    subService: 3,
    professionals: 4,
    rating: 4.7,
    reviews: 312,
    bookings: 12,
    isTopRated: true,
  },
  {
    id: '2',
    name: 'Facial',
    professionals: 2,
    rating: 4.0,
    reviews: 312,
    bookings: 4,
    isTopRated: false,
  },
  {
    id: '3',
    name: 'Nail Art',
    professionals: 5,
    rating: 3.9,
    reviews: 312,
    bookings: 2,
    isTopRated: false,
  },
  {
    id: '4',
    name: 'Manicure',
    professionals: 3,
    rating: 4.8,
    reviews: 312,
    bookings: 12,
    isTopRated: true,
  },
  {
    id: '5',
    name: 'Pedicure',
    professionals: 2,
    rating: 4.2,
    reviews: 312,
    bookings: 3,
    isTopRated: false,
  },
];


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

const languages = ['English', 'العربية'];
const offDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
const salonCategories = ['Salon', 'Spa', 'Nail Art', 'Salon & Spa', 'Other'];
const toggleItems = [
  {id: 1, label: 'Payments', isEnabled: false},
  {id: 2, label: 'Schedule', isEnabled: false},
  {id: 3, label: 'Cancellation', isEnabled: false},
  {id: 4, label: 'Offers Notification', isEnabled: false},
  {id: 5, label: 'Other Notification', isEnabled: false},
];

const AccessAbilitytoggleItems = [
  {id: 1, label: 'Payments in & Payouts', isEnabled: false},
  {id: 2, label: 'Codes & Discount', isEnabled: false},
  {id: 3, label: 'Account Management', isEnabled: false},
  {id: 4, label: 'Service Management', isEnabled: true},
  {id: 5, label: 'Promotions', isEnabled: false},
  {id: 6, label: 'Chat', isEnabled: false},
  {id: 7, label: 'Scheduling', isEnabled: false},
  {id: 8, label: 'Statistics', isEnabled: false},
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
  reschedule: {
    title: 'Reschedule Successfully!',
    subheading: 'Your rescheduling has been successfully done.',
    subheading2:'We will notify user about appointment rescheduled.',
  },
  remove: {
    title: 'Removed Successfully!',
    subheading: 'Your salon has been successfully removed from favorites.',
  },
};

const complaints = [
  {name:'Pending' , value:'02' , routeName:''},
  {name:'Resolved' , value:'10',routeName:''},
];

const requestComplaintEnum={
  request:'request',
  complaints:'complaints',
}


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
const moreRoutes = [
  {id:1 ,name:'Profile' , value:'Manage and update your salon profile, services, and availability easily.' ,Icon:ProfileMore,routeName:'profileScreen'},
  {id:2 ,name:'Anaqa Commision' , value:"Track and manage salon pros' commission rates for accurate payouts and transparency." ,Icon:AnaqaCommission, routeName:'commission'},
  {id:3 ,name:'Working Hours' , value:'Create timeslots according to professionals availability and service management.',Icon:WorkingHours,routeName:'workingHours'},
  {id:4 ,name:'Service Management' , value:'Clear and flexible pricing & services options designed to suit your salon’s unique needs.',Icon:ServiceManagment,routeName:'serviceManagment'},
  {id:5 ,name:'Professionals' , value:"Manage your salon's team of professionals and their availability with ease.",Icon:Professionals,routeName:'professionals'},
  {id:6 ,name:'Statistics' , value:'Comprehensive reports to help track and optimize your salon’s performance and growth.',Icon:Statistics,routeName:'statScreen'}, //serviceReport


];

const AccessAbilitySettingsData = [
  {name:'Change Password' , value:'If you want to switch up your password, you can do it right here!' ,routeName:'changePassword'},
  {name:'Accessibility' , value:"If you're looking for security features in your app, accessibility can totally help with that!" , routeName:'accessAbility'},
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
    id: '1',
    Icon:PromotionIcon,
    title: '20% off on Hair cut for first-time customers.',
    max: 'Max booking: Sar 400',
    exp: 'Exp date: 18-10-2024',
  },
  {
    id: '2',
    Icon:PromotionIcon,
    title: 'Visit us to avail exciting offers.',
    max: 'Max order: Sar 200',
    exp: 'Exp date: 30-06-2025',
  },
  {
    id: '3',
    Icon:PromotionIcon,
    title: '30% off on all services for first-time customers.',
    max: 'Max purchase: Sar 300',
    exp: 'Exp date: 25-12-2024',
  },
  {
    id: '4',
    Icon:PromotionIcon,
    title: 'Limited period offer: Book now!',
    max: 'Max spend: Sar 500',
    exp: 'Exp date: 15-03-2026',
  },
  {
    id: '5',
    Icon:PromotionIcon,
    title: 'Discount code: NEWCLIENT',
    max: 'Max transaction: Sar 350',
    exp: 'Exp date: 05-09-2027',
  },
];

const graphTabs = {
  sales: 'sales',
  customers:'customers',
};

const statuses = ['Completed', 'Pending', 'Cancelled', 'Confirmed'];
const professionalsList = ['Unassigned', 'Zaheer', 'Waqar', 'Mudassar', 'Rizwan', 'Zeeshan'];

const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
const getRandomProfessional = () => professionalsList[Math.floor(Math.random() * professionalsList.length)];

const professionalsData = [
  { id: 1, name: 'Kianna Stanton', image: images.room, time: '10:00 AM - 02:00 PM' , selected:false},
  { id: 2, name: 'Tatiana Baptista', image: images.room, time: '01:00 AM - 04:00 PM',selected: false },
  { id: 3, name: 'Kianna Stanton', image: images.room, time: '10:00 AM - 02:00 PM',selected: false },
];


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

const bookings = [
  {
    time: '11:00 AM',
    endTime: '12:00 PM',
    name: 'Christopher White',
    service: 'Hair Cut, Facial',
    professional: 'Brooklyn Williamson',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    time: '12:15 PM',
    endTime: '12:45 PM',
    name: 'Olivia Martin',
    service: 'Manicure, Pedicure',
    professional: 'Julie Watson',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    time: '03:30 PM',
    endTime: '04:30 PM',
    name: 'Mia Taylor',
    service: 'Manicure, Pedicure',
    professional: 'Julie Watson',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
  },
  {
    time: '04:30 PM',
    endTime: '05:30 PM',
    name: 'Richard Thompson',
    service: 'Hair Cut',
    professional: 'Jenny Alexander',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
];

const weeklySchedule = [
  { id: 1, day: 'Mon' },
  { id: 2, day: 'Tue' },
  { id: 3, day: 'Wed' },
  { id: 4, day: 'Thu' },
  { id: 5, day: 'Fri' },
  { id: 6, day: 'Sat' },
  { id: 7, day: 'Sun' },
];

const changeScheduleStatus = [
  { id: 'one', value: '1 Week' },
  { id: 'two', value: '2 Weeks'},
  { id: 'three', value: '3 Weeks'},
  { id: 'untilIChange', value: 'Untill i change'},
];
const scheduleTimePeriod = {weekly:'weekly',monthly:'monthly'};

const filterList = [
    {label: 'daily', value: '1'},
    {label: 'weekly', value: '2'},
    {label: 'monthly', value: '3'},
    {label: 'yearly', value: '4'},
  ];
const imageBaseUrl = 'https://be.anaqa.sa';


 const saudiArabiaCities = [
  { label: 'Riyadh', value: 'riyadh' },
  { label: 'Jeddah', value: 'jeddah' },
  { label: 'Mecca', value: 'mecca' },
  { label: 'Medina', value: 'medina' },
  { label: 'Dammam', value: 'dammam' },
  { label: 'Khobar', value: 'khobar' },
  { label: 'Dhahran', value: 'dhahran' },
  { label: 'Taif', value: 'taif' },
  { label: 'Abha', value: 'abha' },
  { label: 'Khamis Mushait', value: 'khamis_mushait' },
  { label: 'Buraidah', value: 'buraidah' },
  { label: 'Unaizah', value: 'unaizah' },
  { label: 'Al Kharj', value: 'al_kharj' },
  { label: "Al Majma'ah", value: 'al_majmaah' },
  { label: 'Al Zulfi', value: 'al_zulfi' },
  { label: 'Shaqra', value: 'shaqra' },
  { label: 'Hail', value: 'hail' },
  { label: 'Tabuk', value: 'tabuk' },
  { label: 'Arar', value: 'arar' },
  { label: 'Rafha', value: 'rafha' },
  { label: 'Turayf', value: 'turayf' },
  { label: 'Sakaka', value: 'sakaka' },
  { label: 'Al Qurayyat', value: 'al_qurayyat' },
  { label: 'Najran', value: 'najran' },
  { label: 'Jazan', value: 'jazan' },
  { label: 'Sabya', value: 'sabya' },
  { label: 'Al Baha', value: 'al_baha' },
  { label: 'Baljurashi', value: 'baljurashi' },
  { label: 'Yanbu', value: 'yanbu' },
  { label: 'Al Ula', value: 'al_ula' },
  { label: 'Al Wajh', value: 'al_wajh' },
  { label: 'Al Khafji', value: 'al_khafji' },
  { label: 'Al Hofuf', value: 'al_hofuf' },
  { label: 'Al Mubarraz', value: 'al_mubarraz' },
  { label: 'Qatif', value: 'qatif' },
  { label: 'Ahsa (Al-Ahsa)', value: 'ahsa' },
  { label: 'Thadiq', value: 'thadiq' },
  { label: 'Diriyah', value: 'diriyah' },
  { label: 'Dhurma', value: 'dhurma' },
  { label: 'Wadi Al-Dawasir', value: 'wadi_al_dawasir' },
  { label: 'Afif', value: 'afif' },
  { label: 'Turaif', value: 'turaif' },
  { label: 'Adham', value: 'adham' },
  { label: 'Rabigh', value: 'rabigh' },
  { label: 'Mahd adh Dhahab', value: 'mahd_adh_dhahab' },
  { label: 'Badr', value: 'badr' },
  { label: 'Duba', value: 'duba' },
  { label: 'Hafr Al-Batin', value: 'hafr_al_batin' },
  { label: 'Samtah', value: 'samtah' },
  { label: 'Dawadmi', value: 'dawadmi' },
  { label: 'Layla', value: 'layla' },
  { label: 'Tanomah', value: 'tanomah' },
  { label: 'Ranyah', value: 'ranyah' },
  { label: 'Al Qunfudhah', value: 'al_qunfudhah' },
  { label: 'Al Lith', value: 'al_lith' },
  { label: 'Al Bukayriyah', value: 'al_bukayriyah' },
  { label: "Al Bad'", value: 'al_bad' },
  { label: 'Al Hanakiyah', value: 'al_hanakiyah' },
  { label: 'Al Khurmah', value: 'al_khurmah' },
  { label: 'Khulays', value: 'khulays' },
  { label: 'Al Jumum', value: 'al_jumum' },
  { label: 'Al Mahd', value: 'al_mahd' },
  { label: 'Al Qassim', value: 'al_qassim' },
];

const settingsEnum = {
  Language:'Language',
  OffDays:'OffDays',
  AccessibilitySettings:'AccessibilitySettings',
  NotificationSettings:'NotificationSettings',
  ChangePassword:'ChangePassword',
  PrivacyPolicy:'PrivacyPolicy',
  TermsAndCondition:'TermsAndCondition',
  DeleteAccount:'DeleteAccount',
};

 const notificationSettingKeys = {
  payments: true,
  schedule: true,
  cancellation: true,
  others: true,
  promotions: true,
};
const labelToKeyMap = {
  'Payments': 'payments',
  'Schedule': 'schedule',
  'Cancellation': 'cancellation',
  'Offers Notification': 'promotions',
  'Other Notification': 'others',
};

const accessAbilityLabelToKeyMap = {
  'Payments in & Payouts': 'paymentsandpayouts',
  'Codes & Discount': 'codesandDiscount',
  'Account Management': 'accountManagement',
  'Service Management': 'serviceManagement',
  'Promotions': 'promotions',
  'Chat': 'chat',
  'Scheduling': 'schedule',
  'Statistics': 'statics',
};



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
  serviceData,
  slides,
  invoiceDetailRows,
  notificationData,
  messages,
  complaints,
  staticBookings,
  requestStatus,
  openingHours,
  AvailableTimeSlots,
  bookingStatus,
  professionals,
  timeSlots,
  bookingDetails,
  moreRoutes,
  promotiondata,

  offDays,
  AccessAbilitySettingsData,
  AccessAbilitytoggleItems,
  graphTabs,
  bookingHistory,
  bookings,
  professionalsData,
  weeklySchedule,
  changeScheduleStatus,
  scheduleTimePeriod,
  statisticsservices,
  singleProfessionalMenuOptions,
  storagekeys ,
  filterList,
  imageBaseUrl,
  saudiArabiaCities,
  settingsEnum,
  notificationSettingKeys,
  labelToKeyMap,
  accessAbilityLabelToKeyMap,
  requestComplaintEnum,
};
