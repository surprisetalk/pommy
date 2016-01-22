
# pommy

pomodoro timer

![alt text](https://raw.githubusercontent.com/surprisetalk/pommy/master/pommy.png "snakes on a plane")

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
$ pommy -c "💁 " # in case you don't like airplanes...

```

## beyond

### chaining

``` bash

$ pommy -t && pommy -b   # automatically start break

```

### notifications

#### osx

``` bash

$ sudo gem install terminal-notifier
$ pommy && terminal-notifier -message "task finished" -title "pommy"

```

#### ubuntu

``` bash

$ pommy && notify-send "pommy task finished"

```

## credits

* thanks to [@rstacruz](https://github.com/rstacruz) for making [pomo.js](https://github.com/rstacruz/pomo.js)

