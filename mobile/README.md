## Guia de Instalação e Configuração do ambiente React-Native/EXPO CLI 
Neste guia, você encontrará os passos necessários a instalação e configuração do seu ambiente React-Native/EXPO CLI.
Selecione o seu sistema operacional em um dos links abaixo:

[Instalação no Linux](#linux) <br>
[Instalação no MacOS](#mac) <br>
[Instalação no Windows](#windows) <br>





## <a name="linux"></a>Linux
#### Este guia tomará como base uma distribuição `Ubuntu de 64bits` e o `apt-get` como gerenciador de pacotes.


Com o objetivo de ter um ambiente de desenvolvimento completo que atenda tanto a projetos com ReactNative quando com ExpoCLI. Levando em consideração a configuração de um ambiente de testes com emulador do Android Studio, o Java Development Kit (JDK) também deverá ser instalado.


#### NodeJS
Seguindo as orientações do NodeSource primeiramente precisaremos baixar o Node via `curl` para isto basta excuta os comandos a seguir no terminal do seu computador:<br>

> `curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -` <br>

Em seguida, executaremos o `apt-get` para que a instalação seja efetuada:

> `sudo apt-get install -y nodejs`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `node --version` no seu terminal.
A versão do  NodeJS instalada no seu computador deverá ser retornada neste comando.

Se você utiliza uma distro diferente de ubuntu e que não seja baseada no Debian, recomendo acessar a página do NodeJS.org para visualizar os comandos de instalação do Node em seu ambiente.

> https://nodejs.org/en/download/package-manager/

#### Yarn
Outra observação importante é que junto com o NodeJS vem instalado o NPM que nada mais é do que o `node package manager` ou gerenciador de pacotes do Node. É com ele que você instala as bibliotecas e dependencias dos seus projetos sob o node.
Neste curso utilizarei o `yarn` uma biblioteca também utilizada na gestão de pacotes do node.
O `yarn` é tradicionalmente mais rápido se comparado com o `npm` além de sua sintaxe de utilização ser mais simples e menos ambígua. Para instalar o `yarn` execute o comando a seguir no seu terminal:
> `npm install -g yarn`

Note que o parâmetro `-g` adicionado ao `npm install` indica que o yarn será utilizado globalmente no seu terminal, dispensando o uso do `npm`.

#### JDK
O `react-native` requer a última revisão da versão 8 do JDK, dessa forma temos duas opções de instalação, a recomendação é que se utilize o OpenJDK da AdoptOpenJDK, o procedimento de instalação é bem simples, basta executar o seguinte comando no seu terminal:
>`sudo apt-get install openjdk-8-jre`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `java -version`no seu terminal.
A versão do Java instalada no seu computador deverá ser retornada neste comando. 

### Para instalar o Android Studio  [clique aqui](#androidstudio)

#### Watchman
O WatchMan é uma ferramenta do Facebook que monitora mudanças no sistema de arquivos, utilizado como apoio na ferramenta de fast-refresh, o que recarrega sua tela quando uma modificação no seu código é identificado.

O binário de instalação GUI pode ser encontrado em: 
> https://github.com/facebook/watchman/releases/

Como o instalador é GUI, basta clicar em avançar e concluir para executar o processo de instalação.

### EXPO CLI
Por último e não menos importante, precisamos instalar o `cli` do expo na nossa maquina local, o procedimento é extremamente simples, basta executar um dos seguintes comandos no  terminal do seu computador:

> npm install -g expo-cli

ou
> yarn global add expo-cli
 
Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `expo --version`no seu terminal.
A versão do EXPO instalada no seu computador deverá ser retornada neste comando. 


## <a name="mac"></a>MacOs

O processo de instalação e configuração o ambiente de desenvolvimento ReactNative / Expo CLI no OSX é similar aos outros processos de instalação, entretando o MacOS é o unico sistema operacional no qual temos o emulador do iPhone disponível, o que torna o ambiente agradável aos desenvolvedores de todos os tipos.

#### Homebrew 
O gerenciador de pacotes que utilizaremos para as dependências exclusivas ao sistema operacional será o HomeBrew.  Com ele poderemos instalar as bibliotecas e utilitários que antecedem a configuração do ReactNative/EXPO CLI no seu dispositivo. Para efetuar a instalação do EXPO CLI no seu computador, execute o seguinte comando no terminal: 

> `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

Este comando será responsável por  baixar e instalar o HomeBrew no seu computador, o tempo de instalação pode variar conforme a velocidade da sua conexão com a internet.

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `brew --version`no seu terminal.
A versão do `brew` instalada no seu computador deverá ser retornada neste comando. 

#### NodeJS
Com o auxílio do brew instalaremos o nodeJS, para isto execute o seguinte comando no terminal do seu computador: 

> `brew install node`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `node --version` no seu terminal.  
A versão do NodeJS instalada no seu computador deverá ser retornada neste comando.

#### WatchMan
Ainda utilizando o brew instalaremos o WatchMan que é a ferramenta que monitora mudanças no seu sistema de arquivos e é utilizado com o `fast-refresh` para recarregar o app sempre que for necessário. Para executar a instalação do WatchMan no seu computador, execute o seguinte comando no seu terminal:

> `brew install watchman`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `watchman --version` no seu terminal.  
A versão do WatchMan instalada no seu computador deverá ser retornada neste comando.

#### JDK

O `react-native` requer a última revisão da versão 8 do JDK, dessa forma temos duas opções de instalação, a recomendação é que se utilize o OpenJDK da AdoptOpenJDK, o procedimento de instalação é bem simples, basta executar o seguinte comando no seu terminal:
>`brew cask install adoptopenjdk/openjdk/adoptopenjdk8`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `java -version`no seu terminal.
A versão do Java instalada no seu computador deverá ser retornada neste comando. 

### Para instalar o Android Studio  [clique aqui](#androidstudio)

### EXPO CLI
Por último e não menos importante, precisamos instalar o `cli` do expo na nossa maquina local, o procedimento é extremamente simples, basta executar um dos seguintes comandos no  terminal do seu computador:

> npm install -g expo-cli

ou

> yarn global add expo-cli
 
Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `expo --version`no seu terminal.
A versão do EXPO instalada no seu computador deverá ser retornada neste comando. 


**Com isso teremos o nosso ambiente de desenvolvimento ReactNative/EXPO CLI preparado no sistema operacional Macintosh.**


## <a name="windows"></a>Windows
#### Este guia tomará como base a última versão disponível do Windows 10 de 64 bits

Para configurar o ambiente de desenvolvimento ideal ao ReactNative/EXPO CLI no Windows, alguns passos adicionais são necessários se comparados a instalação dos outros Sistemas Operacionais, acontece que dos três sistemas, o Windows atualmente é o que vem menos preparado para um desenvolvedor e mais focado no usuário final.

#### Gerenciador de Pacotes
O primeiro item do qual precisaremos é um gerenciador de pacotes, isso se faz necessário porque conforme dito anteriormente o windows não provê um ambiente de desenvolvimento amigável em um primeiro momento.
Conforme a recomendação do staff do React Native, iremos utilizar a `chocolatey`. Para mais informações sobre este gerenciador de pacotes acesse: 
> https://chocolatey.org/

Ainda no site do `Chocolatey` clique no botão `Get Started`. Na secção `Step 2` primeiramente temos os requisitos mínimos necessários para instalação do gerenciador de pacotes. 

Exscute o `Power Shell`do windows no modo **administrativo**. Em seguida execute o seguinte comando no `power shell`que está aberto:
> `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

É um comando extenso mas que prepara o seu dispositivo para baixar e instalar o gerenciador, além de realizar a instalação do mesmo. Note que o tempo de instalação pode variar conforme a velocidade da sua rede de internet.

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `choco`no seu terminal.
A versão do `chocolatey` instalada no seu computador deverá ser retornada neste comando. 

#### NodeJS
O procedimento de instalação do NodeJS será similar as outras plataformas, feitos por `package managers` porém, a sintaxe para o uso no caso do `chocolatey` é que muda. Execute o seguinte comando no `power shell` que está aberto:
> `choco install nodejs.install`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `node --version`no seu terminal.
A versão do node instalada no seu computador deverá ser retornada neste comando. 

#### Yarn
Outra observação importante é que junto com o NodeJS vem instalado o NPM que nada mais é do que o `node package manager` ou gerenciador de pacotes do Node. É com ele que você instala as bibliotecas e dependencias dos seus projetos sob o node.
Neste curso utilizarei o `yarn` uma biblioteca também utilizada na gestão de pacotes do node.
O `yarn` é tradicionalmente mais rápido se comparado com o `npm` além de sua sintaxe de utilização ser mais simples e menos ambígua. Para instalar o `yarn` execute o comando a seguir no seu terminal:
> `npm install -g yarn`

#### JDK
O `react-native` requer a última revisão da versão 8 do JDK, dessa forma temos duas opções de instalação, a recomendação é que se utilize o OpenJDK da AdoptOpenJDK, o procedimento de instalação é bem simples, basta executar o seguinte comando no seu terminal:
>`choco install openjdk8`

Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `java -version`no seu terminal.
A versão do Java instalada no seu computador deverá ser retornada neste comando. 

### Para instalar o Android Studio  [clique aqui](#androidstudio)

Após a instalação do JDK e do Android Studio, é necessário adicionar ele como variável de ambiente do sistema operacional, com isso o jdk estará habilitado para ser utilizado globalmente na nossa aplicação. Para isto execute os seguintes passos:
* Abra o `Painel de Controle` do Windows
* Clique em `Contas de Usuário`
* Clique em `Alterar minhas variáveis de ambiente`
* Clique no botão `Novo` em **variáveis de usuário** .
* Crie uma variável de nome `ANDROID_HOME` e adicione o caminho do seu SDK. 

Por padrão o caminho de instalação é `%LOCALAPPDATA%\Android\Sdk` .

Ainda nas variáveis de ambiente, iremos editar a variável existente de nome `Path` para isto clique em `path` e clique em editar, em seguida clique no botão `novo` e adicione o `path` do `platform-tools` que foi instalado junto ao SDK e o Android Studio.

Por padrão o caminho de instalação é `%LOCALAPPDATA%\Android\Sdk\platform-tools`

### EXPO CLI
Por último e não menos importante, precisamos instalar o `cli` do expo na nossa maquina local, o procedimento é extremamente simples, basta executar um dos seguintes comandos no  terminal do seu computador:

> npm install -g expo-cli

ou

> yarn global add expo-cli
 
Para identificar se o processo de instalação ocorreu com sucesso, execute o comando `expo --version`no seu terminal.
A versão do EXPO instalada no seu computador deverá ser retornada neste comando. 

<br> 

**Com isso teremos o nosso ambiente de desenvolvimento ReactNative/EXPO CLI preparado no sistema operacional Windows.**

<br><br>
<br>
<br>
<br>


## <a name="androidstudio"></a> Android Studio

Agora que nosso ambiente já possui o Java e o NodeJS, chegou a hora de instalar o Android Studio, o objetivo desta instalação é disponibilizar o emulador virtual do android (`android virtual device - AVD`) para executar suas aplicações móveis com `ReactNative/Expo` . Utilize o link a seguir para fazer o download atualizado do Android Studio:
> https://developer.android.com/studio/index.html

A instalação do Android Studio segue com uma GUI (Graphic User Interface), dessa forma ao clicar em `next` certifique-se de que as seguintes opções, caso disponíveis, estejam habilitadas:

 - Android SDK
 - Android SDK Platform
 - Android Virtual Device

> Caso algum desses itens estejam desativados, cinzas ou não seja possível selecioná-los, poderemos instalá-los manualmente até o final deste processo.

Por padrão o Android Studio instalará a última SDK disponível, porém o `react-native` requer o SDK `Android 10 (Q)`. Para isto antes mesmo de iniciar algum projeto no Android Studio, na tela de boas-vindas, clicaremos em:
> Configure -> SDK Manager

Certifique-se de que a opçao `show Package Details` ,presente no canto inferior direito da janela, esteja habilitado. Além do `Android 10 (Q)` selecionaremos: 

 - Android SDK Platform 29
 - Intel x86 Atom_64 System Image

E clicaremos na opção `apply`, com isto uma janela de download desses itens deverá surgir na sua tela. 

Após o download dos itens selecionados cujo o tempo pode variar de acordo com a velocidade de sua conexão com a internet, vá até a guia `SDK Tools` e também clique em `show package details` no canto inferior direito da janela, certifique-se de que em `Android SDK Build-Tools` a opção `29.0.2` esteja selecionado. Ao clicar em `apply` novamente, os novos pacotes selecionados serão instalados no seu computador.


#### Caso você esteja utilizando MacOS ou Linux, execute o seguinte passo:
Para finalizar a instalação do Android Studio precisaremos adicionar ANDROID_HOME como variável de ambiente no seu computador, ainda no seu terminal, será necessário adicionar ao bash profile as seguintes informações: 
>`export ANDROID_HOME=$HOME/Android/Sdk`
> `export PATH=$PATH:$ANDROID_HOME/emulator`
>` export PATH=$PATH:$ANDROID_HOME/tools`
> `export PATH=$PATH:$ANDROID_HOME/tools/bin`
> `export PATH=$PATH:$ANDROID_HOME/platform-tools`

Note que para isto basta abrir o seu bash_profile em modo de edição, caso o seu utilize o bash como shell, apenas execute:
> nano $HOME/.bash_profile
> 
ou
> nano $HOME/.bashrc

caso você esteja utilizando um `shell` diferente do bash, sugiro consultar na documentação sobre a adição de configurações ao seu `shell`.


#### Android AVD

Com o objetivo de simplificar os testes de sua aplicação com ReactNative, você pode rodar a sua aplicação em um `avd` ou `android virtual device` lembrando que o Expo fornece o ExpoClient para aplicações que utilizem o EXPO, dessa forma você consegue testar sem utilizar um emulador e diretamente no seu dispositivo físico, tornando a experiência de desenvolvimento bem mais proxima da realidade do usuário.

Para criar um `avd` ainda na tela de boas-vindas do Android Studio, clique em:
> `Configure -> AVD Manager`

A janela do Android Virtual Device Manager será aberta na tela e ao centro teremos o botão `+ Create Virtual Device` utilizaremos ele para criar o nosso novo dispositivo de testes emulados.

Como  você pode ver, podemos simular diversos dispositivos do ecossistema Android: TV's, Tablets, Automotivo, Wearebles e claro os Smartphones.

Com a opção `phones` selecionada escolha a opção de dispositivo que mais te agradar, eu particularmente gosto do simulador do `Pixel 2` pois ele me fornece acesso a Google Play Store, algo de vital importância na implementações de `features` como notificações push, in-app-purchase, etc. 

Clique em `next` e escolha a imagem de sistema que será instalada no seu disposivo virtual, eu particulamente recomendo o `Android Q`  e caso ele ainda não esteja na sua máquna, um botão de download será adicionado a frente da versão que você deseja, certifique-se de que a imagem esteja baixada antes de clicar em `next`.

Neste ponto você irá revisar algumas configurações do seu `avd` além de definir um nome simbólico pra ele, nas configurações não podemos alterar muito além de escolher a orientação (retrato ou paisagem) e se o frame (ou a carcaça) do dispositivo será exibido. Basta clicar em `finish` e seu `avd` irá aparecer na listagem de dispositivos virtuais.
