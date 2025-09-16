# Interactive Graphs Dashboard

A beautiful, responsive website featuring interactive data visualizations using Chart.js. This project demonstrates various types of graphs including line charts, bar charts, pie charts, and scatter plots.

## Features

- **Multiple Chart Types**: Line, Bar, Pie, Doughnut, and Scatter plots
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth section transitions with animated charts
- **Real-time Data**: Sample datasets for immediate visualization
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Easy to Customize**: Well-structured code for easy modifications

## Project Structure

```
graphs/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Responsive styling
├── js/
│   └── graphs.js       # Chart configurations and interactivity
├── data/
│   └── sample-data.json # Additional datasets
└── README.md           # This file
```

## Quick Start

1. **Clone or download** this project to your local machine
2. **Open** `index.html` in any modern web browser
3. **Explore** the different chart types using the navigation buttons

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Chart Types Included

### Line Charts
- **Sales Performance**: Monthly sales data with trend visualization
- **Temperature Trends**: Weekly temperature variations

### Bar Charts
- **Quarterly Revenue**: Business performance by quarter
- **Population Data**: Country-wise population comparison

### Pie/Doughnut Charts
- **Market Share**: Browser usage statistics
- **Budget Allocation**: Company budget distribution

### Scatter Plots
- **Correlation Analysis**: Height vs Weight relationship

## Customization Guide

### Adding New Charts

1. **Add HTML Canvas**: Add a new `<canvas>` element in the appropriate section
2. **Configure Data**: Add your dataset to the `sampleData` object in `graphs.js`
3. **Create Chart Config**: Add a new configuration to the `chartConfigs` object
4. **Initialize Chart**: Add the initialization code in the `initCharts()` function

### Changing Colors

Modify the color schemes in `graphs.js`:
```javascript
backgroundColor: 'rgba(102, 126, 234, 0.8)',
borderColor: 'rgb(102, 126, 234)',
```

### Adding New Data

Update the `sample-data.json` file with your datasets, then reference them in `graphs.js`.

## API Integration

The project includes placeholder API endpoints in `sample-data.json` for future backend integration:
- `/api/charts/:chartId` - Get chart data
- `/api/charts/:chartId/update` - Update chart data
- `/api/charts/:chartId/export` - Export chart as image

## Performance Optimizations

- **Lazy Loading**: Charts are initialized only when needed
- **Responsive Resizing**: Automatic chart resizing on window resize
- **Efficient Rendering**: Uses Chart.js optimizations for smooth animations

## Future Enhancements

- [ ] Real-time data updates via WebSocket
- [ ] Chart export functionality (PNG, PDF)
- [ ] Data filtering and search
- [ ] Dark mode toggle
- [ ] Chart customization panel
- [ ] Multiple dataset comparison

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests!
