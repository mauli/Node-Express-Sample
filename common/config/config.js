module.exports = {
	"production": {
	  "PORT": 3001,
	  "MONGODB_URI": "mongodb://localhost:27017/TodoAppTest",
	  "JWT_SECRET": "mauli1234",
	  "jwtExpirationtime" : "2m"
	},
	"development": {
	  "PORT": 3000,
	  "MONGODB_URI": "mongodb://localhost:27017/TodoApp",
	  "JWT_SECRET": "mauli1234",
	  "jwtExpirationtime" : "2m"
	}
}