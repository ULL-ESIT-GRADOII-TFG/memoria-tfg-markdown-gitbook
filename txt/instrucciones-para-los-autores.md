## Skeleton to build a GitBook and Deploy it to GitHub Pages

Skeleton to build a book with gitbook and deploy it to GitHub pages

#### Instrucciones para los autores

Assume you want to create a book inside the Github organization
`my-organization` with name `my-repo`. Follow these steps:

* Install [git](https://git-scm.com/)
* Install [NodeJS](https://nodejs.org/es/)
* Install [gulp](https://gulpjs.com/) globally: `npm i -g gulp`
* Install [gitbook](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md) in your computer
  * Install `gitbook-cli`:

              npm i -g gitbook-cli
* [Join GitHub](https://github.com/join?source=header-home)
* Install [hub](https://github.com/github/hub) (optional)
* The skeleton of the book is hosted in this repo: [https://github.com/etsiiull/gitbook-skeleton](https://github.com/etsiiull/gitbook-skeleton)
  * Fork or clone this repo `hub clone etsiiull/gitbook-skeleton my-repo`
  * Alternatively, clone the book in your machine using: `git clone https://github.com/etsiiull/gitbook-skeleton.git` 
* Modify the files `gulpfile.js` and `package.json`
  * Substitute all the appearances of `etsiiull` by `my-organization` in `gulpfile.js`,
  * Substitute all the appearances of `gitbook-skeleton` by `my-repo` in `gulpfile.js`, `package.json`
  * Change the `name`, `description`, author`, `keywords`, etc. in `package.json`
* Remove the `origin` remote: `git remote rm origin`
  - Or alternatively rename the remote `git remote rename origin etsiiull`
* Create the new repo in GitHub: `hub create my-organization/my-repo`
  ```
  [~/TFGsrc/my-repo(master)]$ git remote -v
  origin	https://github.com/my-organization/my-repo.git (fetch)
  origin	https://github.com/my-organization/my-repo.git (push)
  ```
* Push the changes: `git commit -am 'new book' && git push origin master`
* Visit the GitHub page of your repo `hub browse`
* In the GitHub page of your repo go to the settings of the new repo and set the `master` branch as the branch for GitHub pages
* Run `gitbook install` to install plugins from registry.
* Install the dependencies of this book/project `npm i`
* Write in [markdown](https://es.wikipedia.org/wiki/Markdown) the contents of your book
* Compile the book with `gulp build` to produce the HTML
* To deploy your book in GitHub write `gulp deploy`
* Visit [https://my-repo.github.io](https://etsiiull.github.io/gitbook-skeleton/_book/) to see the result
* For more details see the section [Markdown and GitBook](gitbook.md)

### Curso de Markdown y GitBook

* [Apuntes de Markdown y GitBook](https://casianorodriguezleon.gitbooks.io/elaboracion-de-material-docente-con-gitbook/content/) En Gitbook
* [Apuntes de Markdown y GitBook](https://ull-pfpdi-gitbook-1617.github.io/Elaboracion-de-Material-Docente-con-GitBook/) En GitHub

### Notas

Cuando se despliega un libro gitbook en las GitHub Pages
yo suelo hacerlo así:

1. Crear un fichero `.nojekyll` para inhibir el uso de `jekyll`
```bash
~/GitBook/Library/Import/curso-gihub(master)]$ ls -l .nojekyll 
-rw-r--r--  1 casiano  staff  0 17 nov 15:02 .nojekyll
```
2. Añadir el directorio/carpeta con los HTML generados  `_book/`  al repo
```bash
[~/GitBook/Library/Import/curso-gihub(master)]$ git add _book
```
3. Configurar el repo remoto en GitHub para que las páginas se sirvan desde la rama `master` (settings del repo, seccion gh-pages)
![](resources/settingghpages.png)
4. Poner en la raíz del repo un fichero `index.html` que redirige a `_book/index.html` como este:
  ```html
	<!DOCTYPE HTML>
	<html lang="en-US">
			<head>
					<meta charset="UTF-8">
					<meta http-equiv="refresh" content="1; url=_book/">
					<script type="text/javascript">
							window.location.href = "_book/"
					</script>
					<title>Page Redirection</title>
			</head>
			<body>
					<!-- Note: don't tell people to `click` the link, just tell them that it is a link. -->
					If you are not redirected automatically, follow this <a href='_book/'>link to the book</a>.
			</body>
	</html>
  ```
5. Asegúrese que el directorio `_book`no es ignorado en `.gitignore` 
