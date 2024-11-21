# Noirdle - A Zero-Knowledge Wordle Game

Noirdle is a privacy-preserving word guessing game built using Noir and React. It combines the fun of Wordle with the power of zero-knowledge proofs, ensuring that your guesses remain private while still verifying their correctness.


## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Game](#running-the-game)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Technical Stack](#technical-stack)
- [Acknowledgments](#acknowledgments)


## Overview

In Noirdle, players attempt to guess a 5-letter word within 6 attempts. After each guess, the game provides feedback using colors:
- Green: Letter is correct and in the right position
- Yellow: Letter is in the word but in the wrong position
- Gray: Letter is not in the word

What makes Noirdle special is that it uses zero-knowledge proofs to verify guesses without revealing the solution, providing a unique blend of gaming and cryptographic privacy.

## Prerequisites

- Node.js (v18 or higher)
- Rust (latest stable version)
- Nargo (Noir's package manager) v0.36.0

## Installation

1. Clone the repository:

``` bash
git clone [https://github.com/ximon-x/noirdle](https://github.com/ximon-x/noirdle)
cd noirdle
```

2. Install the circuit dependencies:

``` bash
cd noirdle
nargo check
```

3. Install the client dependencies:

``` bash
cd ../client
npm install
```


## Running the Game

1. First, compile the Noir circuit:

``` bash
cd circuit
nargo compile
```

2. Start the development server:
   
``` bash
cd ../client
npm run dev
```
3. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. Type any 5-letter word and press ENTER
2. The game will generate a zero-knowledge proof to verify your guess
3. Color-coded feedback will show how close your guess was
4. Continue guessing until you find the word or run out of attempts

## Technical Stack

- Frontend: React with TypeScript
- Styling: Tailwind CSS
- Zero-Knowledge Proofs: Noir
- Proof Generation: Barretenberg
- Build Tool: Vite

## Project Structure

- `/circuit`: Contains the Noir circuit implementation
- `/client`: React frontend application
- `/client/src/components`: React components
- `/client/src/lib`: Utility functions and types


## Acknowledgments

- Built during the ZK Encode 2024 Q4 Bootcamp
- Powered by Aztec Noir
