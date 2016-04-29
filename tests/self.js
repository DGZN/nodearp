var arp = require('../index')

/**
* Get own ARP entry
* @return {object}
**/
arp.self(function(entry){
  console.log(require('util').inspect(entry, { depth: null }));
})
