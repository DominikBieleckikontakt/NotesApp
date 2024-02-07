# NoteKeeper Web App

Welcome to the NoteKeeper web application repository! This simple web app allows users to add notes that are permanently stored, ensuring that once a note is posted, it remains in the system indefinitely. The primary purpose of this project is to test the integration of [shadcn/ui](https://github.com/shadcn/ui) components and explore the usage of Docker for containerization.

## Technologies Used

- **Next.js**: This web app is built using Next.js, a React framework that enables server-side rendering, making it efficient and fast for building modern web applications.

- **Tailwind CSS**: The user interface is styled with Tailwind CSS, providing a utility-first approach for designing a clean and responsive layout.

- **shadcn/ui**: The project utilizes components from [shadcn/ui](https://github.com/shadcn/ui) for UI elements, enhancing the visual appeal and functionality of the web app.

- **Docker**: The application is containerized using Docker, simplifying deployment and ensuring consistency across different environments.

## Features

- **Add Notes**: Users can easily add notes through a user-friendly interface.

- **Permanent Storage**: Once a note is posted, it is stored permanently within the system. This feature aims to explore the concept of persistent data storage.

- **Read-Only Notes**: Editing and deleting notes are intentionally disabled, emphasizing the permanent nature of the posted content.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notekeeper-web-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd notekeeper-web-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm run dev
   ```

   The app will be accessible at `http://localhost:3000`.

## Docker Integration

To run the application using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t notekeeper-web-app .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 notekeeper-web-app
   ```

   Access the app at `http://localhost:3000` locally or `https://https://notes-iota-seven.vercel.app`.

## Contribution

Feel free to contribute to this project by submitting issues or creating pull requests. Your feedback and improvements are highly appreciated!

Happy noting with NoteKeeper! 📝🚀
