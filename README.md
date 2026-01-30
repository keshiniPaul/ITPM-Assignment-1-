# ITPM-Assignment-1-
Playwright automation project for IT3040 – ITPM Assignment 1. Tests the accuracy and robustness of the SwiftTranslator Singlish-to-Sinhala conversion system, including positive, negative, and UI test scenarios. Includes an Excel file documenting test cases and a README with setup instructions.

## Project Overview
This project contains automated functional and UI test cases developed using **Playwright** to evaluate the accuracy, robustness, and usability of the **Swift Translator** web application.

System under test:  
https://www.swifttranslator.com/

The focus of this assignment is on:
- Accuracy of Singlish to Sinhala conversion  
- Handling of different sentence structures and language patterns  
- Robustness against mixed language, formatting issues, and informal inputs  
- UI behavior such as real-time output updates  


## Technologies Used
- Playwright  
- TypeScript  
- Node.js  
- Git & GitHub  

## Project Structure

The project is organized as follows:

IT3040_Assignment1_Playwright/
 ┣ tests/                 # Contains all Playwright test scripts
 ┃ ┣ positive.spec.ts     # 24 Positive functional test cases
 ┃ ┣ negative.spec.ts     # 10 Negative functional test cases
 ┃ ┗ ui.spec.ts           # 1 Positive UI-related test cases
 ┣ playwright.config.ts   # Playwright configuration file
 ┣ package.json           # Node.js project metadata and dependencies
 ┣ package-lock.json      # Exact dependency versions
 ┣ README.md              # This file
 ┗ TestCases.xlsx         # Excel file with test case documentation


## Prerequisites
The following must be installed before running the project:
- Node.js (version 16 or higher)
- npm (included with Node.js)
- Git



## Installation Instructions
Clone the repository


