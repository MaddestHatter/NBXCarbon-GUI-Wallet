var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'NBXleather';
config.appDescription = 'NibbleClassic Wallet';
config.appSlogan = 'Everyone loves a little nibble!';
config.appId = 'NBXleather';
config.appGitRepo = 'https://github.com/Sudosups/NBX-GUI';

// default port number for your daemon (e.g. Nibbled)
config.daemonDefaultRpcPort = 17122;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'nwl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'nibble-service';

// version on the bundled service (nibble-service)
config.walletServiceBinaryVersion = "v1.0.0";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://nibble-block.netlify.com/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '178.62.42.108:17122';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '127.0.0.1:17122',
    '127.0.0.1:17122',
    
];

// your currency name
config.assetName = 'NibbleClassic';
// your currency ticker
config.assetTicker =  'NBX';
// your currency address prefix, for address validation
config.addressPrefix =  'Nib';
// standard wallet address length, for address validation
config.addressLength = 98;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 186;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'Example',
      address: 'Nib1Xt98vT4KJ1Qv6FTeP2HxC2w52iMSDg12WKRrE8L2BPrm79CP9FWgkuMJjhXAbiBXVDDKcZRdD2RET26VrY4J9Tvg64vBvr',
      paymentId: 'DF794857BC4587ECEC911AF6A6AB02513FEA524EC5B98DA8702FAC92195A94B2', 
    
    }
];

module.exports = config;
