# Watch Clash

> **[Play with the Live App Here](https://watch-clash.vercel.app/)**

Watch Clash is an interactive Progressive Web Application (PWA) designed to solve a common modern problem: decision paralysis caused by endless media backlogs. By pitting movies, TV shows, anime, or books head-to-head in a simple bracket-style comparison, Watch Clash helps users quickly find what to watch or read next.

---

## 🎯 The Problem & The Solution

* **The Problem:** Streaming services and reading lists offer endless choices, leading to choice fatigue. Spending 30 minutes scrolling through options often results in picking nothing.
* **The Solution:** Watch Clash simplifies decision-making into binary choices (A vs. B). By eliminating items one clash at a time, the winner naturally emerges at the top of your list.

---

## 📱 User Flow & How It Works

1. **Add Items to Your Backlog:** Enter titles into your personal clash list (movies, shows, or books).
2. **The Clash (Head-to-Head Elimination):** The app presents two items side-by-side. Tap the one you are in the mood for.
3. **Instant Winner Selection:** The algorithm narrows down your preferences through successive rounds until a clear winner is crowned.
4. **Install as a Native App:** Tap "Add to Home Screen" on iOS or Android to launch the app full-screen anytime, completely offline-ready.

---

## ✨ Key Features

* **Installable PWA Experience:** Native full-screen feel on mobile with zero app store downloads, featuring custom adaptive icon masking.
* **Bespoke UI Design:** A modern, warm-toned interface designed from scratch—moving away from generic default UI templates.
* **Fluid Animations:** Smooth card transitions and micro-interactions powered by Framer Motion.
* **Mobile-First & Responsive:** Optimized for tap targets and single-handed mobile navigation while scaling seamlessly to desktop.
* **Local Persistence:** Your backlog stays saved locally on your device so you never lose your list.

---

## 🛠️ Technical Stack

* **Framework:** React 18
* **Language:** TypeScript
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Hosting & CI/CD:** Vercel

---

## 🚀 Local Setup & Installation

If you would like to run this project locally on your machine:

```bash
# 1. Clone the repository
git clone [https://github.com/YOUR_GITHUB_USERNAME/watch-clash.git](https://github.com/YOUR_GITHUB_USERNAME/watch-clash.git)

# 2. Navigate into the directory
cd watch-clash

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
