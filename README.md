# Lectionary
Code bits for me and Isaac's project to make the NZ Anglican Lectionary more digitally accessible.

## Project summary
A main chunk of work has been just manually converting all the rules from their original PDF into a [google sheet](https://docs.google.com/spreadsheets/d/1JFiANpqO4W3UrVBemTetsOfYA5ITnPmDnNq_e1P8qBs/edit).

Then using that rules data, I manually pulled together the morning and evening readings for 2021 so that they matched the Lecitonary published this year, and published it in this [google sheet](https://docs.google.com/spreadsheets/d/1TE7UzbJG-JJQVM-m1pY8Yc_hSD5zQMfR_d79PDxniZc/edit)
(I'm planning to automate this bit later, so the following years don't need to be done manually).

Then the first proof-of-concept was a [google doc](https://docs.google.com/document/d/1tlcsKeXkCpYplauIEDckDrMstBSyR-p3dR-S7aCu5UM/edit) (backed by a google script that reads that spreadsheet and refreshes the page every day).

Me and Isaac are now looking at making a proper website (so we can have dark-mode and preferences etc).

## Folders
### "website"
Should be self-explanatory.

I've got a `run.ps1` to serve the file (in case we want to pull out the CSS and javascript into another file).  Currently you don't need it.


### "jupyter"
For converting the google sheet data into a json object that can be imbedded in an HTML page, and anything else I might want python for.  

If you've got Docker installed, you should be able to run the powershell script `run.ps1` (or if you don't have powershell, copy paste the command in the file into your command line) to get Jupyter running, then if you visit the url in the command line, you'll be able to run / make new notebooks to run.

There's a `stop.ps1` because AFAIK, `ctrl + c` should stop the container, but it doesn't seem to be working for me...?
