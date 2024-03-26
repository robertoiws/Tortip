# Getting Started with Frontend

npm install --force

### `npm start`

# Getting Started with Backend

cd backend/

dotnet restore

dotnet build

dotnet ef migrations add InitMigration -p src/Infrastructure/ -s src/Api

## Borrar la carpeta migrations de Infraestrucutra en el backend.

## 'dotnet run --project src/api'

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000/api) to view it in postman.

## Initial Front-End

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Initial Backend

cd backend/

dotnet run --project src/api
