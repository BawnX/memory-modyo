# Memory modyo test
Project developed for the moyo technological challenge. 
Which was deployed and here is the url https://memory-modyo.fly.dev.
If you need to look for the changes it is in the [CHANGELOG](CHANGELOG.md)
## Structure 💡

```bash
├── README.md
├── CHANGELOG.md
├── app/ # router bases folder
│   ├── game/ # game page
│   ├── home/ # home page
│   └── global.css # css for proyext
├── commons/
│   ├── functions/ # common functions
│   ├── repositories/ # common fetching
│   └── store/ # common data
├── components/
│   ├── atoms/ # small components
│   ├── molecules/ # medium components
│   ├── providers/ # providers layout
│   └── svg/ # svg imgase
├── .eslintrc.json # eslint config and rules
├── Dockerfile # build proyect
└── package.json
```

## Executing ⚙️

Project uses **npm scripts** for eases execution, testing and building.

| Command                    | Action                      |
| -------------------------- | --------------------------- |
| npm run dev                | dev server app              |
| npm run build              | build the app               |
| npm run start              | start server before build   |
| npm run lint               | lint all proyect            |

### Docker

| Command             | Action                     |
| --------------------| -------------------------- |
| fly launch          | prepare proyect for deploy |
| fly deploy          | deploy proyect             |

### fly.io



| Command                                                                                         | Action       |
| ----------------------------------------------------------------------------------------------- | ------------ |
| docker build --build-arg ENV=<env> --tag <image_name> .                                         | docker build |
| docker run -d -it -p <expose_port>:<container_app_port>/tcp --name <instance_name> <image_name> | docker exec  |


### Node Tools

| Command                          | Action                    |
| -------------------------------- | ------------------------- |
| npm install -g npm@latest        | npm update                |
| npm update --save/--save-dev     | soft updated for packages |
| npx npm-check-updates -u         | hard update for packages  |
| git config core.ignorecase false | git case-sensitive enable |

## Linting 🧿

Project uses two linters, for code formatting and code styling normalizing.

-   **eslint**: linter with Airbnb React base config and some other additions.

For correct interpretation of linters, is recommended to use [Visual Studio Code](https://code.visualstudio.com/) as IDE and install the plugins in .vscode folder at 'extensions.json', as well as use the config provided in 'settings.json'
