# arp
Node Address Resolution Display and Control

```
 var arp = require('./arp')

 /**
 * Get all ARP entries
 * @return {array} entries
 **/
 arp.entries(function(entries){
   console.log(require('util').inspect(entries, { depth: null }));
 })

 /**
 * Get all ARP entries on interface
 * @param {string} interface
 **/
 arp.onInterface('en0', function(entries){
   console.log(require('util').inspect(entries, { depth: null }));
 })
```
