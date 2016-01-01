var exec = require('child_process').exec

const interface = 'en0'

function enumerate(cb){
  exec('arp -a -n', function(err, stdout, stderr){
    var targets = []
    stdout.split('\n').map((i) => {
      var target = i.split(/[ ,]+/)
      if (target[1] && target[5] == interface)
        targets.push({
            ip:  target[1].replace(['(',')'],['',''])
          , mac: target[3].replace(/^0:/g, '00:').replace(/:0:/g, ':00:').replace(/:0$/g, ':00')
          , interface:  target[5]
        })
    })
    return cb(targets)
  })
}
