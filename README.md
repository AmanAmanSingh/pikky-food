
# PIKKY FOOD APP

PIKKY Food App is a web application built using React and Vite, designed to manage flight statuses with administrative capabilities.


## Features

- Flight Management: View, filter, and search flights by flight number, origin, destination, airline, flight type, and status.

- Authentication: Users need to log in to access certain features.
- Admin Control: Admin users can change the status of flights.
- Custom Hooks: Utilizes custom hooks for managing flight data and authentication.
- Shadcn UI: Incorporates Shadcn UI components for a consistent and visually appealing interface.
- Testing: Includes unit tests for components and hooks.

## Authentication and Authorization
Admin Access: To change the flight status, you need to be logged in with username "admin" and  password "admin" . Only authenticated admin users have the privilege to update flight statuses.


## Run Locally

Clone the project

```bash
   git clone https://github.com/AmanAmanSingh/pikky-food.git
```

Go to the project directory

```bash
  cd pikky-food-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
    npm run dev
```


## Run With Docker

As I have published this on my Docker Hub account, So By running the below command will automatically pull the image. If any issues occur during the initial run, simply rerun the command to resolve them.

```bash
  docker run -it -p 8080:8080 amans7097/pikky-food-app
```

## Tech Stack

**Client:** React, Shadcn UI, TailwindCSS , typescript , docker.


## Support

For support, email amans7097@gmail.com .

