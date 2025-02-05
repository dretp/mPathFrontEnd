# MPathFrontEnd

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.3.

Please before starting make sure you have the backend project mHealthProject https://github.com/dretp/mHealthProject   up and running so you're able to login and authnicate Please look at the readme for basic directions


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```




Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



##Login the application
To log in, please use "admin" as the username. The password is provided below. The admin has access to all health care data and endpoints, while user access is limited to their own data only, with no access to other endpoints.

{
    "username" : "admin",
    "password" : "test456"
}

{
    "username" : "user",
    "password" : "test123"
}
