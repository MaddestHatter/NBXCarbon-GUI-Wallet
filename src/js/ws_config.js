var config = {};
//Rebase File
// self explanatory, your application name, descriptions, etc
config.appName = 'NBXleather';
config.appDescription = 'NibbleClassic GUI Wallet';
config.appSlogan = 'Everyone loves a little nibble!';
config.appId = 'NBXleather';
config.appGitRepo = 'https://github.com/NibbleClassic/NBXLeather-GUI-Wallet';

// default port number for your daemon (e.g. Nibbled daemon)
config.daemonDefaultRpcPort = 17122;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'nwl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'nibble-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v2.1.1.1";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 17121;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://nbx.cryptonight.mine.nu/explorer/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'nibblenode.net';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://raw.githubusercontent.com/turtlecoin/turtlecoin-nodes-json/master/turtlecoin-nodes.json
// filtered: https://trtl.nodes.pub/api/getNodes
// config.remoteNodeListUpdateUrl = 'https://trtl.nodes.pub/api/getNodes';
config.remoteNodeListUpdateUrl = null;

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'nibblenode.net:17122',
  'node.nbx.hackerknowledge.de:17122',
  'nibble-nibble.net:17122',
  '127.0.0.1:17122'
];

// your currency name
config.assetName = 'NibbleClassic';
// your currency ticker
config.assetTicker = 'NBX';
// your currency address prefix, for address validation
config.addressPrefix = 'Nib';
// standard wallet address length, for address validation
config.addressLength = 98;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces; //Should be 100 here

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'Nibble Developers Funds',
    address: 'Nib1ZHnXbBfUYU5F6VFpVyZEHAQwYW7q5AMEqHhotUY8MgjfpJjshas8PjMCfNpqKs18xxqzjVsbYPr1G2F8NXDL5ff9LUQTRf',
    paymentId: 'DF794857BC4587ECEC911AF6A6AB02513FEA524EC5B98DA8702FAC92195A94B3',
  },
  {
    name: 'Mad´s Development Fund',
    address: 'Nib1XAX8nHgAZzSDoCjd3mAa2di7dGaXh9u9QFVz9tWjCF7iJqTsU23A4r5EcxYw6Z9jZL93Nfob6C57LyiW26VXC57U3tPLbPphpyoUftnh8xVqcVbZYcXY3ahDX7qPo63HKkEfE6gPk3jBDX1vZW5JwxgixXTwz9NGqBP23SeFoypw9iB13Xjn2g',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
