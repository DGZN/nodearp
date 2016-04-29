var arp = require('../index')

/**
* Get all ARP entries
* @return {array} entries
**/
arp.entries(function(entries){
  console.log(require('util').inspect(entries, { depth: null }));
})
