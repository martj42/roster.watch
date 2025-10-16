cd C:/Users/mart/Dropbox/R/roster.watch
Rscript track_ufc.R >> ufc_auto.log 2>&1
git add log.html >> ufc_auto.log 2>&1
git commit -m "update" >> ufc_auto.log 2>&1
git push >> ufc_auto.log 2>&1