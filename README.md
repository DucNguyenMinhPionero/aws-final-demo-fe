## Getting Started

First, install package

```bash
yarn
```

Second, run the development server:

```bash
yarn dev
```

Or you can run production server:
```bash
yarn build
yarn start
```

If you got format error, please run this command to fix
```bash
yarn format
```

Please follow this rule to write message commit when using git commit -m
> Example: git commit -m "feat: new feature"

```bash
* build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
* chore: add something without touching production code (Eg: update npm dependencies)
* docs: Documentation only changes
* feat: A new feature
* fix: A bug fix
* perf: A code change that improves performance
* refactor: A code change that neither fixes a bug nor adds a feature
* revert: Reverts a previous commit
* style: Changes that do not affect the meaning of the code (Eg: adding white-space, formatting, missing semi-colons, etc)
* test: Adding missing tests or correcting existing tests
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
