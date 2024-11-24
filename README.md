# LiquidInsights Project Rebuild Plan
Liquidinsightsai.com is a purchased domain name and will be used for hosting after website rebuild

## Project Context
- **Original Project**: Website for AI Tools and upcomingConferences Directory and an insights news section
- **Current State**: In transition for rebuild
- **Target Framework**: Astro
- **Deployment**: Will be hosted on GitHub Pages with custom domain
- **Content Management**: TinaCMS will be used for content management
- **TypeScript**: Will be used for type safety
- **GitHub Pages**: Will be used for deployment
- **Custom Domain**: Will be used for hosting

## Project Goals
1. Create a new project using Astro framework
2. Integrate TinaCMS for content management
3. Create a new TinaCMS schema
4. build entire project for user
5. easy customization without code changes
6. extensions to help with making customization easier

## User experience
1. Beginner: Easy to navigate, easy to find what they are looking for
2. suggest new extensions if it makes customization easier for the user

## Project Structure
└──src
│   └── pages
│       ├── ai-tools
│       ├── blog
│       ├── conferences
│       ├── insights
│       ├── index.astro
│       └── _redirects
│   └── layouts
│       ├── BaseLayout.astro
│       └── _default.astro
│   └── styles
│       ├── global.css
│       └── variables.css
├── backup
│   ├── ai-tools
│   ├── blog
│   ├── conferences
│   ├── insights
│   ├── index.astro
│   └── _redirects
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── .gitattributes
├── README.md

## Technical Decisions Made
1. **Framework Choice**: 
   - Moving to Astro framework
   - Will integrate TinaCMS for content management
   - TypeScript will be used for type safety

2. **Deployment Choice**: 
   - Will be hosted on GitHub Pages with custom domain
   
2. **Key Requirements**:
  easy customization without code changes
  tinacms for content management
  github pages for deployment

3. **TinaCMS Schema**: 
   - Will create a new TinaCMS schema for content management

4. **Custom Domain**: 
   - Will be used for hosting

5. **GitHub Pages**: 
   - Will be used for deployment

6. **TypeScript**: 
   - Will be used for type safety
