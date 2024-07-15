# Santi Tabbach's Portfolio

**Welcome to my portfolio repository!**

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contribution](#contribution)
- [License](#license)
- [Author](#author)

## Introduction

This project is my personal portfolio website. It is designed to present my skills and experience as a developer, showcase my work experience, personal projects, resume, and more.

## Features

- Personal introduction and professional background
- Display of work experience
- Showcase of personal projects
- Detailed and downloadable resume
- Multilingual support with i18next

## Technologies Used

- **React**
- **Vite**
- **styled-components**
- **Docker**
- **Nginx**
- **ESLint**
- **TypeScript**
- **i18next**

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).
- **Yarn**: Isn't mandatory but recommended to use Yarn as the package manager. Install it from [Yarn](https://classic.yarnpkg.com/en/docs/install).

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

## Usage

This is a single-page application with no interactive functionality. It's designed to just provide information about me as a developer.

## Project Structure

```
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── i18n.ts
├── index.html
├── locales
│   ├── en
│   │   └── translation.json
│   └── es
│       └── translation.json
├── nginx.conf
├── package-lock.json
├── package.json
├── public
│   └── santi-memoji.svg
├── robots.txt
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── avatars
│   │   │   ├── ...
│   │   └── icons
│   │       ├── DownloadFileIcon.tsx
│   │       ├── settings
│   │       │   ├── ...
│   │       │   └── index.ts
│   │       ├── socialMedia
│   │       │   ├── ...
│   │       │   └── index.ts
│   │       └── technologies
│   │           ├── ...
│   │           └── index.ts
│   ├── components
│   │   ├── common
│   │   │   ├── baseList
│   │   │   │   ├── BaseList.tsx
│   │   │   │   └── components
│   │   │   │       ├── BaseListElement.tsx
│   │   │   │       └── StyledBaseListElement.ts
│   │   │   ├── glassBox
│   │   │   │   ├── GlassBox.tsx
│   │   │   │   └── StyledGlassBox.ts
│   │   │   ├── index.ts
│   │   │   ├── link
│   │   │   │   ├── Link.tsx
│   │   │   │   └── StyledLink.ts
│   │   │   ├── section
│   │   │   │   ├── Section.tsx
│   │   │   │   └── StyledSection.tsx
│   │   │   └── typography
│   │   │       ├── StyledTypography.ts
│   │   │       └── Typography.tsx
│   │   ├── commonStyled
│   │   │   ├── StyledAvatar.ts
│   │   │   ├── StyledBold.ts
│   │   │   ├── StyledDescription.ts
│   │   │   ├── StyledListWrapper.ts
│   │   │   ├── StyledTag.ts
│   │   │   └── index.ts
│   │   ├── downloadButton
│   │   │   ├── DownloadButton.tsx
│   │   │   └── StyledDownloadButton.tsx
│   │   ├── index.ts
│   │   ├── layout
│   │   │   ├── content
│   │   │   │   ├── Content.tsx
│   │   │   │   └── StyledContent.ts
│   │   │   ├── header
│   │   │   │   ├── Header.tsx
│   │   │   │   └── StyledHeader.ts
│   │   │   └── index.ts
│   │   ├── sections
│   │   │   ├── index.ts
│   │   │   ├── mediumPosts
│   │   │   │   ├── MediumPosts.tsx
│   │   │   │   ├── components
│   │   │   │   │   └── PostListItem.tsx
│   │   │   │   └── helper
│   │   │   │       └── const.ts
│   │   │   ├── presentation
│   │   │   │   └── Presentation.tsx
│   │   │   ├── projects
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── assets
│   │   │   │   ├── components
│   │   │   │   │   ├── ProjectListItem.tsx
│   │   │   │   │   └── StyledProjectListItem.ts
│   │   │   │   └── helper
│   │   │   │       └── consts.ts
│   │   │   ├── technologies
│   │   │   │   ├── StyledTechnologies.ts
│   │   │   │   └── Technologies.tsx
│   │   │   └── workExperiencie
│   │   │       ├── WorkExperience.tsx
│   │   │       ├── components
│   │   │       │   ├── ExperienceItem.tsx
│   │   │       │   └── StyledExperienceItem.ts
│   │   │       └── consts.ts
│   │   ├── settings
│   │   │   ├── Settings.tsx
│   │   │   └── StyledSettings.ts
│   │   └── socialMedia
│   │       ├── SocialMedia.tsx
│   │       └── StyledSocialMedia.ts
│   ├── consts.ts
│   ├── hooks
│   │   └── useTranslation.ts
│   ├── index.css
│   ├── main.tsx
│   ├── models
│   │   ├── MediumPost.ts
│   │   ├── Projects.ts
│   │   ├── Theme.ts
│   │   ├── WorkExperience.ts
│   │   └── index.ts
│   ├── resources
│   │   └── resume.pdf
│   ├── theme
│   │   ├── GlobalStyles.ts
│   │   ├── Theme.ts
│   │   └── hooks
│   │       └── useTheme.tsx
│   ├── utils
│   │   ├── storage.ts
│   │   └── utils.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Contribution

This is an open but personal project. Feel free to fork the repository and make improvements. If you wish to contribute, please submit a pull request. **I will appreciate your feedback and suggestions.**

## License

Distributed under the MIT License. See LICENSE for more information.

## Author

**Santi Tabbach**

- [LinkedIn](https://www.linkedin.com/in/santiago-tabbach/)
- Email: tabbach97@gmail.com
