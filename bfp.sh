git add --all *
git commit -m '+rebuild'
git reflog expire --expire=now --all
git gc --force --aggressive --prune=now
git repack -a -d
git push --force