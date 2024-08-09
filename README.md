# X Empire Telegram Game Bot

This repository contains scripts for automating the X Empire game on Telegram using Tampermonkey. The scripts are developed by the SmartBot Team and are designed to run the game in your browser and automate the clicking process to collect points.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Installation

To get started with the TapSport Telegram Game Bot, follow these steps:

### Step 1: Install Tampermonkey

Tampermonkey is a popular userscript manager that is available for various browsers. Install Tampermonkey for your browser from the following link:

- [tampermonkey.net](https://www.tampermonkey.net/)

### Step 2: Install the Scripts

1. **telegram.user.js**: This script enables the game to run in your browser.

   - Click the following link to install the script: [Install telegram.user.js](https://raw.githubusercontent.com/SmartBotBlack/telegram-web-fix-for-open-app/main/src/telegram.user.js)
   - Tampermonkey will open and prompt you to install the script. Click `Install`.

2. **x-empire.user.js**: This is the main bot script that automates the game.

   - Click the following link to install the script: [Install x-empire.user.js](https://raw.githubusercontent.com/SmartBotBlack/x-empire-bot/main/src/x-empire.user.js)
   - Tampermonkey will open and prompt you to install the script. Click `Install`.

## Usage

After installing the scripts, follow these steps to start using the bot:

1. Open Telegram Web in your browser.
2. Navigate to the X Empire game.
3. Open DevTools. For Chrome 	`Ctrl + Shift + J` or `Cmd + Option + J`.
4. Toggle device toolbar and select iPhone 14.
4. Start the bot in your browser.
5. The bot will begin clicking on the Musk and collecting points.

## Scripts

### telegram.user.js

This script is necessary to initiate the Mini App in your browser. It ensures that the game runs correctly and interacts with the browser environment.

### src/x-empire.user.js

This script automates the gameplay by clicking on images and collecting points. It simulates user actions to enhance your gaming experience.

## Contributing

We welcome contributions to improve the X Empire Telegram Game Bot. If you have any suggestions or encounter any issues, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Disclaimer

This script is provided by the SmartBot Team and is intended for educational and personal use only. Use it at your own risk.

---

For more information, visit [SmartBot Team](https://smartbot.black/).
