
# pommy

pomodoro timer

< screenshots coming soon >

## install

``` bash

$ npm install -g pommy

```

## use

``` bash

$ pommy          # 25-minute task
$ pommy -b       # 5-minute break
$ pommy -B       # 15-minute break
$ pommy -T 7.5   # timer for 7 minutes, 30 seconds
$ pommy -m       # use 24-hour clock
$ pommy -c "💁 "" # in case you don't like airplanes...

```

## beyond

### chaining

``` bash

$ pommy -t && pomo -b   # automatically start break

```

### notifications

#### osx

``` bash

$ sudo gem install terminal-notifier
$ pommy && terminal-notifier -message "task finished" -title "pomo"

```

#### ubuntu

``` bash

$ pommy && notify-send "pomo task finished"

```

## credits

* thanks to [@rstacruz](https://github.com/rstacruz) for making [pomo.js](https://github.com/rstacruz/pomo.js)

