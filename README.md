
## Prerequisites

To run this project, you need to have the following tools installed on your system:

1. **Node.js and npm (Node Package Manager)**: You can download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Sass**: We'll use the npm package to install Sass.

## Getting Started

### 1. Install Node.js and npm

Download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm.

To verify the installation, open your terminal or command prompt and run:

```sh
node -v
npm -v

```

### 2. Install Sass

You can install Sass globally on your system using npm. Open your terminal or command prompt and run:

```sh
npm install -g sass
```

### 3. Compile SCSS to CSS

To compile the SCSS file (scss/styles.scss) into CSS (css/styles.css), run the following command:
You can set Sass to automatically recompile your SCSS files whenever you make changes. This is useful during development:

```sh
sass --watch scss/styles.scss css/styles.css
```

### 4. Open index.html

Open index.html in your web browser to view your portfolio website.