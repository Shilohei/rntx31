# Revenant Xspark Website

## Project Overview
This is the official website for Revenant Xspark, a premier esports organization. The website showcases our teams, achievements, and provides information about our organization.

## Features
- Responsive design with Tailwind CSS
- Smooth scrolling navigation
- Team rosters and tournament results
- Contact form integration
- Supabase backend for data management

## Installation
1. Clone the repository
   ```bash
   git clone..
2. Navigate to the project directory
   ```bash
   cd revenant-xspark
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Create a `.env` file with your Supabase credentials
   ```
   REACT_APP_SUPABASE_URL=your-supabase-url
   REACT_APP_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

## Available Scripts
- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects the app from Create React App

## Project Structure
```
src/
├── components/            # React components
│   ├── Navbar.js          # Navigation bar
│   ├── HeroSection.js     # Hero section
│   ├── AboutSection.js    # About section
│   ├── BGMISection.js     # BGMI team section
│   ├── ValorantSection.js # Valorant team section
│   ├── PokemonUniteSection.js # Pokemon Unite section
│   ├── FamilySection.js   # Organization members
│   └── ContactSection.js  # Contact form
├── supabaseClient.js      # Supabase client configuration
└── index.css              # Tailwind CSS and custom styles
```

## Component Details
### Navbar.js
Responsive navigation bar with smooth scrolling to sections

### HeroSection.js
Introduction section with team logo and social media links

### AboutSection.js
Information about the organization and its values

### BGMISection.js
BGMI team roster and tournament results

### ValorantSection.js
Valorant team information and agent specialties

### PokemonUniteSection.js
Pokemon Unite team details and recent matches

### FamilySection.js
Organization members with role-based filtering

### ContactSection.js
Contact form with email and social media links

## Supabase Integration
The project uses Supabase for:
- Storing team member information
- Managing tournament results
- Handling contact form submissions

## Deployment
1. Build the project
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your hosting provider

For more details, visit our [official documentation](#).
