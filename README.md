## KilatTour
Kilat Tour is a widget designed to provide an interactive product tour for your Mendix applications.

With the help of [Driver.js](https://github.com/kamranahmedse/driver.js), this widget allows you to guide users step-by-step through your application, providing information about key features and functionalities.

## Features
- Animated tours with smooth scrolling
- Customizable overlay color and opacity
- Keyboard navigation support
- Step-by-step guided tour with customizable steps
- Floating button for activating the guide
- Customizable popovers for each step

## Usage
### 1. Place the Widget
Add the **Kilat Tour** widget to any relevant page in your Mendix application where a guided tour would benefit users.

### 2. Configure Tour Steps
Define each tour step by setting the following attributes in the widget properties:
- **Classname**: CSS class of the DOM element to highlight.
- **Title**: Title text for the popover at this step.
- **Description**: Detailed guidance text for the popover.
- **Position**: Position of the popover (e.g., `top`, `bottom`).
- **Alignment**: Alignment relative to the target element (e.g., `start`, `center`, `end`).

### 3. Add Custom Attributes
Add any additional attributes needed within the widget’s properties, such as **Overlay Color**, **Next Button Text**, or **Animate**.

## Demo project
[Demo link](https://kilatwidget-sandbox.mxapps.io/)