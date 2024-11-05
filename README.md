
# Ticket Management Dashboard

This project is a Ticket Management Dashboard built with React. It allows users to manage and view tickets, categorized by status, priority, and user assignments. Users can sort and group tickets dynamically and see detailed ticket information.


## Overview

The Ticket Management Dashboard displays a list of tickets fetched from an external API. Users can group tickets by **status**, **assigned user**, or **priority**. Sorting options allow tickets to be ordered by title or priority. This application is styled using custom CSS and maintains state using React's built-in `useState` and `useEffect` hooks.

## Features

- **Group Tickets**: Organize tickets by status, assigned user, or priority.
- **Sort Tickets**: Sort tickets by title or priority.
- **Dynamic Rendering**: Components dynamically update based on selected grouping and sorting options.
- **Persistent Group Selection**: The selected grouping is saved in `localStorage` and restored on page load.
- **Responsive Design**: CSS styling for consistent and user-friendly interface across devices.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/aryankshl/Ticket-Management-Dashboard.git
   cd ticket-management-dashboard
