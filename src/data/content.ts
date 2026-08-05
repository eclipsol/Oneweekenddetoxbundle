import flatlayImage from '../assets/product-kit-flatlay-01.jpg'
import pagesImage from '../assets/product-pages-tabletop-02.jpg'
import tabletImage from '../assets/product-tablet-square-03.jpg'
import type { LandingPageContent } from '../types/content'

export const productImages = {
  heroBackground: pagesImage,
  heroForeground: tabletImage,
  printBackground: flatlayImage,
  pricingBackground: flatlayImage,
}

export const landingPageContent: LandingPageContent = {
  purchaseUrl: 'https://pay.hotmart.com/F106505663A',
  heroStats: [
    { value: '60', label: 'Activities to lean' },
    { value: '21', label: 'Affirmations for success' },
    { value: '5', label: 'Journaling templates' },
    { value: '2', label: 'Day weekend to change it all' },
  ],
  trustItems: [
    { label: 'AS GATHERED BY', value: 'Human Behavior Lab' },
    { label: 'For Every Type of Person' },
    { label: '★ 4.9 / 5 from early readers' },
    { label: 'Created by Psychologists and Life Coaches' },
  ],
  audience: [
    { title: 'Remote workers', body: 'Whose commute is ten feet and whose work screen and rest screen are the same one.' },
    { title: 'Parents', body: "Who'd like their kids to see them look up from a phone a little more often." },
    { title: 'Families', body: "Looking for something to do together that isn't four separate screens in the same room." },
    { title: 'Habitual Scrollers', body: 'Anyone who checks their phone before their feet hit the floor in the morning.' },
  ],
  testimonials: [
    { quote: 'my screen time dropped without me even trying. genuinely did not see that coming.', author: 'Priya', accent: 'sage' },
    { quote: 'felt less like a self-help thing and more like a tiny reset button for my brain. 10/10.', author: 'Nico', accent: 'clay' },
    { quote: 'the affirmations felt cheesy at first, by day two I was fully in it. no notes.', author: 'Jordan', accent: 'blue' },
  ],
  benefits: [
    { index: '01', title: 'No app to download', body: "Nothing to install and nothing pulling your attention back to a screen. It's paper, a pen, and a plan." },
    { index: '02', title: 'You choose the when, where, and how', body: 'No notifications, no schedule but your own. Work through it at the kitchen table, on the porch, wherever suits your weekend.' },
    { index: '03', title: 'A weekend challenge you needed yesterday', body: 'Exercises that have actual purpose, with moments of reflection and affirmation to follow it up.' },
    { index: '04', title: 'Yours to keep', body: 'Print it as many times as you like! You can use it again any weekend you need another reset.' },
  ],
  plans: [
    { id: 'weekend-kit', title: 'Base Version: The One Weekend Challenge', price: 12, description: 'The full weekend challenge on its own. Five journal templates, a starting-line quiz, 21 affirmations, and 60 screen-free things to do.', cta: 'Get the Kit' },
    { id: 'full-bundle', title: 'The One Weekend Full Challenge Bundle', price: 20, description: 'Includes both The Weekend Kit and The Life Beyond Screens Challenge. The weekend that clears your space, and the 10-day challenge that makes it stick.', cta: 'Get the Bundle', highlighted: true, promo: 'Use Code 5OFFBUNDLE Before August 15 And Pay $15' },
    { id: 'life-beyond-screens', title: 'After the Weekend: The Life Beyond Screens 10 Day Guide', price: 8, description: "A 10-day follow-up with a small guided exercise for the end of each day. For when the weekend's over and you want the habit to keep going.", cta: 'Get the Add-On' },
  ],
  faq: [
    { id: 'bundle-difference', question: "What's the difference between the bundle and the kit?", answer: 'The Bundle includes both The Weekend Kit and The Life Beyond Screens Challenge, while the Kit on its own is dedicated to just guiding you through the weekend you choose.' },
    { id: 'print', question: 'Do I really need to print it?', answer: "You can read it digitally, but the whole point is to put the plan somewhere your phone can't interrupt. Print it, staple it, clip it, or leave it loose on the kitchen table." },
    { id: 'weekend-kit', question: "What's in the weekend kit?", answer: 'A Digital Dependency quiz, 60 screen-free activities, 21 affirmations, five journaling templates, a weekend reset plan, and reflection pages.' },
    { id: 'ten-day-challenge', question: "What's in the 10 day \"Life beyond screens\" challenge?", answer: 'Ten small guided exercises that help you carry the weekend into the rest of your routines without adding another app or notification.' },
    { id: 'creator', question: 'Who even made this in the first place?', answer: 'Human Behavior Lab, created with psychologists and life coaches who wanted a calmer, more practical way to make a change that lasts.' },
  ],
  coupon: { oldPrice: 20, newPrice: 15, savingsLabel: 'SAVE $5', code: '5OFFBUNDLE', expiresLabel: 'applied automatically · ends August 15' },
}
