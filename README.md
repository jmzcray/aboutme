# aboutme
http://jimz.id.au

Source code at `src/` <br />
Compiled code at `dist/`

#### Initial setup
* Setup [git-ftp](https://github.com/git-ftp/git-ftp)
  + url
  + user
  + password
  + syncroot
  + remote-root
* Setup `git-alias` to use `git-ftp` options of `--remote-root` and `--syncroot`

Sample alias in project's local git, `.git/config`:
```
    [alias]
      ftp-deploy = ftp push
      deploy = "!git checkout $1 ;\
                 git merge develop;\
                 git push origin $1 ;\
                 git ftp-deploy;\
                 git checkout develop;\
                 :"
```

#### While coding:

1. `grunt`  _- triggers the watch task for js check_

2. `git status`  _- check what files have changed and the current branch (make sure it's **develop**!)_

3. `git commit` then `git push`  _- keep **develop** branch up-to-date_


#### After making changes and ready for deployment:

1. `grunt build` _- compile code into `dist/` directory_

2. `git commit` then `git push` _- updates **develop** branch_

3. `git deploy master` _- updates **master** branch and `git-ftp` push to server_

