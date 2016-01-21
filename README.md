
# pomy

pomodoro timer

< screenshots coming soon >

## install

< npm package coming soon >

## use

``` bash

pomo          # 25-minute task
pomo -b       # 5-minute break
pomo -B       # 15-minute break
pomo -T 7.5   # timer for 7 minutes, 30 seconds

```

## beyond

### chaining

``` bash

pomo -t && pomo -b   # automatically start break

```

### notifications

#### osx

``` bash

sudo gem install terminal-notifier
pomo && terminal-notifier -message "task finished" -title "pomo"

```

#### ubuntu

``` bash

pomo && notify-send "pomo task finished"

```

## credits

* thanks to [@rstacruz](https://github.com/rstacruz) for making [pomo.js](https://github.com/rstacruz/pomo.js)
* thanks to [@tj](https://github.com/tj) for making [node-progress](https://github.com/tj/node-progress)

