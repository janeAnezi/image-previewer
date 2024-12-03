# Image Previewer 
The project includes features like slideshow controls, navigation buttons, sliding animations, and a responsive layout styled with Tailwind CSS.

1. Project Setup
*** Create a React + Vite App ***
- npm create vite@latest image-previewer --template react

*** Navigate into the project directory ***
- cd image-previewer

*** Install dependencies ***
- Install Tailwind CSS and its dependencies:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init
- Configure the tailwind.config.js file:

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

@tailwind base;
@tailwind components;
@tailwind utilities;
Import the CSS file in main.jsx:


2. Project Structure

image-previewer/
├── src/
│   ├── components/
│   │   ├── AutoPlay.jsx
│   │   ├── ImageStack.jsx
│   │   └── ImageViewer.jsx
│   ├── constants/
│   │   └── index.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
└── package.json

3. Implementation Details
Step 1: Add Image Assets
- Create a src/constants/index.js file to store image paths:
export const images = [
  '/path/to/image1.jpg',
  '/path/to/image2.jpg',
  '/path/to/image3.jpg',
];
Step 2: Build Components
*** The main component orchestrates state and renders child components. ***
Manages:
- currentIndex: Tracks the active image.
- isPlaying: Toggles slideshow mode.
- slideDirection: Determines animation direction.
*** ImageViewer Component ***
- Displays the current image with slide animations.
- Applies slide-in-right or slide-in-left classes dynamically.
*** AutoPlay Component ***
- Toggles play/pause for the slideshow.
- Highlights active state using animations.
*** ImageStack Component *** 
- Displays clickable image thumbnails for quick navigation.
- Highlights the selected image with a border.
Step 3: Add Animations
- Add animations for slide effects in css

Step 4: Styling
- Use Tailwind CSS classes to style components

4. Testing the Application
Run the App
Start the development server:
- npm run dev
Verify Features
- Navigate through images using left/right buttons.
- Click thumbnails to view specific images.
- Play/pause the slideshow with the toggle button.
- Ensure animations work for all image transitions.
