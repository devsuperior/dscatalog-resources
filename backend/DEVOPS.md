# Implantação do back end, Docker, CI/CD

## Manutenção do app em produção no Heroku: tail
```
heroku logs --tail
```

## Build e execução manual de um projeto Spring Boot

#### Gerando build do projeto com Maven
Rodar os testes e fazer o build (Linux: ./mvnw)
```
mvnw clean package
```
Fazer o build ignorando os testes (Linux: ./mvnw)
```
mvnw clean package -DskipTests
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

Baixar uma imagem do Docker Hub (se não especificar tag, vem a "latest")
```
docker pull <image:tag>
```
Instanciar (e iniciar) um container com base em uma imagem (se não estiver baixada, baixa do Docker Hub)
```
docker run <image:tag>
```
Documentação: https://docs.docker.com/engine/reference/run/

## Manutenção
Listar os containers (inclusive os parados: -a)
```
docker ps
```
Acessar o terminal de um container em execução
```
docker attach <id>
```
Sair do container sem pará-lo
```
CTRL + C
```
Acompanhar os logs do container
```
docker logs <id>
```
Iniciar um container
```
docker start <id>
```
Parar um container
```
docker stop <id>
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
- Todos arquivos a partir do diretório do Dockerfile serão incluídos na imagem
#### COMANDOS MAIS COMUNS
- FROM
- EXPOSE
- ADD
- RUN (Cada RUN cria uma nova camada na imagem. Use && para encadear vários RUN sem criar camada para cada.)
- ENV
- VOLUME
- ENTRYPOINT
- CMD

#### Comando para criar a imagem
```
docker build -t imagem:tag .
```

## Salvando imagem no Docker Hub
- No Docker Hub: Create Repository

Criar tag para nossa imagem (caso não tenha criado ainda):
```
docker tag <id> <usuario/imagem:tag>
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

## (continua)
(favor aguardar: ainda vamos colocar mais materiais aqui nos próximos dias)
