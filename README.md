# aboutme
http://jimz.au

Source code at `src/` <br />
Compiled code at `dist/`

#### Hosting
This site is deployed with GitHub Pages from the `master` branch via GitHub Actions.

Custom domain:

* `jimz.au`

Required DNS records:

* `A 185.199.108.153`
* `A 185.199.109.153`
* `A 185.199.110.153`
* `A 185.199.111.153`
* `CNAME www -> jmzcray.github.io`

#### While coding:

1. `npm run dev`  _- triggers the watch task for js check_

2. `git status`  _- check what files have changed and the current branch (make sure it's **develop**!)_

3. `git commit` then `git push`  _- keep **develop** branch up-to-date_


#### After making changes and ready for deployment:

1. `npm run build` _- compile code into `dist/` directory_

2. `git commit` then `git push` _- updates **develop** branch_

3. Merge `develop` into **master** and push `master`

4. GitHub Actions deploys the site to GitHub Pages automatically

