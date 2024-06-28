# Zombies Twitch Commands
[Nightbot](https://nightbot.tv) commands designed to be helpful for zombies players.

Simply copy and paste them into your chat and you're good to go!

# Better Hordes Command
This hordes command has no round limit, all the values are mathematically calculated

Copy and Paste:
```
!editcom !hordes $(eval q=decodeURIComponent(`$(querystring)`); $(urlfetch json https://pastebin.com/raw/MhDsiuce))
```
 
# WR Command
Get the world record of any map on most games (WAW & BO1 for now)

Copy and Paste:
```
!editcom !wr $(eval q=decodeURIComponent(`$(querystring)`); $(urlfetch json https://pastebin.com/raw/wnvb0dTE))
```
 
# Wonder Weapons Command (Solo Only)
Allows you to calculate how many wonder weapons you will need to complete a round

Copy and Paste:
```
!addcom !ww $(eval q=decodeURIComponent(`$(querystring)`); $(urlfetch json https://pastebin.com/raw/i3cKEvc2))
```

This command also allows you to do the following combinations:
- !ww <weapon> <round>
- !ww <weapon> <round> <ammo type (unpapped, papped, full)>
- !ww vr11 bleedouts <round> <hordes per vr>
