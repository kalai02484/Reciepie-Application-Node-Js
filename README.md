# Recipe Application Node.js

A CRUD (Create, Read, Update, Delete) API for managing recipes, built with Node.js, Express.js, and MongoDB. The app follows the MVC architecture and includes API documentation using Postman.

## Features

- View recipes
- Add new recipes
- Search recipes
- Manage ingredients
- User-friendly interface

## Installation

```bash
git clone <repository-url>
cd "Recipe Application Node Js"
npm install
```

## Usage

```bash
npm start
```

The application will run on `http://localhost:3000`

## Project Structure

```
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── views/
├── public/
├── package.json
└── README.md
```

## Requirements

- Node.js v14+
- npm or yarn

## License

MIT

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## Getting Started

### Prerequisites
- Node.js v14 or higher
- npm v6+ or yarn v1.22+

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd "Recipe Application Node Js"
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your configuration:
```
PORT=3000
NODE_ENV=development
```

4. Start the application:
```bash
npm start
```

Navigate to `http://localhost:3000` in your browser.

## API Endpoints

- `GET /recipes` - Retrieve all recipes
- `GET /recipes/:id` - Get a specific recipe
- `POST /recipes` - Create a new recipe
- `PUT /recipes/:id` - Update a recipe
- `DELETE /recipes/:id` - Delete a recipe
- `GET /recipes/search?q=query` - Search recipes

## Technologies Used

- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **EJS/Handlebars** - Template engine
- **npm** - Package manager

## Troubleshooting

- **Port already in use**: Change the PORT in `.env` file
- **Module not found**: Run `npm install` again
- **Database connection errors**: Check your `.env` configuration

## Support

For issues and questions, please open an issue on the repository.

Please note: Replace `<repository-url>` with your actual repository URL.
