var arp = require('../index')

/**
* Get all ARP entries on interface
* @param  {string} interface
* @return {array}
**/
arp.onInterface('en0', function(entries){
  console.log(require('util').inspect(entries, { depth: null }));
})
