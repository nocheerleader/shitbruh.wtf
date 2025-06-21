import { QuizResult } from '../types/quiz';

export function calculateResult(totalRedFlags: number): QuizResult {
  if (totalRedFlags <= 2) {
    return {
      totalRedFlags,
      title: "Certified Good Bro 👑",
      description: "You're basically the friend everyone wishes they had. Your friends actually enjoy spending time with you, and you make group chats better, not worse. Keep being awesome, bro!",
      emoji: "👑",
      advice: [
        "Keep being the friend you'd want to have 🤝",
        "Your emotional intelligence is showing (that's good!) 🧠",
        "Maybe teach your other friends how it's done 📚"
      ]
    };
  } else if (totalRedFlags <= 4) {
    return {
      totalRedFlags,
      title: "Mostly Harmless Bro 🤷‍♂️",
      description: "You've got some questionable moments but you're trying. Most of the time you're cool, but sometimes you slip into mild bro territory. Nothing that can't be fixed with a little self-awareness!",
      emoji: "🤷‍♂️",
      advice: [
        "Maybe text your mom back for once 📱",
        "Consider that your opinion isn't always needed 🤐",
        "Try listening without planning your comeback 👂"
      ]
    };
  } else if (totalRedFlags <= 6) {
    return {
      totalRedFlags,
      title: "Problematic Bro Alert 🚨",
      description: "Your friends definitely talk about you in the group chat. You're starting to venture into questionable territory. Time for some serious self-reflection, my guy.",
      emoji: "🚨",
      advice: [
        "Maybe consider therapy? Like, seriously 🛋️",
        "Try going 24 hours without making it about you 🤐",
        "Ask yourself: 'Am I the drama?' (spoiler: you might be) 🎭"
      ]
    };
  } else if (totalRedFlags <= 9) {
    return {
      totalRedFlags,
      title: "Shit Bro Confirmed 💩",
      description: "Yikes, bro. You've got some serious work to do. Your friends tolerate you out of habit or pity. Time to do some deep soul-searching and maybe read a book about emotional intelligence.",
      emoji: "💩",
      advice: [
        "Delete social media for a month and touch grass 🌱",
        "Practice saying 'you're right' without dying inside ✅",
        "Consider: maybe you ARE the problem 🤔"
      ]
    };
  } else {
    return {
      totalRedFlags,
      title: "Absolute Shit Bro 🗑️",
      description: "Congratulations! You've achieved peak shit bro status. Your friends probably have a separate group chat without you. It's time for a complete personality overhaul. Consider this your wake-up call.",
      emoji: "🗑️",
      advice: [
        "Genuinely consider if you're happy being this person 😞",
        "Maybe start with basic human decency? 🤷‍♂️",
        "Your mother is disappointed (and she's probably right) 😔"
      ]
    };
  }
}