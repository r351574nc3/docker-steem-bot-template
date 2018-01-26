# docker-steem-bot-template
Template/Example project for creating steem bots

This is a template project just to get developer started in developing steem bots and quickly testing/executing.

It's also useful for getting non-technical people to run their own steem bots.

## Usage

`docker run --rm -p 3000:3000 my-repo/my-steem-bot:latest`

### Mac OS Users

can run the following after

`open http://localhost:3000`

### SAO 

#### First install SAO and yarn

```
~/s/g/r351574nc3 ❯❯❯ brew install yarn
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
...
...
🍺  /usr/local/Cellar/yarn/1.3.2: 14 files, 3.9MB, built in 7 seconds
```

```
~/s/g/r/steem-digest-example git:master ❯❯❯ yarn global add sao
zsh: correct yarn to tar [nyae]? n
yarn global v1.3.2
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 📃  Building fresh packages...
success Installed "sao@0.22.12" with binaries:
      - sao
✨  Done in 15.77s.
```

#### Import from Github

To use this template with SAO simply run

```
~/s/g/r/steem-digest-example git:master ❯❯❯ sao r351574nc3/docker-steem-bot-template
warning Config file was not found, we simply copy it to dest folder!
success Done, let the hacking begin!
~/s/g/r/steem-digest-example git:master ❯❯❯ ls                                                                                                            ✱ ◼
Dockerfile        LICENSE           README.md         app               package-lock.json package.json
```