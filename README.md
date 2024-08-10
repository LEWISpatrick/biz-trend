# BizTrend

Welcome to **BizTrend**! 🚀

## About

BizTrend is a powerful tool that helps you evaluate and refine your business ideas. Created by Patrick, a 14-year-old developer, BizTrend integrates Google Trends and OpenAI to deliver comprehensive insights into your product ideas.

## Features

- **Idea Evaluation**: Input your product idea, and BizTrend uses Google Trends to analyze how popular the idea is and provide a trend graph.
- **Report Generation**: Get a detailed report on your business idea, including its potential market demand and areas for improvement.
- **Tweet Creation**: Automatically generates a Twitter post to solicit feedback from the public about your business idea.
- **Data Visualization**: Displays a graph illustrating the trend of your idea's popularity over time.

## How It Works

1. **Enter Your Idea**: Provide a brief description of your product idea.
2. **Analyze Trends**: BizTrend fetches data from Google Trends to gauge the interest in your idea.
3. **Generate Report**: A comprehensive report is created, offering insights and suggestions for improvement.
4. **Create Tweet**: A Twitter post is automatically generated to gather public opinions.
5. **View Graph**: See a visual representation of your idea’s trend over time.

## Technologies Used

- **Google Trends API**: For trend data analysis.
- **OpenAI**: To generate reports and tweets.
- **Chart.js**: For data visualization.

## Getting Started

To get started with BizTrend, follow these steps:

1. **Clone the Repository**:
# BizTrend

Welcome to **BizTrend**! 🚀

## About

BizTrend is a powerful tool that helps you evaluate and refine your business ideas. Created by Patrick, a 14-year-old developer, BizTrend integrates Google Trends and OpenAI to deliver comprehensive insights into your product ideas.

## Features

- **Idea Evaluation**: Input your product idea, and BizTrend uses Google Trends to analyze how popular the idea is and provide a trend graph.
- **Report Generation**: Get a detailed report on your business idea, including its potential market demand and areas for improvement.
- **Tweet Creation**: Automatically generates a Twitter post to solicit feedback from the public about your business idea.
- **Data Visualization**: Displays a graph illustrating the trend of your idea's popularity over time.

## How It Works

1. **Enter Your Idea**: Provide a brief description of your product idea.
2. **Analyze Trends**: BizTrend fetches data from Google Trends to gauge the interest in your idea.
3. **Generate Report**: A comprehensive report is created, offering insights and suggestions for improvement.
4. **Create Tweet**: A Twitter post is automatically generated to gather public opinions.
5. **View Graph**: See a visual representation of your idea’s trend over time.

## Technologies Used

- **Google Trends API**: For trend data analysis.
- **OpenAI**: To generate reports and tweets.
- **Chart.js**: For data visualization.

## Getting Started

To get started with BizTrend, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/your-username/biztrend.git
    ```

2. **Navigate to the Project Directory**:

    ```bash
    cd biztrend
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```
4. **Run the Application**:

    ```bash
    npm run database
    ```
5. **Run the Application**:

```bash
# Using npm
npm run dev

# Using pnpm
pnpm run dev

# Using yarn
yarn run dev

# Using bun
bun run dev
```

It should output something like this:

```bash
  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Starting...
  ✓ Ready in 2.4s
```

If this is the case, you can just **CTRL** + **Click** on http://localhost:3000, or manually opening it on your browser.

If this is not the case, make sure you didn't miss any of the steps before. If the error persists and you don't know what to do, open an issue [here](https://github.com/NizarAbiZaher/nizzy-starter/issues).

### That's it!

You should now be able to edit and change whatever you'd like, if you are having trouble with specific libraries, make sure to check out the respective documentation and properly research about the issue.

Make sure you remove the Alert at the top if you intend to use this starter kit. To do so go to `app/layout.tsx` and remove the `<AlertDemo />` component (you may also delete it from `components/alert.tsx`).

### Theme configuration

The project is theme based, which means it is based on one color for the entire thing. The theme color is [Vivid blue](https://www.colorhexa.com/1f8eef) and it's defined in HSL.

You can find the theme colors in `app/globals.css`. To change the main theme color replace the `--primary` with HSL or RBG, without comas seperating them (I'm not sure if it is possible to use other color models, but feel free to try it out).

Here is how you can do it using CSS variables:

```css
/* Using HSL */
--primary: 208 87% 53%; /* Background colors, borders,... */
--primary-foreground: 0 0% 0%; /* Foreground in buttons */

/* Using RBG Decimal */
--primary: 31 142 239;
--primary-foreground: 0 0 0;

/* Using RBG Percent */
--primary: 12.2% 55.7% 93.7%;
--primary-foreground: 0% 0% 0%;
```

Here's how you can change the `tailwind.config.ts` file to the color model you want to use:

```ts
// Using HSL
primary: {
  DEFAULT: 'hsl(var(--primary))',
  foreground: 'hsl(var(--primary-foreground))'
},

// Using RGB Decimal/Percent
primary: {
  DEFAULT: 'rgb(var(--primary))',
  foreground: 'rgb(var(--primary-foreground))'
},
```

The `tailwind.config.ts` file doesn't only have the content above, so find the matching code and update accordingly.

The reason for the colors not being defined like `hsl(208, 87%, 53%)` is because the project uses tailwind for styling, and with the current definition we can control the alpha within the class, for example `bg-primary/20` (this will make the primary color have an alpha value of 0.2).

If you do change the main color please consider changing the `--primary-foreground` as well, since it is currently a shade of white and it might not look good on the color you chose.

### Aditional information

SaaS Starter Kit Author: NizarAbiZaher

#### Special thanks to all the contributors below:

- [dpaulos6](https://github.com/dpaulos6) - *README, Theme Config and UI*

### Socials

- [YouTube](https://www.youtube.com/@NizzyABI)
- [GitHub](https://github.com/NizarAbiZaher)
- [Discord Community](https://discord.com/invite/nizar)
