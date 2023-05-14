# go-microservice
Microservice written in GoLang using mostly Gorilla MUX

### Grupa
Stanisław Marek
Wioletta Drąg
Aleksander Kuliński
Klaudia Balicka

## Clone
```bash
git clone https://github.com/StanMarek/go-microservice.git
```

## Run
```bash
go run src/main.go
```
## Or Build
```bash 
go build src/main.go
./main
```

## Important note
Before running an app, redis-server must be running
e.q.
```
docker pull redis
docker run --name my-redis -p 6379:6379 -d redis
```
