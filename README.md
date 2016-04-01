# aboutme
http://jimz.id.au

While coding:

`1`. grunt // triggers the watch task for js check

`2`. git status // check what files have changed and the current branch (please be develop!)

`3`. git push origin **develop** // keep develop branch up-to-date


After making changes and ready for deployment:

`1`. grunt build

`2`. git push origin **develop**

`3`. git checkout **master**

`4`. git merge develop

`5`. git push origin **master**

`6`. git deploy

`7`. git checkout **develop**

