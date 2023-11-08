# Simple URL Shortner API 

## Description
This is a simple URL shortner API. It is built with Node.js, Express.js, and MongoDB. It is a RESTful API that allows you to create short URLs from long URLs. It also allows you to get all the URLs. It also allows you to delete and Update a URL by ID.


## Features
- Create a short URL from a long URL
- Get all the URLs
- Delete a URL by ID
- Update a URL by ID
- Click Count

## Tech Stack 
- Node.js
- Express.js
- MongoDB
- Mongoose ODM


## Installation and Usage

## Installation to Local
1. Clone this repository
```bash
git clone https://github.com/AbdurRaahimm/URL-Shorten.git
```
2. Navigate to the project directory
```bash
cd URL-Shorten
```
3. Run The Essential Dependency
```bash
npm install
```

## Configuration to Local
1. Create a `.env` file in the project root directory.
2. Add the following environment variables to the `.env` file:
   - `DB_URI`: The URI of your MongoDB connection.
   - `PORT`:  The port number where the server will run. Default is set to 3000. and fallback 3001 
    - `BASE_URL`: The base URL of your application. Default is set to `http://localhost:3000`. you can change your own Base URL
 

## Usage
1. Start the server: 
```shell
 npm start
 ```
2. Or 
```shell
 npm run dev
 ```
2. Open your browser and navigate to `http://localhost:3000` or `http://localhost:3001`


## API Endpoints
| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/urls` | Get all the URLs | 
| `POST` | `/api/shorten` | Create a new URL |
| `DELETE` | `/api/:id` | Delete a URL by ID |
| `PUT` | `/api/:id` | Update a URL by ID |


## Contribute 
If you contibute then wellcome and this api then follow the step-- 
- Fork this repository
- Clone the repository
- Create your feature branch
- Commit your changes
- Push to the remote branch
- Open a pull request 


## Connect on Social Media
- [Twitter](https://twitter.com/AbdurRahim4G)
- [Instagram](https://www.instagram.com/abdurrahim4g/)
- [Facebook](https://www.facebook.com/Rahim72446)
- [LinkedIn](https://www.linkedin.com/in/abdur-rahim4g/)
- [YouTube](https://youtube.com/@AbdurRahimm)

