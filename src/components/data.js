import { LuLeaf, LuBell, LuHeart, LuDroplets, LuSun, LuWind, LuThermometerSun } from "react-icons/lu";

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "FAQs", href: "#faqs" }
]

export const features = [
    {
        icon: LuHeart,
        title: "Perfect Match",
        description: "Find your ideal plant companion based on your lifestyle, space, and experience level."
    },
    {
        icon: LuLeaf,
        title: "Expert Care Guides",
        description: "Access detailed, personalized care instructions for every plant in your collection."
    },
    {
        icon: LuBell,
        title: "Smart Reminders",
        description: "Get timely notifications for watering, fertilizing, and other care tasks."
    }
];

export const testimonials = [
    {
        name: "Sarah Mike",
        role: "Plant Parent of 12",
        content: "Sprout helped me save my dying plants. Now my home is filled with thriving green pals!",
        rating: 4
    },
    {
        name: "John Doe",
        role: "Beginner Plant Parent",
        content: "The plant matching quiz found me the perfect low-maintenance plants for my busy lifestyle.",
        rating: 5
    },
    {
        name: "Jane Doe",
        role: "Gardener",
        content: "The care reminders and guides have been a game-changer for maintaining my indoor jungle.",
        rating: 5
    }
];

export const faqs = [
    {
        question: "How does the plant matching system work?",
        answer: "Our matching system considers factors like your schedule, lighting conditions, experience level, and preferences to recommend plants that will thrive in your care."
    },
    {
        question: "Are the care guides customizable?",
        answer: "Yes! Each care guide adapts to your specific environment and plant's needs, providing personalized recommendations for optimal growth."
    },
    {
        question: "Can I track multiple plants?",
        answer: "Absolutely! You can add unlimited plants to your collection, each with its own care schedule and customized guidance."
    },
    {
        question: "Is Sprout suitable for beginners?",
        answer: "Definitely! We designed Sprout to be helpful for plant parents of all experience levels, with special attention to making plant care accessible for beginners."
    }
];

export const questions = [
    {
        id: 1,
        question: "How much natural light does your space receive?",
        options: [
            { id: 'bright', text: "Bright direct sunlight", description: "6+ hours of direct sun" },
            { id: 'medium', text: "Medium indirect light", description: "Bright, but no direct sun" },
            { id: 'low', text: "Low light", description: "No direct sun, away from windows" }
        ]
    },
    {
        id: 2,
        question: "How often can you water your plants?",
        options: [
            { id: 'daily', text: "Daily", description: "I can check on them every day" },
            { id: 'weekly', text: "Weekly", description: "Once a week works best" },
            { id: 'biweekly', text: "Bi-weekly", description: "Every couple of weeks" }
        ]
    },
    {
        id: 3,
        question: "Do you have pets at home?",
        options: [
            { id: 'yes', text: "Yes", description: "I have pets that might interact with plants" },
            { id: 'no', text: "No", description: "No pets at home" }
        ]
    },
    {
        id: 4,
        question: "What is your experience level with plants?",
        options: [
            { id: 'beginner', text: "Beginner", description: "I'm new to plant care" },
            { id: 'intermediate', text: "Intermediate", description: "I have some experience" },
            { id: 'expert', text: "Expert", description: "I'm very experienced with plants" }
        ]
    }
];

export const plantMatches = [
    {
        id: 1,
        name: "Snake Plant",
        description: "Perfect for low-light conditions and infrequent watering.",
        care: "Easy"
    },
    {
        id: 2,
        name: "Pothos",
        description: "Adaptable to various light conditions and forgiving of irregular care.",
        care: "Easy"
    },
    {
        id: 3,
        name: "ZZ Plant",
        description: "Thrives in low light and very drought tolerant.",
        care: "Easy"
    },
    {
        id: 4,
        name: "Spider Plant",
        description: "Great for beginners, tolerates a wide range of conditions.",
        care: "Easy"
    },
    {
        id: 5,
        name: "Peace Lily",
        description: "Prefers low to medium light and consistent moisture.",
        care: "Moderate"
    },
    {
        id: 6,
        name: "Aloe Vera",
        description: "Needs bright light and infrequent watering.",
        care: "Easy"
    },
    {
        id: 7,
        name: "Fiddle Leaf Fig",
        description: "Requires bright, indirect light and regular watering.",
        care: "Moderate"
    }
];