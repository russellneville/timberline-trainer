# Timberline Trail Quiz ⛷️

An interactive quiz application to help you learn and memorize the ski runs, lifts, and geographic features at [Timberline Lodge](https://timberlinelodge.com/) on Mt. Hood, Oregon.

> **Note:** This app was created to support MHSP (Mt. Hood Ski Patrol) Apprentice Hosts in studying and learning the Timberline terrain.

## Features

- 🎯 **Interactive Quiz** – Test your knowledge of 58 runs, lifts, and geographic landmarks
- 🗺️ **Visual Learning** – Study with labeled map images directly in the app
- 📊 **Progress Tracking** – See your score and track which answers were correct/incorrect
- 🎉 **Pass/Fail Feedback** – Requires 80% to pass, with celebratory animations on success
- 🔀 **Randomized Questions** – Each quiz presents questions in a random order
- 📱 **Responsive Design** – Works on desktop and mobile devices

## How to Use

### Starting the Quiz

1. Open `index.html` in your web browser
2. Enter the number of questions you want (1-58, default is 10)
3. Click **Start Quiz**

### Taking the Quiz

- You'll see a map with numbered/lettered markers alongside the feature name
- Type the **map ID** (number or letter) for each feature shown
- Navigate between questions using:
  - The **← →** arrow buttons
  - Your keyboard's **left/right arrow keys**
  - Press **Enter** to advance to the next question
- On the final question, click **Score Test** to see your results

### Viewing the Reference Map

- **Hover** over the **Reference Map** button to temporarily show the labeled trail map
- **Click** the button to open a full interactive map viewer in a new window
- The map viewer supports zoom (scroll wheel, +/- keys) and panning (drag)

### Results

- See your total score and percentage
- Review each answer with ✓ (correct) or ✗ (incorrect) marks
- For wrong answers, the correct map ID is displayed
- Score 80% or higher to pass!

## Quiz Content

The quiz covers 58 features from the Timberline trail system, including:

| Type | Examples |
|------|----------|
| **Geographic Features** | Illumination Rock, Silcox Hut, Phlox Point Cabin |
| **Canyons/Rivers** | Salmon Canyon, White River, Big Zig Zag |
| **Ski Lifts** | Palmer, Magic Mile, Jeff Flood, Bruno's Lift |
| **Ski Runs** | Schoolyard, Pucci, Kruser, Paintbrush, Glade |

See `run-key.csv` for the complete list of features and their map IDs.

## Files

| File | Description |
|------|-------------|
| `index.html` | Main quiz application page |
| `app.js` | Quiz logic, state management, and interactivity |
| `styles.css` | Styling and animations |
| `map-viewer.html` | Full-screen interactive reference map viewer |
| `run-key.csv` | Complete list of map IDs and feature names |
| `timberline-map-test.png` | Quiz map with numbered/lettered markers |
| `timberline_winter_trail_map.png` | Official labeled trail map for reference |

## Running Locally

Simply open `index.html` in any modern web browser. No server or build process required.

```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

## License

This project is open source. See the [LICENSE](LICENSE) file for details.

## Attribution

All trail map images are the property of [Timberline Lodge](https://timberlinelodge.com/). View the [Official Trail Map (PDF)](https://timberlinelodge.com/site/assets/files/6776/timberline_winter_trail_map.pdf).
