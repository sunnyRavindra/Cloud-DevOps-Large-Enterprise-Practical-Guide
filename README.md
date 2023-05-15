# Cloud-Architect-Large-Enterprise-Practical-Guild

#### DevContainers
1. Install vscode and Docker over the internet , and make sure both of them are up and running.
2. install the "Remote Development" and "Dev Containers" extension for VS Code
3. Open the folder in VScode where you want to create Dev container 
4. Create `.devcontainer/devcontainer.json` file inside the folder.
 ```
    {
        "name": "UbuntuDevContainer",
        "image": "mcr.microsoft.com/devcontainers/base:jammy"
    }
```
6. cmd/ctrl + Shift + p -> reopen in Container 
Reference - >  `Cloud-Architect-Large-Enterprise-Practical-Guild/DevContainerFiles`
Official Tutorial - > `https://code.visualstudio.com/docs/devcontainers/containers`

#### Application Containerization  
1. Install docker.
```
Onlocal: 
    curl -fsSL https://test.docker.com -o test-docker.sh
    sudo sh test-docker.sh
    docker -v
OnDevcontainer: add below lines to devcontainer.json
    "features": {
            "ghcr.io/devcontainers/features/docker-in-docker:2": {}
        }
```
2. Rebuild. 
3. Create DockerFile named "Dockerfile" inside the project folder.
```
    From alpine:latest
    #WORKDIR /app
    #COPY . .
```
4. Create Image using `docker build -t ca-frontend:v1 .`
5. Start Docker container with the build Image `Docker Container run -it ca-frontend:v1 sh `
6. To get out of the shell `ctrl+D`
Reference - > `Cloud-Architect-Large-Enterprise-Practical-Guild/Docker/Dockerfile`
Official Tutorial - > `https://docs.docker.com/get-started/overview/`

#### Create Github hosted React Frontend
1. Create react app `npx create-react-app ca-frontend`.
2. install gh-pages `npm install gh-pages --save-dev`.
3. Add homepage property to package.json `"homepage": "https://{username}.github.io/{repo-name}"`.
4. Add a predeploy property and a deploy property to the scripts object in package.json .
```
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
```
5. run command  `npm run deploy -- -m "Deploy React app to GitHub Pages"`
```
    Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.
```
6. Navigate to the GitHub repository settings page> Code and automation> Pages
7. update Source: Deploy from a branch, Branch: gh-pages, Folder: / (root).
Reference - > `https://github.com/gitname/react-gh-pages#readme`.
Mysite - > `https://sunnyravindra.github.io/Cloud-Architect-Large-Enterprise-Practical-Guild/`

### React
1.  Create react app `npx create-react-app react-basics`.
2.  Componenets
3.  Uppercase letters wile importing componenets
4.  Only one root element <Fragments >
5.  Children props
6.  
7.  

class myFirstClass{
    constructor(){
        this.constructor = 'constructor';
    }
    myFirstArrowFunction = (message, constructor) => {
        var myfirstVar = '4';
    const myfirstConst = '5';
        console.log(message + myfirstVar + myfirstConst)
    }
    //Spread
    const myFirstArray = [1,2,3,4,5];
    const myFirstSpreadArray = [...myFirstArray];
    console.log(myFirstSpreadArray)
    //Rest
    myFirstRestFunction = (...args) => {
        console.log(args)
    }
    //Array Destructuring 
    [a,b, ,c]= myFirstArray;
    console.log(a);
    console.log(b);
    console.log(c);
    //Object Destructuring 
    {c,d} = {name='sunny',age='cloud'}
    console.log(c);
    console.log(d);
    //objects are coped as reference -> practical pending
    //Map ->practical pending
    
    

}