# SympAI Frontend

## Overview
SympAI Frontend provides the user interface for the SympAI healthcare chatbot. Built with Next.js, the frontend allows users to interact with the chatbot, input symptoms, and view recommendations in a conversational manner. The frontend is deployed via AWS Amplify, ensuring scalability and performance.

This repository works together with the [SympAI Backend](https://github.com/MoKenawy/sympai-backend), which handles the API and model logic for chatbot interactions.

## Features
- Built with Next.js for efficient server-side rendering.
- Responsive design for desktop and mobile.
- Dynamic pages for chat sessions and user profiles.
- Deployed on AWS Amplify with CI/CD integration.

## Installation

### Prerequisites
- Node.js
- Docker (for containerized deployment)

### Install dependencies

1. Clone the repository:
   ```bash
     git clone https://github.com/yourusername/symp-ai-frontend.git
     cd symp-ai-frontend
   ```
2. Install dependencies:
   ```bash
     pnpm install
   ```

### Set up environment variables:
Configure the necessary environment variables (if any) in the .env file or as needed during deployment.

## Run Docker to containerize the frontend:
1. Build the Docker image:
   ```bash
     docker build -t sympai-frontend .
   ```

2. Run the container:
   ```bash
     docker run -p 3000:3000 sympai-frontend
   ```


## License
This project is licensed under the [MIT License](https://github.com/MoKenawy/sympai-front/blob/master/LICENSE).

# Related Repositories
[SympAI Backend](https://github.com/MoKenawy/sympai-backend)
