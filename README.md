# Timeline App

## Overview

This project is a timeline visualization application that allows users to view and interact with items arranged on a timeline. The timeline is designed to be compact and space-efficient, displaying items in horizontal lanes based on their start and end dates.

## Features

- **Compact Lane Arrangement**: Items are displayed in lanes, sharing space when they do not overlap in time.
- **Inline Editing**: Users can edit the names of timeline items directly on the timeline.
- **Zooming**: Users can zoom in and out to view items in more detail or get an overview.
- **Drag and Drop**: Users can change the start and end dates of items by dragging and dropping them along the timeline.

## Implementation Details

### What I Like About My Implementation

I appreciate the clean separation of concerns in the code structure. Each component has a specific responsibility, making the codebase easier to maintain and extend. The use of functional components and hooks in React enhances the readability and performance of the application.

### What I Would Change If I Were Going to Do It Again

If I had more time, I would improve the visual user experience, making the timeline more attractive and intuitive. I would add features such as zoom in and out on the timeline, options to change the dates and names of items directly, and implement a color scheme and legend to easily identify delays. Additionally, I would make the codebase even more componentized and better separated, ensuring greater scalability and maintainability.

### Design Decisions

The design of the timeline was inspired by various existing timeline libraries, focusing on usability and visual clarity. I aimed to create a user-friendly interface that allows for easy interaction with the timeline items. The decision to use React was based on its component-based architecture, which aligns well with the requirements of this project.

### Testing Strategy

If I had more time, I would implement unit tests for the components and the lane assignment logic to ensure that they function correctly. I would also conduct user testing to gather feedback on the usability of the timeline and make iterative improvements based on that feedback.

## Getting Started

To run this project locally, follow these steps:

1. Navigate to the project directory.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to initialize and connect to a node server with your default browser.
4. Develop in your own local environment.

## Acknowledgments

This project was developed as part of an assignment to create a timeline visualization component. Special thanks to the resources and libraries that inspired the implementation.