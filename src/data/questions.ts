import { Question } from '../types/quiz';

export const questionBank: Question[] = [
  {
    id: 'gym-spot',
    question: "Your buddy asks you to spot him at the gym. You:",
    answers: [
      { text: "Actually spot him properly like a decent human", emoji: "💪", redFlags: 0 },
      { text: "Stand there scrolling TikTok while he struggles", emoji: "📱", redFlags: 2 },
      { text: "Add more weight when he's not looking", emoji: "😈", redFlags: 3 }
    ]
  },
  {
    id: 'party-crying',
    question: "You're at a house party and someone's girlfriend is crying. You:",
    answers: [
      { text: "Mind your own business and grab another beer", emoji: "🍺", redFlags: 1 },
      { text: "Ugh drama queen alert", emoji: "👸", redFlags: 2 },
      { text: "Tell her boyfriend she's being extra", emoji: "🤡", redFlags: 3 }
    ]
  },
  {
    id: 'pizza-revenge',
    question: "Your roommate ate your leftover pizza. You:",
    answers: [
      { text: "Write a passive-aggressive note", emoji: "📝", redFlags: 2 },
      { text: "Eat his food in revenge", emoji: "🍕", redFlags: 2 },
      { text: "Piss in his beer the next chance you get", emoji: "🍺", redFlags: 3 }
    ]
  },
  {
    id: 'ex-at-bar',
    question: "At the bar, you see your ex with someone new. You:",
    answers: [
      { text: "Text your boys the whole situation", emoji: "📲", redFlags: 2 },
      { text: "Go up and 'accidentally' spill a drink", emoji: "🥤", redFlags: 3 },
      { text: "I've never had a girlfriend", emoji: "❎", redFlags: 0 }
    ]
  },
  {
    id: 'gaming-rage',
    question: "You lose in your favorite video game. You:",
    answers: [
      { text: "Blame lag and broken game mechanics", emoji: "🎮", redFlags: 2 },
      { text: "Throw your controller at the wall", emoji: "💥", redFlags: 3 },
      { text: "Express your emotions with a good cry", emoji: "😭", redFlags: 0 }
    ]
  },
  {
    id: 'girlfriend-friends',
    question: "Your girlfriend wants to hang with her friends. You:",
    answers: [
      { text: "Tell her she spends too much time with them", emoji: "😤", redFlags: 3 },
      { text: "Guilt trip her into staying home instead", emoji: "😢", redFlags: 3 },
      { text: "Are secretly happy as you have bro plans", emoji: "👍", redFlags: 1 }
    ]
  },
  {
    id: 'drunk-friend',
    question: "Your friend is way too drunk at the bar. You:",
    answers: [
      { text: "Call him a taxi and hope for the best", emoji: "🚗", redFlags: 1 },
      { text: "Film him for social media content", emoji: "📹", redFlags: 2 },
      { text: "Leave him there, he's an adult", emoji: "🚪", redFlags: 3 }
    ]
  },
  {
    id: 'workout-selfie',
    question: "After every gym session, you:",
    answers: [
      { text: "Post a mirror selfie with motivational quotes", emoji: "🤳", redFlags: 2 },
      { text: "Share your workout stats on every platform", emoji: "📊", redFlags: 1 },
      { text: "Just go home and shower like a normal person", emoji: "🚿", redFlags: 0 }
    ]
  },
  {
    id: 'restaurant-server',
    question: "The restaurant server makes a small mistake. You:",
    answers: [
      { text: "Make a scene and demand to see the manager", emoji: "😡", redFlags: 3 },
      { text: "Leave a bad review mentioning them by name", emoji: "⭐", redFlags: 2 },
      { text: "Flip the table, do they know who I am", emoji: "❓", redFlags: 3 }
    ]
  },
  {
    id: 'group-chat',
    question: "In the group chat, you're known for:",
    answers: [
      { text: "Sending memes and keeping things light", emoji: "😂", redFlags: 0 },
      { text: "Starting drama between friends", emoji: "🔥", redFlags: 3 },
      { text: "Only responding when you need to borrow cash", emoji: "📞", redFlags: 2 }
    ]
  },
  {
    id: 'date-phone',
    question: "On a first date, you:",
    answers: [
      { text: "Keep phone out, what if a better option comes up", emoji: "📱", redFlags: 3 },
      { text: "Check it occasionally when she's talking", emoji: "👀", redFlags: 2 },
      { text: "Answer calls and texts throughout dinner", emoji: "☎️", redFlags: 3 }
    ]
  },
  {
    id: 'driving-road-rage',
    question: "Someone cuts you off in traffic. You:",
    answers: [
      { text: "Honk aggressively and tailgate them", emoji: "📯", redFlags: 3 },
      { text: "Mutter under your breath and move on", emoji: "😒", redFlags: 1 },
      { text: "Assume they didn't see you and let it go", emoji: "🤷", redFlags: 0 }
    ]
  },
  {
    id: 'party-host',
    question: "You're hosting a party and someone breaks something. You:",
    answers: [
      { text: "Laugh it off - but bitch behind their backs", emoji: "😅", redFlags: 1 },
      { text: "Make them Venmo you immediately", emoji: "💸", redFlags: 2 },
      { text: "Kick them out and blast them on social media", emoji: "🚨", redFlags: 3 }
    ]
  },
  {
    id: 'workout-partner',
    question: "Your workout partner can't lift as much as you. You:",
    answers: [
      { text: "Ha! No one can lift more than me", emoji: "💪", redFlags: 2 },
      { text: "Constantly mention how much more you lift", emoji: "📢", redFlags: 2 },
      { text: "Make jokes about their 'weak lifts' to others", emoji: "😏", redFlags: 3 }
    ]
  },
  {
    id: 'girl-rejects',
    question: "A girl rejects you at the bar. You:",
    answers: [
      { text: "Say 'no worries' and walk away respectfully", emoji: "🚶", redFlags: 0 },
      { text: "Call her stuck up to your friends", emoji: "🗣️", redFlags: 2 },
      { text: "Keep pestering until security gets involved", emoji: "🚫", redFlags: 3 }
    ]
  },
  {
    id: 'fantasy-football',
    question: "You lose your fantasy football matchup. You:",
    answers: [
      { text: "Congratulate your opponent but rage inside", emoji: "🤝", redFlags: 1 },
      { text: "Complain about 'unlucky' matchups all week", emoji: "😭", redFlags: 2 },
      { text: "Accuse others of cheating or collusion", emoji: "🕵️", redFlags: 3 }
    ]
  },
  {
    id: 'mom-calls',
    question: "Your mom calls while you're with friends. You:",
    answers: [
      { text: "Answer and have a nice chat", emoji: "❤️", redFlags: 0 },
      { text: "Answer but rush her off the phone", emoji: "⏰", redFlags: 1 },
      { text: "Ignore it and complain about 'clingy parents'", emoji: "🙄", redFlags: 2 }
    ]
  },
  {
    id: 'splitting-bill',
    question: "The dinner bill comes and it's time to split. You:",
    answers: [
      { text: "Calculate fairly based on what everyone ordered", emoji: "🧮", redFlags: 0 },
      { text: "Suggest splitting evenly even though you ordered the most", emoji: "🍽️", redFlags: 2 },
      { text: "Conveniently 'forget' your wallet", emoji: "💸", redFlags: 3 }
    ]
  },
  {
    id: 'friends-success',
    question: "Your best friend gets a promotion. You:",
    answers: [
      { text: "Celebrate with them and buy the first round", emoji: "🎉", redFlags: 0 },
      { text: "Congratulate them but feel secretly jealous", emoji: "😬", redFlags: 1 },
      { text: "Make comments about how they 'got lucky'", emoji: "🍀", redFlags: 3 }
    ]
  },
  {
    id: 'uber-driver',
    question: "Your Uber driver takes a slightly longer route. You:",
    answers: [
      { text: "Demand a discount or you'll report them", emoji: "🚗", redFlags: 2 },
      { text: "Passive-aggressively mention the 'better route'", emoji: "🗺️", redFlags: 2 },
      { text: "One-star them and report for 'scamming'", emoji: "⭐", redFlags: 3 }
    ]
  },
  {
    id: 'tinder-match',
    question: "Your Tinder match doesn't respond immediately. You:",
    answers: [
      { text: "Try catfish her from another account", emoji: "⏳", redFlags: 2 },
      { text: "Send a follow-up message after a few hours", emoji: "📱", redFlags: 1 },
      { text: "Send multiple messages asking why they're ignoring you", emoji: "📵", redFlags: 3 }
    ]
  },
  {
    id: 'losing-argument',
    question: "You're clearly losing an argument. You:",
    answers: [
      { text: "Start crying to get sympathy", emoji: "🧠", redFlags: 1 },
      { text: "Change the subject to avoid conceding", emoji: "🔄", redFlags: 2 },
      { text: "Get louder and more aggressive", emoji: "📢", redFlags: 3 }
    ]
  },
  {
    id: 'bathroom-queue',
    question: "There's a long bathroom line at the bar. You:",
    answers: [
      { text: "Bribe the cheapest looking dude in the queue", emoji: "⏰", redFlags: 2 },
      { text: "Try to cut in line with some excuse", emoji: "🏃", redFlags: 2 },
      { text: "Just pee outside behind the building", emoji: "🌳", redFlags: 3 }
    ]
  },
  {
    id: 'karaoke-night',
    question: "At karaoke night, you:",
    answers: [
      { text: "Get too drunk and vomit on yourself", emoji: "🎤", redFlags: 3 },
      { text: "Hog the mic and refuse to let others sing", emoji: "🎵", redFlags: 3 },
      { text: "Mock other people's song choices", emoji: "😂", redFlags: 2 }
    ]
  },
  {
    id: 'friends-girlfriend',
    question: "Your friend's girlfriend is clearly toxic. You:",
    answers: [
      { text: "Hit on her because you know she's easy", emoji: "🤐", redFlags: 3 },
      { text: "Give your honest opinion when asked", emoji: "💭", redFlags: 0 },
      { text: "Constantly trash-talk her to everyone", emoji: "🗣️", redFlags: 2 }
    ]
  },
  {
    id: 'group-photo',
    question: "Taking a group photo, you:",
    answers: [
      { text: "Make sure everyone looks good before posting", emoji: "📸", redFlags: 0 },
      { text: "Post the first one even if others look bad", emoji: "📤", redFlags: 2 },
      { text: "Only post it if you look good", emoji: "🤳", redFlags: 1 }
    ]
  },
  {
    id: 'designated-driver',
    question: "You're the designated driver. You:",
    answers: [
      { text: "Stay sober and get everyone home safe", emoji: "🚙", redFlags: 0 },
      { text: "Have 'just one or two' drinks", emoji: "🍺", redFlags: 3 },
      { text: "Ditch the group when you want to drink", emoji: "🏃", redFlags: 3 }
    ]
  },
  {
    id: 'retail-worker',
    question: "The retail worker says they can't accept your expired coupon. You:",
    answers: [
      { text: "Throw the items at the worker and walk off", emoji: "💳", redFlags: 3 },
      { text: "Ask to speak to their manager", emoji: "👔", redFlags: 2 },
      { text: "Make a scene about 'customer service'", emoji: "😤", redFlags: 3 }
    ]
  },
  {
    id: 'spotify-aux',
    question: "You're given the aux cord. You:",
    answers: [
      { text: "Play music everyone can enjoy", emoji: "🎶", redFlags: 0 },
      { text: "Only play your favorite genre", emoji: "🎵", redFlags: 1 },
      { text: "Rick-roll everyone repeatedly", emoji: "🎭", redFlags: 2 }
    ]
  },
  {
    id: 'wedding-reception',
    question: "At your friend's wedding reception, you:",
    answers: [
      { text: "You make inappropriate jokes about the grooms mom", emoji: "💒", redFlags: 1 },
      { text: "Hit on all the bridesmaids", emoji: "💐", redFlags: 2 },
      { text: "Get too drunk and make a scene", emoji: "🍷", redFlags: 3 }
    ]
  },
  {
    id: 'parking-spot',
    question: "Someone takes the parking spot you were waiting for. You:",
    answers: [
      { text: "Key their car when they leave, obviously", emoji: "🅿️", redFlags: 3 },
      { text: "Honk and gesture angrily at them", emoji: "📯", redFlags: 2 },
      { text: "Get out and confront them face-to-face", emoji: "🤬", redFlags: 3 }
    ]
  },
  {
    id: 'group-project',
    question: "In a group project, you typically:",
    answers: [
      { text: "Complain about everything and offer no solutions", emoji: "⚖️", redFlags: 2 },
      { text: "Take charge but micromanage everything", emoji: "👨‍💼", redFlags: 2 },
      { text: "Do minimal work and let others carry you", emoji: "🛋️", redFlags: 3 }
    ]
  },
  {
    id: 'social-media-ex',
    question: "Your ex posts about being happy. You:",
    answers: [
      { text: "Ignore it and focus on your own life", emoji: "🧘", redFlags: 0 },
      { text: "Subtweet about 'fake happiness'", emoji: "🐦", redFlags: 2 },
      { text: "Like all their posts to mess with their head", emoji: "❤️", redFlags: 3 }
    ]
  },
  {
    id: 'friend-borrowing',
    question: "A friend asks to borrow money. You:",
    answers: [
      { text: "Help if you can afford it", emoji: "💰", redFlags: 0 },
      { text: "Lend it but constantly remind them about it", emoji: "⏰", redFlags: 2 },
      { text: "Say yes then guilt trip them about it", emoji: "😔", redFlags: 3 }
    ]
  },
  {
    id: 'concert-crowd',
    question: "At a concert, you:",
    answers: [
      { text: "Enjoy the music and respect others' space", emoji: "🎸", redFlags: 0 },
      { text: "Push your way to the front during the show", emoji: "👥", redFlags: 2 },
      { text: "Start fights with people who bump into you", emoji: "👊", redFlags: 3 }
    ]
  },
  {
    id: 'food-delivery',
    question: "Your food delivery is 10 minutes late. You:",
    answers: [
      { text: "Wait patiently, traffic happens", emoji: "🕐", redFlags: 0 },
      { text: "Text the driver asking for updates", emoji: "📱", redFlags: 1 },
      { text: "One-star them and demand a refund", emoji: "⭐", redFlags: 3 }
    ]
  },
  {
    id: 'gym-equipment',
    question: "Someone's using the equipment you want. You:",
    answers: [
      { text: "Wait politely or ask how many sets they have left", emoji: "⏳", redFlags: 0 },
      { text: "Stand nearby making it awkward until they leave", emoji: "👀", redFlags: 2 },
      { text: "Take their weights while they're resting", emoji: "🏋️", redFlags: 3 }
    ]
  },
  {
    id: 'party-cleanup',
    question: "After a house party, you:",
    answers: [
      { text: "Help clean up without being asked", emoji: "🧹", redFlags: 0 },
      { text: "Leave quietly hoping no one notices", emoji: "🚪", redFlags: 2 },
      { text: "Bounce immediately after the fun ends", emoji: "🏃", redFlags: 3 }
    ]
  },
  {
    id: 'girlfriend-male-friends',
    question: "Your girlfriend has close male friends. You:",
    answers: [
      { text: "Trust her and get to know them too", emoji: "🤝", redFlags: 0 },
      { text: "Feel uncomfortable but don't say anything", emoji: "😬", redFlags: 1 },
      { text: "Demand she stops talking to them", emoji: "🚫", redFlags: 3 }
    ]
  },
  {
    id: 'bad-day',
    question: "You're having a bad day. You:",
    answers: [
      { text: "Pick a fight with your girlfriend, she should suffer too", emoji: "😌", redFlags: 2 },
      { text: "Complain to everyone who will listen", emoji: "😤", redFlags: 1 },
      { text: "Take your anger out on service workers", emoji: "😡", redFlags: 3 }
    ]
  },
  {
    id: 'sports-team-loses',
    question: "Your favorite sports team loses an important game. You:",
    answers: [
      { text: "Drown your sorrows with one too many beers", emoji: "😞", redFlags: 2 },
      { text: "Rant on social media about refs and bad calls", emoji: "📱", redFlags: 1 },
      { text: "Get in fights with opposing fans online", emoji: "💻", redFlags: 3 }
    ]
  },
  {
    id: 'friend-success-dating',
    question: "Your less attractive friend starts dating someone hot. You:",
    answers: [
      { text: "Ask her out, you know she can do better", emoji: "😊", redFlags: 0 },
      { text: "Wonder what they have that you don't", emoji: "🤔", redFlags: 1 },
      { text: "Make comments about how they 'punched above their weight'", emoji: "🥊", redFlags: 3 }
    ]
  },
  {
    id: 'wingman-duty',
    question: "Your friend asks you to be his wingman. You:",
    answers: [
      { text: "Help him out and hype him up", emoji: "🦅", redFlags: 0 },
      { text: "Help but also try to get with someone yourself", emoji: "🎯", redFlags: 1 },
      { text: "Sabotage him so you look better by comparison", emoji: "😈", redFlags: 3 }
    ]
  },
  {
    id: 'online-gaming',
    question: "Playing online games, you:",
    answers: [
      { text: "Can't deal with losing and punch the wall", emoji: "🎮", redFlags: 3 },
      { text: "Get frustrated but keep it to yourself", emoji: "😤", redFlags: 1 },
      { text: "Rage quit and blame everyone else", emoji: "💥", redFlags: 3 }
    ]
  },
  {
    id: 'restaurant-busy',
    question: "The restaurant is busy and service is slow. You:",
    answers: [
      { text: "Ask to speak to the manager", emoji: "🗣️", redFlags: 1 },
      { text: "Make passive-aggressive comments to your date", emoji: "😒", redFlags: 2 },
      { text: "Complain loudly so other tables can hear", emoji: "📢", redFlags: 3 }
    ]
  },
  {
    id: 'friend-needs-help-moving',
    question: "Your friend needs help moving. You:",
    answers: [
      { text: "Show up early with a truck and good attitude", emoji: "🚚", redFlags: 0 },
      { text: "Help but complain the whole time", emoji: "📦", redFlags: 2 },
      { text: "Make excuses and bail at the last minute", emoji: "🏃", redFlags: 3 }
    ]
  },
  {
    id: 'bar-tab',
    question: "At the end of the night, the bar tab is higher than expected. You:",
    answers: [
      { text: "Split it fairly among everyone who drank", emoji: "🧾", redFlags: 0 },
      { text: "Argue about who had what to pay less", emoji: "💸", redFlags: 2 },
      { text: "Sneak out while others are figuring it out", emoji: "🚪", redFlags: 3 }
    ]
  },
  {
    id: 'social-media-politics',
    question: "Someone posts political views you disagree with. You:",
    answers: [
      { text: "Insult the poster with no logic in your reply ", emoji: "👆", redFlags: 2 },
      { text: "Reply with a meme to keep it light", emoji: "🤡", redFlags: 0 },
      { text: "Start a flame war in the comments", emoji: "🔥", redFlags: 3 }
    ]
  },
  {
    id: 'netflix-password',
    question: "Your Netflix password is being shared by too many people. You:",
    answers: [
      { text: "Politely ask people to get their own accounts", emoji: "📺", redFlags: 0 },
      { text: "Change the password without warning anyone", emoji: "🔒", redFlags: 2 },
      { text: "Keep complaining but never actually do anything", emoji: "😤", redFlags: 1 }
    ]
  }
];

export function getRandomQuestions(count: number = 6): Question[] {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}