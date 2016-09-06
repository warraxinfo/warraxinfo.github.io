git add --all *
git commit -m '06.09.2016 +Крысиные имена — Warrax (добавлено) +Деньги воспитывают целеустремлённых эгоистов — Е. Неймарк +Вейсман против законов природы — С.Н. Магнитов +Добавил 13 картинок в раздел "Философское и жизненное" [60] и одну в "СССР" [60]'
git reflog expire --expire=now --all
git gc --force --aggressive --prune=now
git repack -a -d
git push --force