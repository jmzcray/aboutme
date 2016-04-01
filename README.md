# aboutme
http://jimz.id.au

#### While coding:

`1`. grunt  _// triggers the watch task for js check_

`2`. git status  _// check what files have changed and the current branch (please be **develop**!)_

`3`. git push origin **develop**  _// keep develop branch up-to-date_


#### After making changes and ready for deployment:

`1`. grunt build

`2`. git push origin **develop**

`3`. git checkout **master**

`4`. git merge develop

`5`. git push origin **master**

`6`. git deploy _// setup [git-fpt](https://github.com/git-ftp/git-ftp), use `--remote-root` and `--syncroot`_

`7`. git checkout **develop**

