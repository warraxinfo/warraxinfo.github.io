git add --all *
git commit -m 'Последние добавления: 14.09.2016; Православие, национализм, либерализм, сатанизм — Warrax; Интересная черта русского характера — Warrax; Добавил 3 картинки в раздел "Социальное" [128]'
git reflog expire --expire=now --all
git gc --force --aggressive --prune=now
git repack -a -d
git push --force