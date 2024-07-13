# pikky-food
PIKKY Food App
PIKKY Food App is a web application built using React and Vite, designed to manage flight statuses with administrative capabilities.


Features
Flight Status Management: Admin users can update flight statuses (e.g., Scheduled, In-flight, Delayed, Cancelled).
Filter and Search: Filter flights based on airline, flight type, status, or search by flight number, origin, or destination.
Authentication: Users with the username 'admin' and password 'admin' have special privileges  to manage flight statuses.

Getting Started
To run the project locally or with Docker, follow these instructions:

Local Development
Clone the repository:
git clone https://github.com/AmanAmanSingh/pikky-food.git
cd pikky-food-app

Install dependencies:
Ensure you have Node.js and npm installed.
npm install

Start the development server:
npm run dev

Using Docker
Pull and run the Docker image by running below command :
If the image is not available locally, Docker will automatically pull it. If any issues occur during the first run, please simply rerun the command again to resolve them.

docker run -it -p 8080:8080 amans7097/pikky-food-app

Access the application by opening http://localhost:8080 in your web browser.

Admin Access
To access admin functionalities:

Username: admin
Password: admin

For any assistance, please contact amans7097@gmail.com.
