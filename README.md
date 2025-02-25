# Data-Driven Crop Success Calculator

This is a tool developed during a hackathon to predict the success rate of various crops based on environmental and managerial factors. The tool allows users to input soil type, climate type, crop type, and management baseline to receive an estimated crop success percentage.

## Deployed Site
[Comprehensive Crop Success Predictive Web Tool](https://logannitzsche.com/Comprehensive-Crop-Success-Predictive-Web-Tool)


## Features

- **Interactive Inputs**: Users can choose from multiple soil types, climates, crop types, and management practices.
- **Real-Time Calculations**: Upon input selection, the tool calculates and displays the predicted success rate of the chosen crop.
- **Dynamic UI**: The background colors adjust dynamically to reflect the selected soil and climate types.

## Technologies Used

- **JavaScript**: Core logic for calculating crop success rates based on weighted factors such as soil texture, pH, climate, and management.
- **HTML & CSS**: Structure and style for the user interface, including color changes to indicate selected inputs (e.g., different soil types and climates).

## How It Works

1. **Input Selection**:
   - Choose from the dropdown menus to specify:
     - Soil type (clay, sand, silty, etc.)
     - Climate type (arid, temperate, tropical, etc.)
     - Management type (bad, sustainable, average, etc.)
     - Crop type (wheat, rice, corn, etc.)
     
2. **Calculate Success**:
   - After selections are made, the tool uses predefined weights for factors like soil texture, pH, and management to calculate a crop success percentage.
   - The success percentage is displayed in the UI, reflecting the suitability of the selected crop for the chosen environmental conditions.

3. **Reset Functionality**:
   - The reset button clears the displayed result, allowing users to make new selections.
