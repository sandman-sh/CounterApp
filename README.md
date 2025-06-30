# CounterApp

A simple and interactive counter application built with HTML, CSS, and JavaScript. Features a modern UI with customizable themes and smooth animations.

![CounterApp Screenshot](screenshot/image.png)

![CounterApp Preview](https://img.shields.io/badge/Live-Demo-brightgreen) ![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)

## 🌟 Features

- **Increment/Decrement Counter**: Simple plus and minus buttons to control the count
- **Reset Functionality**: Reset the counter to zero with a single click
- **6 Customizable Themes**: Choose from 6 different color themes
  - Black (Default)
  - White
  - Purple
  - Yellow Green
  - Maroon
  - Grey
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Hover effects and transitions for better user experience
- **Custom Font**: Uses a custom font for enhanced visual appeal
- **Info Panel**: Built-in help section explaining how to use the app

## 🚀 Live Demo

**[Try the CounterApp Live](https://counterapp0x.netlify.app/)**

## 📁 Repository

**[View Source Code](https://github.com/sandman-sh/CounterApp.git)**

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Custom properties (CSS variables)
  - Flexbox for layout
  - CSS Grid for responsive design
  - Custom fonts
  - Smooth transitions and animations
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Theme switching functionality
  - Local state management

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sandman-sh/CounterApp.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd CounterApp
   ```

3. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

## 🎮 How to Use

### Basic Counter Operations
- **➕ Plus Button**: Click to increase the count by 1
- **➖ Minus Button**: Click to decrease the count by 1
- **🔄 Reset Button**: Click to reset the counter to 0

### Theme Customization
1. Click the **⚙️ Settings** button (gear icon) in the top navigation
2. Choose from 6 available themes by clicking on the numbered buttons
3. Click the **❌ Close** button to exit the theme selector

### Information Panel
- Click the **ℹ️ Info** button (info icon) to view usage instructions
- Click the **❌ Close** button to exit the info panel

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

The layout automatically adjusts based on screen size, ensuring a great user experience across all devices.

## 🎨 Theme Options

| Theme | Preview | Description |
|-------|---------|-------------|
| Theme 1 | Black | Default dark theme with white text |
| Theme 2 | White | Light theme with black text |
| Theme 3 | Purple | Purple background with white text |
| Theme 4 | Yellow Green | Bright yellow-green theme |
| Theme 5 | Maroon | Deep maroon theme |
| Theme 6 | Grey | Neutral grey theme |

## 🔧 Customization

### Adding New Themes
To add a new theme, modify the CSS file:

1. Add a new theme class in `style.css`:
   ```css
   .theme-yourcolor {
     background-color: yourcolor;
     color: white;
   }
   ```

2. Add the theme button in `index.html`:
   ```html
   <button class="themes-btn theme-yourcolor">7</button>
   ```

3. Update the JavaScript theme handling in `script.js`

### Modifying Colors
All theme colors are defined in the CSS file and can be easily customized by changing the `background-color` and `color` properties.

## 📄 File Structure

```
CounterApp/
├── index.html          # Main HTML file
├── style.css           # Styles and themes
├── script.js           # JavaScript functionality
├── fonts/
│   └── counterFont.ttf # Custom font file
├── images/
│   └── icon.png        # App icon
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**sandman-sh**
- GitHub: [@sandman-sh](https://github.com/sandman-sh)

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Netlify for hosting the live demo
- The open-source community for inspiration and support

---

⭐ **Star this repository if you found it helpful!** 
