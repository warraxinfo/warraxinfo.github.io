cd "/b/warrax.net/warraxinfo.github.io-clone/"
git add --all *
git commit --file=/e/bfp.txt
git reflog expire --expire=now --all
git gc --force --aggressive --prune=now
git repack -a -d
git push --force