# aboutme
http://jimz.id.au

#### Initial setup
* Setup [git-ftp](https://github.com/git-ftp/git-ftp)
* Setup `git-alias` to use `git-ftp` options of `--remote-root` and `--syncroot`

Sample alias in project's local git, `.git/config`:
```
    [alias]
      ftp-deploy = ftp push --remote-root <path/on/server> --syncroot <path/in/local/for/deploy>
      deploy = "!git checkout $1 ;\
                 git merge develop;\
                 git push origin $1 ;\
                 git ftp-deploy;\
                 git checkout develop;\
                 :"
```

#### While coding:

1. `grunt`  _// triggers the watch task for js check_

2. `git status`  _// check what files have changed and the current branch (make sure it's **develop**!)_

3. `git commit` then `git push`  _// keep **develop** branch up-to-date_


#### After making changes and ready for deployment:

1. `grunt build`

2. `git commit` then `git push` _// updates **develop** branch_

3. `git deploy master` _// updates **master** branch and `git-ftp` push to server_

