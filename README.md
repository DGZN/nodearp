# arp
Node Address Resolution Display and Control

#### A node implementation of arp utility getter methods.

```
 var arp = require('./arp')

 /**
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
 * @param  {string} interface
 * @return {array}
 **/
 arp.onInterface('en0', function(entries){
   console.log(require('util').inspect(entries, { depth: null }));
 })

 /**
 * Get own ARP entry
 * @return {object}
 **/
 arp.self(function(entry){
   console.log(require('util').inspect(entry, { depth: null }));
 })
```
