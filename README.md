# Liquid Insights

A modern, customizable website for AI Tools, Conferences, and Industry Insights built with Astro and TinaCMS.

## Features

- **Easy Customization**
  - Site-wide configuration in `src/config/site.ts`
  - Theme support (light/dark mode)
  - CSS variables for easy styling
  
- **Modern Design**
  - Responsive layout
  - Beautiful UI components
  - Smooth animations
  - TailwindCSS for styling
  
- **Performance**
  - Built with Astro for optimal performance
  - Static site generation
  - Fast page loads
  
- **Content Management**
  - TinaCMS integration (coming soon)
  - Markdown support
  - Easy content updates

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

### Site Configuration

Edit `src/config/site.ts` to customize:
- Site details (name, description, URL)
- Navigation links
- Social media links
- SEO settings
- Theme settings

### Styling

1. **Theme Colors**: Edit CSS variables in `src/styles/global.css`
2. **Components**: Modify Tailwind classes in component files
3. **Layout**: Adjust layout in `src/layouts/BaseLayout.astro`

### Content

Each section has its own directory in `src/pages`:
- `/ai-tools` - AI Tools directory
- `/conferences` - Upcoming conferences
- `/insights` - Industry news and insights
- `/blog` - Blog posts

## Project Structure

```
src/
├── components/       # Reusable UI components
├── config/          # Site configuration
├── layouts/         # Page layouts
├── pages/          # Route pages
├── styles/         # Global styles
└── types/          # TypeScript types
```

## Development

1. **Local Development**
   - Run `npm run dev`
   - Visit `http://localhost:3000`
   - Changes will hot-reload

2. **Testing**
   - Components are easily testable
   - Live preview available

3. **Deployment**
   - Automatic deployment via GitHub Actions
   - Hosted on GitHub Pages

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own website!
