/**
 * Blog Articles — Static content store
 * 
 * Each article is self-contained with SEO metadata.
 * To add a new article: append a new object to the `articles` array below.
 * The `slug` becomes the URL: /blog/[slug]
 */

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  category: "ADHD" | "Autism" | "Executive Function" | "Community" | "Sensory";
  publishedAt: string; // ISO date
  readTimeMinutes: number;
  coverImage: string;
  coverAlt: string;
  // Body is plain prose split into paragraphs/headings. Use `## ` prefix for h2.
  body: string;
};

export const articles: Article[] = [
  {
    slug: "adhd-executive-function-explained",
    title: "Executive Function & ADHD: Why Your Brain Isn't Broken",
    excerpt:
      "If starting tasks feels like climbing a mountain, you're not lazy — you're working with a different operating system. Here's what's actually happening in the ADHD brain.",
    metaDescription:
      "Understand executive function, why ADHD makes tasks feel impossible to start, and practical strategies that actually work with your brain.",
    category: "ADHD",
    publishedAt: "2026-05-12",
    readTimeMinutes: 7,
    coverImage:
      "/assets/hero-abstract.webp",
    coverAlt:
      "Abstract neurodivergent brain connections illustration with soft teal and coral tones",
    body: `Executive function is the umbrella term for the mental skills that let us plan, start, sustain, and finish tasks. Think of it as your brain's project manager. For people with ADHD, that project manager is often understaffed, easily distracted, or out for lunch entirely — and that has nothing to do with willpower or intelligence.

## The eight executive functions

Researchers typically group executive function into eight skills: working memory, self-restraint, emotional control, sustained attention, task initiation, planning, organization, and time management. ADHD doesn't disable all of them equally — most people have a personal "fingerprint" of which ones lag behind and which feel easier.

## Why "just start" doesn't work

Neurotypical brains release dopamine in anticipation of finishing a task. That little chemical reward is what makes starting feel possible. ADHD brains tend to under-release this anticipatory dopamine, which means the on-ramp to action is genuinely steeper. You aren't avoiding the task because you're lazy — your brain isn't producing the chemical that makes starting feel rewarding.

## Strategies that actually help

Body doubling — working alongside another person, even silently or virtually — provides external accountability that supplements the missing internal cue. Time-blocking with built-in flexibility respects the fact that your energy and focus fluctuate. Breaking tasks into "the smallest stupid step" reduces the activation cost. And celebrating tiny wins reinforces the dopamine loop rather than fighting it.

## You are not your productivity

The most important reframe is this: your worth isn't measured by your output. Executive function challenges are real, but they don't define who you are. The goal isn't to become neurotypical — it's to build a life that works with the brain you actually have.`,
  },
  {
    slug: "sensory-overload-survival-guide",
    title: "Sensory Overload: A Survival Guide for Neurodivergent Adults",
    excerpt:
      "Bright lights, loud noises, scratchy fabrics — for many neurodivergent people, the sensory world is constantly turned up to eleven. Here's how to recognize overload and recover faster.",
    metaDescription:
      "Practical strategies for managing sensory overload as a neurodivergent adult, including warning signs, recovery tools, and environmental tweaks.",
    category: "Sensory",
    publishedAt: "2026-05-05",
    readTimeMinutes: 6,
    coverImage:
      "/assets/brain-pattern.webp",
    coverAlt:
      "Neurodivergent brain pattern background with interconnected neural pathways",
    body: `Sensory overload happens when your nervous system receives more input than it can process. For autistic, ADHD, and otherwise neurodivergent people, the threshold is often much lower than what society considers "normal" — and the recovery time is often much longer.

## What overload actually feels like

Overload isn't dramatic for everyone. It can show up as sudden irritability, brain fog, a strong urge to leave, or an inability to follow conversation. For others it feels physical: nausea, tunnel vision, the sense of being "outside" your body. None of these reactions are overreactions. They are your nervous system asking for less input.

## Recognize the warning signs early

Most of us miss the early signals because we've been trained to push through. Common early signs include increased sensitivity to a single sense (suddenly the fluorescent light feels unbearable), shortening attention span, and a creeping sense of dread without clear cause. Catching it here — instead of at meltdown — is the entire game.

## Build a sensory toolkit

Carry options for the senses that overload you most often. Noise-cancelling earbuds or loop-style filtered earplugs are a near-universal favorite. Tinted glasses help with visual overwhelm. A weighted lap pad, a chewable necklace, or a small soft texture can re-ground a panicking nervous system. The goal isn't to mask the world — it's to give yourself a dimmer switch.

## Recovery is non-negotiable

After overload, your nervous system needs genuine downtime — not "rest while answering emails." Twenty minutes of low-stimulation recovery (dark room, no screens, soft texture) prevents a small overload from cascading into a multi-day shutdown. Schedule recovery the way you'd schedule a meeting.`,
  },
  {
    slug: "body-doubling-why-it-works",
    title: "Body Doubling: The Surprising Strategy That Makes Tasks Possible",
    excerpt:
      "Why does folding laundry feel impossible alone but easy on a video call with a friend? The science behind one of the most effective ADHD productivity hacks.",
    metaDescription:
      "Body doubling explained: the neuroscience of why working alongside someone else helps ADHD brains start and finish tasks, plus how to set it up.",
    category: "Executive Function",
    publishedAt: "2026-04-22",
    readTimeMinutes: 5,
    coverImage:
      "/assets/community-illustration.webp",
    coverAlt:
      "Diverse group of people connecting in a supportive community",
    body: `Body doubling is the practice of doing a task in the presence of another person — physically or virtually — without necessarily interacting with them. They aren't helping you. They're just there. And for ADHD brains in particular, that simple presence can transform a task from impossible to ordinary.

## Why presence changes everything

Several mechanisms are likely at work. Having another person in your environment gently raises your nervous system's level of alertness, which compensates for the under-arousal common in ADHD. Their presence also creates a mild social accountability — you're less likely to drift into your phone when someone else is right there. And finally, the rhythm of someone else working can act as an external pacemaker for your own attention.

## How to set it up

The easiest version is a virtual body double: hop on a video call with a friend, both mute yourselves, and work in parallel for 25 to 50 minutes. There are also dedicated platforms and communities (including The Neuro Haven) that host scheduled body doubling sessions, so you don't have to coordinate one yourself.

In person, body doubling can be as simple as asking a partner or roommate to read a book in the same room while you tackle the dishes. The point isn't that they help — it's that they're there.

## What body doubling is not

It is not babysitting, and it is not a personal failing to need it. Neurotypical workplaces use body doubling constantly — it's called "the office." Recognizing that you work better with company isn't a weakness; it's data about how to design your life.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRecentArticles(limit: number = 3): Article[] {
  return [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}
