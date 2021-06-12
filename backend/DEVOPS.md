# Implantação do back end, Docker, CI/CD

## Manutenção do app em produção no Heroku: tail
```
heroku logs --tail
```

## Build e execução manual de um projeto Spring Boot

#### Gerando build do projeto com Maven
```
mvn clean package

ou

./mvnw clean package
```
Fazer o build ignorando os testes (Linux: ./mvnw)
```
mvn clean package -DskipTests
```

#### Rodando o projeto
```
java -jar nome.jar
```

## Instalação do Docker
https://docs.docker.com/get-docker

Instalando Docker Desktop no Windows: https://youtu.be/i_ZyYIdR02Q

Versão do Docker
```
docker -v
```
Versão Docker Client e Docker Server (Daemon)
```
docker version
```
Informações detalhadas do estado atual do Docker
```
docker info
```

## Imagens, containers e registry
#### Imagem
  - Conceito: é a definição estática de como um container deve ser instanciado
  - Uma imagem é composta por camadas
  - Uma imagem tipicamente é definida a partir de outra imagem existente
  - Uma imagem "inicial" é definida a partir de "scratch"

#### Container
  - Conceito: é uma instância de uma imagem
  - Pode estar em execução ou parado
  - Container é STATEFUL: mantém estado. Ele possui uma camada superior de escrita.

#### Registry
  - É um serviço que armazena imagens
  - Registry padrão para Docker: Docker Hub
  - Para instanciar um container, a imagem precisa existir localmente ou em um Registry

## Comandos ps, images, pull e run, stop, start

Listar os containers (inclusive os parados: -a)
```
docker ps
```
Baixar uma imagem do Docker Hub (se não especificar tag, vem a "latest")
```
docker pull <image:tag>
```
Listar as imagens baixadas
```
docker images
```
Instanciar (e iniciar) um container com base em uma imagem (se não estiver baixada, baixa do Docker Hub)
```
docker run [OPTIONS] <image:tag> [COMMAND] [ARGS]
```
Documentação: https://docs.docker.com/engine/reference/run/

Exemplo 1: instancia um container do Ubuntu com linha de comando disponível
```
docker run -it ubuntu:20.04 /bin/bash
```
Exemplo 2: banco Postgres rodando na porta 5432 com base de dados "minha_base" e senha "123456"
```
docker run -p 5433:5432 --name meu-container-pg12 -e POSTGRES_PASSWORD=1234567 -e POSTGRES_DB=minha_base postgres:12-alpine
```

## Manutenção básica
Acessar o terminal de um container em execução
```
docker attach <id>
```
Sair do container sem pará-lo
```
CTRL + P + Q
```
Acompanhar os logs do container (tail)
```
docker logs [-f] <id>
```
Inspecionar o tamanho em disco
```
docker ps --size

docker system df
```
Parar um container
```
docker stop <id>
```
Iniciar um container
```
docker start <id>
```
Deletar um container
```
docker rm <id>
```
Deletar uma imagem
```
docker rmi <id>
```

## Criação da imagem Docker: arquivo Dockerfile
- Dockerfile é um arquivo de texto plano com instruções de como criar a imagem

#### COMANDOS MAIS COMUNS
- FROM
- EXPOSE
- ADD
- RUN (Tempo de build. Cada RUN cria uma nova camada na imagem. Use && para encadear vários RUN sem criar camada para cada.)
- VOLUME
- ENTRYPOINT (Tempo de executação)
- CMD (Tempo de executação)

#### Comando para criar a imagem
```
docker build -t imagem:tag .
```

### Exemplo 1: Ubuntu, escreve Hello World
```
FROM ubuntu:20.04
CMD ["echo", "Hello World"]
```
### Exemplo 2: Ubuntu, bash rodando (gere o container com -it)
```
FROM ubuntu:20.04
CMD ["bash"]
```
### Exemplo 3: Ubuntu, ping, bash rodando (gere o container com -it)
```
FROM ubuntu:20.04
RUN apt-get update \
 && apt-get install -y iputils-ping
CMD ["bash"]
```
### Exemplo 4: Ubuntu, Curl, AWS CLI, Ping, Vim, SSH, pasta compartilhada: tmp, bash rodando
```
FROM ubuntu:20.04

RUN apt-get update \
  && apt-get install -y curl unzip

RUN curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o awscliv2.zip \
  && unzip awscliv2.zip \
  && ./aws/install \
  && rm -rf aws awscliv2.zip

RUN apt-get install -y iputils-ping \
  && apt-get install -y vim \
  && apt-get install -y openssh-server

VOLUME /tmp

CMD ["bash"]
```
### Exemplo 5: App Java web (gerar container: docker run -d -p 80:8080 <imagem:tag>)
```
FROM openjdk:11
VOLUME /tmp
EXPOSE 8080
ADD ./target/nome.jar nome.jar
ENTRYPOINT ["java","-jar","/nome.jar"]
```

#### Volumes
Informações detalhadas do container
```
docker inspect <id>
```
Localização no Windows: https://stackoverflow.com/questions/43181654/locating-data-volumes-in-docker-desktop-windows

Listar volumes
```
docker volume ls
```
Remover volume
```
docker rm -v <container-id>

docker volume rm <volume-name>
```

## Salvando imagem no Docker Hub
- No Docker Hub: Create Repository

Criar tag para nossa imagem com usuário do Docker Hub:
```
docker tag <imagem:tag> <usuario/imagem:tag>
```
Logar no Docker Hub
```
docker login docker.io
```
Enviar a imagem para o Docker Hub
```
docker push usuario/imagem:tag
```
Baixar a imagem do Docker Hub
```
docker pull usuario/imagem:tag
```
Listar imagens de um usuário
```
docker search <usuario>
```

## Criar conta na Amazon AWS
- Criar conta 
  - Precisa de cartão de crédito internacional ($1)
- Criar usuário IAM
  - Access Key
  - Secret Access Key

## Criar instância EC2
- Criar instância EC2
  - AWS -> EC2 -> Executar instância -> Ubuntu Server 20.04
  - t2 micro -> Next -> Next -> Next -> Next
  - Baixar key pair
  - Liberar HTTP na porta 80

## Acessar instância EC2 via SSH e instalar Docker
- Logar no AWS CLI
  - No terminal: aws configure
    - Access key id: (sua chave)
    - Secret access key: (seu secret)
    - Default region name: (sua regiao)
    - Default output format: json
- Conectar à instância EC2 com SSH
  - chmod 400 arquivo.pem
  - ssh -i "arquivo.pem" ec2-user@...
- Instalar Docker na instância EC2: https://docs.docker.com/engine/install/ubuntu

## Criar instância do Postgres no RDS
- AWS -> RDS -> Nova instância -> Postgres
- Standard create
- Free tier
- Publicly accessible
- Database name: (especificar)

## Preparar o banco com pgAdmin
- Criar server no pgAdmin
- Rodar script DDL
- Rodar seed

## Passos finais de implantação manual na AWS
- Subir imagem para Docker Hub
- Criar container do app que se conecta ao banco RDS
  - Salvar comando RUN
- Rodar comando RUN na instância EC2

Bootcamp 2.0:
```
docker run -p 80:8080 --name dscatalog-aws -e CLIENT_ID=dscatalog -e CLIENT_SECRET=dscatalog123 -e JWT_SECRET=MY-JWT-SECRET -e JWT_DURATION=86400 -e DATABASE_URL= acenelio/dscatalog:v1
```
Bootcamp 3.0:
```
docker run -p 80:8080 --name dscatalog-aws -e APP_PROFILE=prod -e DB_URL=jdbc:postgresql://HOST:5432/dscatalog -e DB_USERNAME=postgres -e DB_PASSWORD=12345678 acenelio/dscatalog:v1
```

## CI/CD com Github e Travis

**Atenção**: O .gitignore do back end não pode estar ignorando o mvnw

### Visão geral de CI/CD

https://www.redhat.com/pt-br/topics/devops/what-is-ci-cd

Integração contínua: Build -> Tests -> Merge

Entrega contínua: release no repositório (Git / Container)

Implantação contínua: implantação automática em produção

### Caso 1:

- Login com Github
- Home -> + My Repositories -> Selecione o repositório Git
- Repositorio Travis -> Copiar código MD para README

```
language: java
jdk:
  - openjdk11
before_install:
  - cd backend
  - chmod +x mvnw
```

### Caso 2:

- Repositorio Travis -> More options -> Settings -> (configurar variáveis de ambiente: usuário e senha do Docker Hub)

```
language: java
jdk:
  - openjdk11
before_install:
  - cd backend
  - chmod +x mvnw
  - ./mvnw clean package
script:
  - docker build -t dscatalog:latest .
before_deploy:
  echo "$DOCKERHUB_PASSWORD" | docker login --username "$DOCKERHUB_USER" --password-stdin
deploy:
  provider: script
  script:
    docker tag dscatalog:latest $DOCKERHUB_USER/dscatalog:latest;
    docker push $DOCKERHUB_USER/dscatalog;
  on:
    branch: main
```


## CI/CD com Github Actions e Heroku

### Procfile
```
web: java -Dserver.port=$PORT $JAVA_OPTS -Xms256m -Xmx256m -Xss512k -jar target/dscatalog-0.0.1-SNAPSHOT.jar
```


