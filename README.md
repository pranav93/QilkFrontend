# Qlik_Frontend

Assignment solution for SRE

## How to run locally?

Make sure that you have docker and compose installed on your dev machine

```bash
git clone https://github.com/pranav93/Qlik_Frontend.git
cd Qlik_Frontend
```

This setup requires the `.env` file in `Qlik_Frontend` directory.
Create a `.env`, like this

```bash
touch .env
```

```env
REACT_APP_API_BASE_URI=http://localhost:8080/api
```

Now run the frontend

```
docker-compose up
```

## What does each of these env fields even mean?

| Field                  |           Value            |
| ---------------------- | :------------------------: |
| REACT_APP_API_BASE_URI | The backend url to contact |

For prod deployment I have created an image here -> [https://hub.docker.com/repository/docker/pranav93/qlik_frontend]
For K8s deployment refer to -> [https://github.com/pranav93/Qlik_Kubernetes]
