 const signs = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
      ];


// 31
const complimentsForMen = [
  "You carry yourself with confidence and strength.",
  "Your dedication and focus are truly admirable.",
  "You have a magnetic presence.",
  "Your leadership inspires those around you.",
  "You have a natural charm that's hard to ignore.",
  "You're the kind of man people look up to.",
  "You handle challenges with grace and grit.",
  "Your intelligence shines through everything you do.",
  "You're a man of integrity and honor.",
  "Your sense of style is always on point.",
  "You’re a great listener and problem solver.",
  "Your resilience is something to be proud of.",
  "You make everyone feel respected and valued.",
  "Your sense of humor is fantastic.",
  "You lead by example and earn respect effortlessly.",
  "You know how to turn dreams into reality.",
  "You're strong in both body and spirit.",
  "Your loyalty is unmatched.",
  "You have a calm and reassuring presence.",
  "You inspire others to be their best selves.",
  "You're driven and determined — a true go-getter.",
  "You’re a protector and a provider in every sense.",
  "You face life’s challenges like a warrior.",
  "You radiate confidence and humility together.",
  "You make smart look cool.",
  "Your voice has a grounding presence.",
  "You're thoughtful, composed, and wise beyond years.",
  "You’ve got a mind that never stops growing.",
  "You’re dependable — someone people count on.",
  "You bring stability and strength to every situation.",
  "You’re the kind of man who makes others proud to know you."
];
// 20
const victimPhrasesForMen = [
  "Nice guys always finish last.",
  "No one notices when I do the right thing.",
  "I give my all, and still get overlooked.",
  "People only remember your mistakes, not your efforts.",
  "When you’re too kind, they think you’re weak.",
  "I keep my promises, yet I'm the one who’s forgotten.",
  "You help everyone, and end up standing alone.",
  "Being a good man today feels like a disadvantage.",
  "I stay silent out of respect, and they call it indifference.",
  "I choose peace, but they mistake it for passiveness.",
  "The more I give, the less they value me.",
  "They only respect you when you're unavailable.",
  "If you don’t show anger, they assume you don’t care.",
  "I carry everyone's burden, but who carries mine?",
  "When you're understanding, they take you for granted.",
  "They praise the loud ones and ignore the loyal ones.",
  "I never complain, but I'm always blamed.",
  "The quiet strength of a man is often ignored.",
  "Doing good doesn't mean you'll be treated well.",
  "Even when I do everything right, I'm still questioned."
];

// 30

const lifeRecommendations = [
  "Feed a stray animal—it costs little, but means a lot.",
  "Help an elderly person carry their bags.",
  "Wake up early and enjoy the quiet of the morning.",
  "Start your day with gratitude, not your phone.",
  "Drink more water and take care of your body.",
  "Listen more than you speak in conversations.",
  "Spend time with family without distractions.",
  "Forgive someone you’ve held resentment against.",
  "Smile at strangers—it might change their day.",
  "Take a walk in nature without headphones.",
  "Read at least one good book a month.",
  "Invest time in a skill you’ve always wanted to learn.",
  "Save a portion of your income every month.",
  "Do a digital detox once a week.",
  "Compliment someone genuinely every day.",
  "Volunteer at a local charity or NGO.",
  "Cook a healthy meal for yourself or someone else.",
  "Limit your time with negative people.",
  "Say 'thank you' more often—mean it when you do.",
  "Don’t just hear—listen with full attention.",
  "Write your thoughts in a journal every night.",
  "Make peace with your past, don’t live in it.",
  "Practice deep breathing when stressed.",
  "Be kind to people even when no one’s watching.",
  "Support a small business in your community.",
  "Meditate, even if only for 5 minutes.",
  "Visit your grandparents or call them regularly.",
  "Don’t gossip—speak only what’s true and kind.",
  "Work out—not to impress, but to stay strong and healthy.",
  "Do something every week that scares you a little."
];


// 20
const futureDreamsArray = [
  "One day you will become a crorepati.",
  "One day you will achieve everything you once prayed for.",
  "One day you will be living the life you dream about today.",
  "One day you will inspire millions with your success story.",
  "One day you will look back and smile at how far you've come.",
  "One day you will make your parents truly proud.",
  "One day you will be free from all financial stress.",
  "One day you will wake up to peace, not pressure.",
  "One day you will travel the world on your own terms.",
  "One day you will own that dream car you've always imagined.",
  "One day you will start a business that changes lives.",
  "One day you will buy your own house with your hard-earned money.",
  "One day you will help others rise just as you did.",
  "One day you will earn more than you ever thought possible.",
  "One day you will walk into luxury like you were born for it.",
  "One day you will be celebrated for never giving up.",
  "One day you will fund dreams, not just chase them.",
  "One day you will be the person others look up to.",
  "One day you will say, 'I made it.'",
  "One day you will live the life you once thought was impossible."
];







const form =document.getElementById('astroForm');



form.addEventListener('submit',(Event)=>{

Event.preventDefault();
//  / iska kam hai console ma show karan 

// console.log("submitted")




const name = document.getElementById('fname').value;


const surname =document.getElementById('lname').value;

const  month = Number(document.getElementById('month').value);

const year =Number(document.getElementById('year').value);

const day=Number(document.getElementById('day').value);

// console.log(name,surname,month,year,day);


const result =document.getElementById('result');


const first_message=`hello  ${name}  ${surname}`;
const second_message=`your zodic sign is ${signs[month-1]}`;
const third_message = complimentsForMen[day - 1];


const index1=Math.floor(Math.random()*20);
const fourth_message=victimPhrasesForMen[index1];




const index2 =(name.length*surname.length*year)%30;



const fifth_message= lifeRecommendations[index2];

const mom=(day*month*year)%20;


const sixth_message=futureDreamsArray[mom];


result.innerHTML =`${first_message}${second_message}${third_message} ${fourth_message} ${fifth_message} ${sixth_message} `;


})