# Electric Games Inc

### Frameworks

* [React](https://facebook.github.io/react/)
* [.NET Core](https://www.microsoft.com/net/core)
* [SQLite](https://www.sqlite.org/)

### Structure
*Styles* - All styles are saved in the styles folder. They're divided into two files - `index.css` and `App.css` - the former is for global styles such as body, h1, p, etc. The latter includes classNames for the React components.

*Pages* - All pages are saved in the pages folder. They might include other components, but they're the main components that are rendered in the `App.js` file.

*Components* - All components are saved in the components folder. They're the smaller components that are used in the pages.

### Running the project
https://learn.microsoft.com/nb-no/training/modules/build-web-api-aspnet-core/3-exercise-create-web-api
dotnet new webapi
dotnet run
dotnet tool install -g Microsoft.dotnet-httprepl
If error Unable to find an OpenAPI description. Use: dotnet dev-certs https --trust
httprepl https://localhost:{PORT}

https://localhost:{PORT}/> ls
.                 []
WeatherForecast   [GET] 
