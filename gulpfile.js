/*
  [~/GitBook/Library/casianorodriguezleon/plantilla-tfg-ull(master)]$ git remote -v
  origin	https://git.gitbook.com/casianorodriguezleon/plantilla-tfg-ull.git (fetch)
  tfg	https://github.com/ULL-ESIT-GRADOII-TFG/memoria-tfg-markdown-gitbook.git (fetch)
*/

const gulp = require('gulp');
const shell = require('gulp-shell');
const opn = require('opn');

gulp.task('default', ['deploy']);

gulp.task('build', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook build',                // build HTML in _book
      ],
      { verbose: true }
  )
);

gulp.task('deploy', ['build'], shell.task(
    [ 'git add . ',
      'git ci -am "new version"', // commit changes
      //'git push --force origin master' // push changes to gitbook repo
      'git push origin master' // push changes to github repo
    ]
  )
);

gulp.task('deploygb', shell.task(
      'git push gitbook master', // push changes to gitbook repo
  )
);

gulp.task('browse', shell.task( // Open a browser in the github book repo
  'hub browse ULL-ESIT-DSI-1819/ull-esit-dsi-1819-github.io'
));

gulp.task('apuntes', function() {
  return opn('https://ull-esit-dsi-1819.github.io/_book/');
  } // Open web browser in the github deployment of this book
);

gulp.task("pre-install", shell.task([ // global dependencies
      "npm i -g gitbook-cli",
			"brew install hub"
]));

gulp.task("push", shell.task([ // push to github not to gitbook
      'git ci -am "new version" && git push origin master',
]));

gulp.task('serve', shell.task([         // gitbook destroys everything in the _book directory!
        'gitbook serve',                // build HTML in _book
      ],
      { verbose: true }
  )
);
