# KEYINFO

A lightweight, real-time keyboard event information display tool that captures and displays detailed data about every key pressed on your keyboard.

## Overview

KEYINFO is a sleek, developer-friendly web application that provides instant insight into JavaScript keyboard events. Whether you're debugging input behavior, building keyboard shortcuts, testing accessibility features, or learning how browsers interpret keystrokes, this tool gives you complete visibility into every keystroke.

## Features

- **Real-time Key Detection** - Instantly displays information as you press any key
- **Detailed Event Information** - Shows multiple keyboard event properties:
  - **Key** - The actual character or name of the key pressed
  - **Code** - The standardized code identifier for the key
  - **Location** - The physical location of the key (standard, left, right, numpad)
  - **Which** - The numeric keyCode value (legacy property)
- **Click-to-Copy** - Easily copy any displayed value to your clipboard
- **Responsive Design** - Works seamlessly on all devices
- **Modern UI** - Clean, monospace-based interface for easy readability

## How to Use

1. Open the application in your web browser
2. Press any key on your keyboard
3. The card display will instantly update with the event information
4. Click on any card to copy the value to your clipboard

## Project Structure

```
keyinfo/
├── index.html      # Main HTML file with card layout
├── app.js          # JavaScript keyboard event handler
├── styles.css      # Styling with monospace font
├── README.md       # This file
└── resources/      # Images and assets (favicon, logo)
```

## Technical Details

- Built with vanilla JavaScript (no frameworks required)
- Uses the `keydown` event listener for real-time capture
- Displays W3C standard keyboard event properties
- Lightweight and performance-optimized

## Live Demo

Visit the project at: https://mesh7.github.io/keyinfo/

## Browser Compatibility

Works on all modern browsers that support:

- ES6 JavaScript
- DOM API
- Clipboard API
