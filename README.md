# Hands on Lab Take Home project
A full stack application developed to showcase Flask web development and IoT integrations. 

## Prerequisites
### Backend
Python (version 3.7 or higher)   
Flask (version 2.3.2 or higher)  

### Frontend
Node.js (version 16.17.0)  
npm (version 8.19.3)
Next.js (version 13.4.2)  
React (version 18.2.0)  
React DOM (version 18.2.0)  
Tailwind CSS (version 3.3.2) 

### IoT 
AWS Account (for AWS IoT usage)  
AWS IoT Core (configured and set up in your AWS Account)  
AWS IoT Device SDK (to interact with AWS IoT Core)

## Installation
Follow these step-by-step instructions to install and set up the project locally:

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/your-repo.git
```

### 2. Navigate to the project directory:
```bash
cd your-repo
```

### 3. Backend Setup:    
a. Create and activate a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate
```
b. Install backend dependencies:
```bash
pip install -r requirements.txt
```

### 4. Frontend Setup:  
a. Navigate to the frontend directory:  
```bash
cd frontend
```
b. Install frontend dependencies:
```bash
npm install
```


### 5. Configuration:     
#### Backend Configuration:
1. Rename the .env.example file to .env in the project's root directory.
2. Update the .env file with your desired configuration values, such as database credentials and API keys.

#### Frontend Configuration:
1. Open the .env.local.example file in the frontend directory.
2. Rename the file to .env.local.
3. Update the .env.local file with any necessary configuration values, such as API endpoints or environment-specific variables.

### 6. Run the application:
1. Start the backend server:
```
flask run
```

2. Start the frontend development server:
```
npm run dev
```

### 7. Access the application:
Open your web browser and visit http://localhost:3000 to access the locally running application.

## Usage
### User Registration and Login:
On the homepage, register an account by clicking the register button and entering your username and password on the register page. 
 
Log in to an account by clicking the login button and entering your username and password on the login page. 

### User Dashboard:
Click the "Connect to Robot" button to be directed to the streaming page.

### Streaming Page and Device Response:
Click the "Send Command" button to send the command to the IoT device. Currently, there is an error when sending a command to the device.
