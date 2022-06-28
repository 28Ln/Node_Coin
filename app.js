
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
// ⚡ 接口工具，用于统一返回接口
const apiUtils = require('./utils/apiUtils')
// ⚡ 定时更新币种价格工具
const intervalUpdateCoinPricesUtils = require('./utils/intervalUpdateCoinPricesUtils')
// ⚡ Websocket Server
var webscoket_module = require('./websocket/webscoket_server_module');
// ⚡ 日志工具
const Log = require('./utils/loggerUtils')
//********************************//
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors())
app.all("/*", function (req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})
//********************************//
app.get('/', function (req, res) {
    // console.log('req=',req)
    apiUtils.sendSuccessMsg(res, {
        version: 'V1.0.0',
        name: '启动成功！'
    }, {
        "code": 200,
        "message": "OK",
        "data": [

            {
                "name": "Ethereum",
                "symbol": "ETH",
                "price_usd": "1154.8",
                "change_usd_24h": "4.9856838295989565"
            },
            {
                "name": "Bitcoin",
                "symbol": "BTC",
                "price_usd": "20938",
                "change_usd_24h": "2.0277418429978566"
            },
            {
                "name": "Tether",
                "symbol": "USDT",
                "price_usd": "1.001",
                "change_usd_24h": "-0.038990790889994895"
            },
            {
                "name": "USD Coin",
                "symbol": "USDC",
                "price_usd": "1.003",
                "change_usd_24h": "0.1752072363545882"
            },
            {
                "name": "BNB",
                "symbol": "BNB",
                "price_usd": "233.11",
                "change_usd_24h": "5.040806055550548"
            },
            {
                "name": "XRP",
                "symbol": "XRP",
                "price_usd": "0.380522",
                "change_usd_24h": "16.25785110713494"
            },
            {
                "name": "Binance USD",
                "symbol": "BUSD",
                "price_usd": "0.999737",
                "change_usd_24h": "0.09273044630539434"
            },
            {
                "name": "Cardano",
                "symbol": "ADA",
                "price_usd": "0.494841",
                "change_usd_24h": "5.288550575099034"
            },
            {
                "name": "Solana",
                "symbol": "SOL",
                "price_usd": "38.39",
                "change_usd_24h": "6.564324000042403"
            },
            {
                "name": "Polkadot",
                "symbol": "DOT",
                "price_usd": "8",
                "change_usd_24h": "6.167551970879449"
            },
            {
                "name": "Dogecoin",
                "symbol": "DOGE",
                "price_usd": "0.06533",
                "change_usd_24h": "2.397445208367365"
            },
            {
                "name": "Dai",
                "symbol": "DAI",
                "price_usd": "1.001",
                "change_usd_24h": "-0.1277002805114093"
            },
            {
                "name": "Shiba Inu",
                "symbol": "SHIB",
                "price_usd": "0.00001033",
                "change_usd_24h": "1.3147854646228043"
            },
            {
                "name": "TRON",
                "symbol": "TRX",
                "price_usd": "0.065279",
                "change_usd_24h": "2.91542671220601"
            },
            {
                "name": "Wrapped Bitcoin",
                "symbol": "WBTC",
                "price_usd": "20938",
                "change_usd_24h": "2.081363210587004"
            },
            {
                "name": "Avalanche",
                "symbol": "AVAX",
                "price_usd": "19.24",
                "change_usd_24h": "10.15935808682788"
            },
            {
                "name": "LEO Token",
                "symbol": "LEO",
                "price_usd": "5.79",
                "change_usd_24h": "-2.5302164360211443"
            },
            {
                "name": "Polygon",
                "symbol": "MATIC",
                "price_usd": "0.590368",
                "change_usd_24h": "19.48404554890747"
            },
            {
                "name": "Lido Staked Ether",
                "symbol": "STETH",
                "price_usd": "1109.14",
                "change_usd_24h": "6.696019106259074"
            },
            {
                "name": "Litecoin",
                "symbol": "LTC",
                "price_usd": "55.58",
                "change_usd_24h": "1.4374906330096204"
            },
            {
                "name": "FTX",
                "symbol": "FTT",
                "price_usd": "25.7",
                "change_usd_24h": "0.02220255931204093"
            },
            {
                "name": "Chainlink",
                "symbol": "LINK",
                "price_usd": "7.11",
                "change_usd_24h": "3.2728670027657913"
            },
            {
                "name": "OKB",
                "symbol": "OKB",
                "price_usd": "12.49",
                "change_usd_24h": "9.760119923094404"
            },
            {
                "name": "Stellar",
                "symbol": "XLM",
                "price_usd": "0.128075",
                "change_usd_24h": "9.300993958808933"
            },
            {
                "name": "Cronos",
                "symbol": "CRO",
                "price_usd": "0.121667",
                "change_usd_24h": "3.1990462204719523"
            },
            {
                "name": "NEAR Protocol",
                "symbol": "NEAR",
                "price_usd": "3.71",
                "change_usd_24h": "8.26190371126971"
            },
            {
                "name": "Uniswap",
                "symbol": "UNI",
                "price_usd": "5.48",
                "change_usd_24h": "4.99354375064753"
            },
            {
                "name": "Cosmos Hub",
                "symbol": "ATOM",
                "price_usd": "8.27",
                "change_usd_24h": "8.174062441537739"
            },
            {
                "name": "Algorand",
                "symbol": "ALGO",
                "price_usd": "0.347932",
                "change_usd_24h": "8.110804131217476"
            },
            {
                "name": "Monero",
                "symbol": "XMR",
                "price_usd": "125.53",
                "change_usd_24h": "7.334278680751289"
            },
            {
                "name": "Bitcoin Cash",
                "symbol": "BCH",
                "price_usd": "118.77",
                "change_usd_24h": "2.577629427301326"
            },
            {
                "name": "Ethereum Classic",
                "symbol": "ETC",
                "price_usd": "16.26",
                "change_usd_24h": "4.615072376141781"
            },
            {
                "name": "Theta Fuel",
                "symbol": "TFUEL",
                "price_usd": "0.054696",
                "change_usd_24h": "5.314407528314024"
            },
            {
                "name": "Chain",
                "symbol": "XCN",
                "price_usd": "0.086222",
                "change_usd_24h": "-1.3600880697304851"
            },
            {
                "name": "VeChain",
                "symbol": "VET",
                "price_usd": "0.02467539",
                "change_usd_24h": "5.053463558696879"
            },
            {
                "name": "Flow",
                "symbol": "FLOW",
                "price_usd": "1.63",
                "change_usd_24h": "4.906534958402881"
            },
            {
                "name": "Hedera",
                "symbol": "HBAR",
                "price_usd": "0.074103",
                "change_usd_24h": "1.969613445472955"
            },
            {
                "name": "Axie Infinity",
                "symbol": "AXS",
                "price_usd": "17.22",
                "change_usd_24h": "19.429808985010805"
            },
            {
                "name": "Internet Computer",
                "symbol": "ICP",
                "price_usd": "5.86",
                "change_usd_24h": "3.5015558501904245"
            },
            {
                "name": "Elrond",
                "symbol": "EGLD",
                "price_usd": "62.16",
                "change_usd_24h": "5.657575241287735"
            },
            {
                "name": "Theta Network",
                "symbol": "THETA",
                "price_usd": "1.4",
                "change_usd_24h": "9.754663152824147"
            },
            {
                "name": "Frax",
                "symbol": "FRAX",
                "price_usd": "0.999646",
                "change_usd_24h": "0.045794440440674176"
            },
            {
                "name": "Decentraland",
                "symbol": "MANA",
                "price_usd": "0.909365",
                "change_usd_24h": "3.18226424237717"
            },
            {
                "name": "The Sandbox",
                "symbol": "SAND",
                "price_usd": "1.057",
                "change_usd_24h": "6.671659501996896"
            },
            {
                "name": "ApeCoin",
                "symbol": "APE",
                "price_usd": "4.41",
                "change_usd_24h": "3.5761199045805285"
            },
            {
                "name": "Tezos",
                "symbol": "XTZ",
                "price_usd": "1.47",
                "change_usd_24h": "5.694102793127379"
            },
            {
                "name": "Filecoin",
                "symbol": "FIL",
                "price_usd": "5.85",
                "change_usd_24h": "2.078656666286874"
            },
            {
                "name": "Bitcoin SV",
                "symbol": "BSV",
                "price_usd": "64.82",
                "change_usd_24h": "3.4266093914213944"
            },
            {
                "name": "TrueUSD",
                "symbol": "TUSD",
                "price_usd": "1.001",
                "change_usd_24h": "0.08370001115346028"
            },
            {
                "name": "Helium",
                "symbol": "HNT",
                "price_usd": "10.69",
                "change_usd_24h": "2.5056705866165445"
            },
            {
                "name": "KuCoin",
                "symbol": "KCS",
                "price_usd": "10.72",
                "change_usd_24h": "3.710586523230356"
            },
            {
                "name": "EOS",
                "symbol": "EOS",
                "price_usd": "0.992712",
                "change_usd_24h": "3.9304972563143235"
            },
            {
                "name": "Aave",
                "symbol": "AAVE",
                "price_usd": "66.22",
                "change_usd_24h": "-2.037698937587027"
            },
            {
                "name": "cUSDC",
                "symbol": "CUSDC",
                "price_usd": "0.02266046",
                "change_usd_24h": "0.009509587283292511"
            },
            {
                "name": "Maker",
                "symbol": "MKR",
                "price_usd": "977.33",
                "change_usd_24h": "5.299983643994692"
            },
            {
                "name": "Pax Dollar",
                "symbol": "USDP",
                "price_usd": "1.001",
                "change_usd_24h": "0.16481364569768098"
            },
            {
                "name": "Huobi",
                "symbol": "HT",
                "price_usd": "5.51",
                "change_usd_24h": "6.203764305050574"
            },
            {
                "name": "IOTA",
                "symbol": "MIOTA",
                "price_usd": "0.304575",
                "change_usd_24h": "-0.40016274491747944"
            },
            {
                "name": "The Graph",
                "symbol": "GRT",
                "price_usd": "0.112124",
                "change_usd_24h": "0.9069027070830672"
            },
            {
                "name": "Zcash",
                "symbol": "ZEC",
                "price_usd": "65.11",
                "change_usd_24h": "0.9316219691993026"
            },
            {
                "name": "BitTorrent",
                "symbol": "BTT",
                "price_usd": "0.000000873752",
                "change_usd_24h": "9.851659050391824"
            },
            {
                "name": "Huobi BTC",
                "symbol": "HBTC",
                "price_usd": "20833",
                "change_usd_24h": "-0.3118053427580564"
            },
            {
                "name": "eCash",
                "symbol": "XEC",
                "price_usd": "0.00004177",
                "change_usd_24h": "9.107151740270652"
            },
            {
                "name": "Neutrino USD",
                "symbol": "USDN",
                "price_usd": "0.995478",
                "change_usd_24h": "0.14252219100658392"
            },
            {
                "name": "cETH",
                "symbol": "CETH",
                "price_usd": "23.27",
                "change_usd_24h": "4.657844853572632"
            },
            {
                "name": "Tenset",
                "symbol": "10SET",
                "price_usd": "3.79",
                "change_usd_24h": "18.678618656470412"
            },
            {
                "name": "Quant",
                "symbol": "QNT",
                "price_usd": "55.31",
                "change_usd_24h": "1.0400089540317696"
            },
            {
                "name": "Klaytn",
                "symbol": "KLAY",
                "price_usd": "0.252816",
                "change_usd_24h": "2.353089176627231"
            },
            {
                "name": "USDD",
                "symbol": "USDD",
                "price_usd": "0.977823",
                "change_usd_24h": "0.2526754821378496"
            },
            {
                "name": "Fantom",
                "symbol": "FTM",
                "price_usd": "0.273567",
                "change_usd_24h": "2.4821622767832974"
            },
            {
                "name": "Synthetix Network",
                "symbol": "SNX",
                "price_usd": "2.99",
                "change_usd_24h": "-0.5649649892155563"
            },
            {
                "name": "NEO",
                "symbol": "NEO",
                "price_usd": "9.49",
                "change_usd_24h": "3.582506544383499"
            },
            {
                "name": "Radix",
                "symbol": "XRD",
                "price_usd": "0.067464",
                "change_usd_24h": "3.6022155442605626"
            },
            {
                "name": "Zilliqa",
                "symbol": "ZIL",
                "price_usd": "0.04566608",
                "change_usd_24h": "11.967664776152024"
            },
            {
                "name": "THORChain",
                "symbol": "RUNE",
                "price_usd": "2.19",
                "change_usd_24h": "11.348028256957662"
            },
            {
                "name": "Basic Attention",
                "symbol": "BAT",
                "price_usd": "0.432027",
                "change_usd_24h": "12.160337674002417"
            },
            {
                "name": "Waves",
                "symbol": "WAVES",
                "price_usd": "6.38",
                "change_usd_24h": "0.9065612797577212"
            },
            {
                "name": "Gate",
                "symbol": "GT",
                "price_usd": "4.25",
                "change_usd_24h": "0.4954390607578156"
            },
            {
                "name": "cDAI",
                "symbol": "CDAI",
                "price_usd": "0.02206501",
                "change_usd_24h": "-0.059488030338822113"
            },
            {
                "name": "PAX Gold",
                "symbol": "PAXG",
                "price_usd": "1829.48",
                "change_usd_24h": "-0.3064044039516074"
            },
            {
                "name": "DeFiChain",
                "symbol": "DFI",
                "price_usd": "1.011",
                "change_usd_24h": "2.1266641567064433"
            },
            {
                "name": "Dash",
                "symbol": "DASH",
                "price_usd": "49.64",
                "change_usd_24h": "5.589081126988613"
            },
            {
                "name": "Chiliz",
                "symbol": "CHZ",
                "price_usd": "0.100035",
                "change_usd_24h": "4.539773665199537"
            },
            {
                "name": "Loopring",
                "symbol": "LRC",
                "price_usd": "0.412015",
                "change_usd_24h": "4.48564632218397"
            },
            {
                "name": "TitanSwap",
                "symbol": "TITAN",
                "price_usd": "5",
                "change_usd_24h": "7.866730515151982"
            },
            {
                "name": "Kusama",
                "symbol": "KSM",
                "price_usd": "55.68",
                "change_usd_24h": "4.165742663846734"
            },
            {
                "name": "BitDAO",
                "symbol": "BIT",
                "price_usd": "0.443968",
                "change_usd_24h": "4.577355589596383"
            },
            {
                "name": "PancakeSwap",
                "symbol": "CAKE",
                "price_usd": "3.28",
                "change_usd_24h": "5.303875979978817"
            },
            {
                "name": "Arweave",
                "symbol": "AR",
                "price_usd": "9.87",
                "change_usd_24h": "4.013075862551649"
            },
            {
                "name": "Enjin Coin",
                "symbol": "ENJ",
                "price_usd": "0.527151",
                "change_usd_24h": "2.9459028050622735"
            },
            {
                "name": "STEPN",
                "symbol": "GMT",
                "price_usd": "0.810857",
                "change_usd_24h": "3.8117022255317163"
            },
            {
                "name": "Amp",
                "symbol": "AMP",
                "price_usd": "0.00959004",
                "change_usd_24h": "1.2528022873578566"
            },
            {
                "name": "Tether Gold",
                "symbol": "XAUT",
                "price_usd": "1866.49",
                "change_usd_24h": "0.4788673547238695"
            },
            {
                "name": "Gala",
                "symbol": "GALA",
                "price_usd": "0.059617",
                "change_usd_24h": "5.081165148252037"
            },
            {
                "name": "Celsius Network",
                "symbol": "CEL",
                "price_usd": "1.039",
                "change_usd_24h": "11.621593913031068"
            },
            {
                "name": "Evmos",
                "symbol": "EVMOS",
                "price_usd": "2.15",
                "change_usd_24h": "5.29746233937291"
            },
            {
                "name": "FLEX Coin",
                "symbol": "FLEX",
                "price_usd": "4.3",
                "change_usd_24h": "-3.461483458422824"
            },
            {
                "name": "Stacks",
                "symbol": "STX",
                "price_usd": "0.401483",
                "change_usd_24h": "2.0862755219617486"
            },
            {
                "name": "Celo",
                "symbol": "CELO",
                "price_usd": "0.933709",
                "change_usd_24h": "4.462492690925495"
            },
            {
                "name": "Holo",
                "symbol": "HOT",
                "price_usd": "0.00228506",
                "change_usd_24h": "4.150083082647506"
            },
            {
                "name": "Fei USD",
                "symbol": "FEI",
                "price_usd": "0.99986",
                "change_usd_24h": "-0.0320620778246135"
            },
            {
                "name": "Kava",
                "symbol": "KAVA",
                "price_usd": "1.84",
                "change_usd_24h": "6.7902819311097495"
            },
            {
                "name": "NEXO",
                "symbol": "NEXO",
                "price_usd": "0.689373",
                "change_usd_24h": "-2.9280917683847143"
            },
            {
                "name": "1inch",
                "symbol": "1INCH",
                "price_usd": "0.709662",
                "change_usd_24h": "2.3765858306963197"
            },
            {
                "name": "NEM",
                "symbol": "XEM",
                "price_usd": "0.04198209",
                "change_usd_24h": "2.18678441137714"
            },
            {
                "name": "Maiar DEX",
                "symbol": "MEX",
                "price_usd": "0.0000687",
                "change_usd_24h": "5.105882114321888"
            },
            {
                "name": "XDC Network",
                "symbol": "XDC",
                "price_usd": "0.03000632",
                "change_usd_24h": "2.077529655731096"
            },
            {
                "name": "Frax Share",
                "symbol": "FXS",
                "price_usd": "5.22",
                "change_usd_24h": "1.8228710401808925"
            },
            {
                "name": "Mina Protocol",
                "symbol": "MINA",
                "price_usd": "0.64236",
                "change_usd_24h": "1.8994046264317852"
            },
            {
                "name": "Osmosis",
                "symbol": "OSMO",
                "price_usd": "0.873782",
                "change_usd_24h": "7.432453482059281"
            },
            {
                "name": "IOST",
                "symbol": "IOST",
                "price_usd": "0.01503295",
                "change_usd_24h": "1.4250433839138539"
            },
            {
                "name": "Decred",
                "symbol": "DCR",
                "price_usd": "24.3",
                "change_usd_24h": "2.2820410073730706"
            },
            {
                "name": "ECOMI",
                "symbol": "OMI",
                "price_usd": "0.00127224",
                "change_usd_24h": "5.877380967006756"
            },
            {
                "name": "SafeMoon",
                "symbol": "SFM",
                "price_usd": "0.00058695",
                "change_usd_24h": "10.671278231421958"
            },
            {
                "name": "Kadena",
                "symbol": "KDA",
                "price_usd": "1.73",
                "change_usd_24h": "1.978839406618755"
            },
            {
                "name": "Curve DAO",
                "symbol": "CRV",
                "price_usd": "0.812309",
                "change_usd_24h": "7.054442571587545"
            },
            {
                "name": "Qtum",
                "symbol": "QTUM",
                "price_usd": "3.04",
                "change_usd_24h": "6.355844214708978"
            },
            {
                "name": "OKC",
                "symbol": "OKT",
                "price_usd": "19.21",
                "change_usd_24h": "4.728344005470701"
            },
            {
                "name": "Gnosis",
                "symbol": "GNO",
                "price_usd": "119.53",
                "change_usd_24h": "5.2923543977027"
            },
            {
                "name": "Bitcoin Gold",
                "symbol": "BTG",
                "price_usd": "17.29",
                "change_usd_24h": "3.303298803534882"
            },
            {
                "name": "Trust Wallet",
                "symbol": "TWT",
                "price_usd": "0.859919",
                "change_usd_24h": "-0.6008610145250467"
            },
            {
                "name": "Serum",
                "symbol": "SRM",
                "price_usd": "0.919085",
                "change_usd_24h": "4.928682409396577"
            },
            {
                "name": "Olympus",
                "symbol": "OHM",
                "price_usd": "14.08",
                "change_usd_24h": "2.5381406548932577"
            },
            {
                "name": "Harmony",
                "symbol": "ONE",
                "price_usd": "0.02401087",
                "change_usd_24h": "-11.209116305658263"
            },
            {
                "name": "Compound",
                "symbol": "COMP",
                "price_usd": "42.58",
                "change_usd_24h": "0.9268599467474664"
            },
            {
                "name": "Convex Finance",
                "symbol": "CVX",
                "price_usd": "4.51",
                "change_usd_24h": "1.322437872807692"
            },
            {
                "name": "SafeMoon [OLD]",
                "symbol": "SAFEMOON",
                "price_usd": "0.000000004164",
                "change_usd_24h": "4.98031595826919"
            },
            {
                "name": "Tokenize Xchange",
                "symbol": "TKX",
                "price_usd": "3.45",
                "change_usd_24h": "5.767236242588174"
            },
            {
                "name": "OMG Network",
                "symbol": "OMG",
                "price_usd": "1.96",
                "change_usd_24h": "4.593124214322099"
            },
            {
                "name": "Audius",
                "symbol": "AUDIO",
                "price_usd": "0.380708",
                "change_usd_24h": "8.906542491934326"
            },
            {
                "name": "Ravencoin",
                "symbol": "RVN",
                "price_usd": "0.0239486",
                "change_usd_24h": "9.741783518384995"
            },
            {
                "name": "Oasis Network",
                "symbol": "ROSE",
                "price_usd": "0.053804",
                "change_usd_24h": "2.1318271980268104"
            },
            {
                "name": "IoTeX",
                "symbol": "IOTX",
                "price_usd": "0.02867127",
                "change_usd_24h": "0.8393347579419125"
            },
            {
                "name": "Marinade staked SOL",
                "symbol": "MSOL",
                "price_usd": "40.35",
                "change_usd_24h": "6.594036805574041"
            },
            {
                "name": "Songbird",
                "symbol": "SGB",
                "price_usd": "0.03145528",
                "change_usd_24h": "5.171860430957521"
            },
            {
                "name": "Nexus Mutual",
                "symbol": "NXM",
                "price_usd": "37.62",
                "change_usd_24h": "5.232046588231137"
            },
            {
                "name": "Ankr",
                "symbol": "ANKR",
                "price_usd": "0.03100353",
                "change_usd_24h": "3.490078021605994"
            },
            {
                "name": "0x",
                "symbol": "ZRX",
                "price_usd": "0.292478",
                "change_usd_24h": "3.137477870559259"
            },
            {
                "name": "Lido DAO",
                "symbol": "LDO",
                "price_usd": "0.556622",
                "change_usd_24h": "3.96300167987235"
            },
            {
                "name": "Cube Network",
                "symbol": "CUBE",
                "price_usd": "5.05",
                "change_usd_24h": "-14.706563527774815"
            },
            {
                "name": "Golem",
                "symbol": "GLM",
                "price_usd": "0.243032",
                "change_usd_24h": "3.4995767617778464"
            },
            {
                "name": "Terra",
                "symbol": "LUNA",
                "price_usd": "1.91",
                "change_usd_24h": "-2.4498107326226317"
            },
            {
                "name": "Sushi",
                "symbol": "SUSHI",
                "price_usd": "1.24",
                "change_usd_24h": "-0.6549336270309518"
            },
            {
                "name": "Ethereum Name Service",
                "symbol": "ENS",
                "price_usd": "9.3",
                "change_usd_24h": "3.0809391852867787"
            },
            {
                "name": "Baby Doge Coin",
                "symbol": "BABYDOGE",
                "price_usd": "0.000000001443",
                "change_usd_24h": "3.6523927661241897"
            },
            {
                "name": "Escoin",
                "symbol": "ELG",
                "price_usd": "3.47",
                "change_usd_24h": "0.2600302053416061"
            },
            {
                "name": "ICON",
                "symbol": "ICX",
                "price_usd": "0.292298",
                "change_usd_24h": "3.220700499232574"
            },
            {
                "name": "WOO Network",
                "symbol": "WOO",
                "price_usd": "0.216364",
                "change_usd_24h": "6.46329532160274"
            },
            {
                "name": "Livepeer",
                "symbol": "LPT",
                "price_usd": "8.81",
                "change_usd_24h": "6.721330019068306"
            },
            {
                "name": "LINK",
                "symbol": "LN",
                "price_usd": "36.7",
                "change_usd_24h": "3.402038449193305"
            },
            {
                "name": "Euro Tether",
                "symbol": "EURT",
                "price_usd": "1.059",
                "change_usd_24h": "0.3823428436339792"
            },
            {
                "name": "JUST",
                "symbol": "JST",
                "price_usd": "0.02964509",
                "change_usd_24h": "4.099365149199318"
            },
            {
                "name": "NuCypher",
                "symbol": "NU",
                "price_usd": "0.174506",
                "change_usd_24h": "1.6918893407921378"
            },
            {
                "name": "Bitkub Coin",
                "symbol": "KUB",
                "price_usd": "2.4",
                "change_usd_24h": "0.7504664443301958"
            },
            {
                "name": "Ontology",
                "symbol": "ONT",
                "price_usd": "0.243278",
                "change_usd_24h": "3.359872010181513"
            },
            {
                "name": "Xido Finance",
                "symbol": "XIDO",
                "price_usd": "7.4",
                "change_usd_24h": "-3.3817157456710176"
            },
            {
                "name": "SXP",
                "symbol": "SXP",
                "price_usd": "0.434533",
                "change_usd_24h": "3.954299595809607"
            },
            {
                "name": "Siacoin",
                "symbol": "SC",
                "price_usd": "0.00412649",
                "change_usd_24h": "4.9532051157328505"
            },
            {
                "name": "Everdome",
                "symbol": "DOME",
                "price_usd": "0.00974329",
                "change_usd_24h": "-0.42806362074484466"
            },
            {
                "name": "MXC",
                "symbol": "MXC",
                "price_usd": "0.08442",
                "change_usd_24h": "11.081960966390305"
            },
            {
                "name": "WAX",
                "symbol": "WAXP",
                "price_usd": "0.095837",
                "change_usd_24h": "5.864561551655447"
            },
            {
                "name": "SKALE",
                "symbol": "SKL",
                "price_usd": "0.056998",
                "change_usd_24h": "7.282156053890508"
            },
            {
                "name": "Moonbeam",
                "symbol": "GLMR",
                "price_usd": "0.65721",
                "change_usd_24h": "5.087421765346266"
            },
            {
                "name": "SwissBorg",
                "symbol": "CHSB",
                "price_usd": "0.210244",
                "change_usd_24h": "13.032702820159855"
            },
            {
                "name": "Immutable X",
                "symbol": "IMX",
                "price_usd": "0.834129",
                "change_usd_24h": "2.9598214714745232"
            },
            {
                "name": "Magic Internet Money",
                "symbol": "MIM",
                "price_usd": "0.98916",
                "change_usd_24h": "0.07110997337040079"
            },
            {
                "name": "Coinmetro",
                "symbol": "XCM",
                "price_usd": "0.633937",
                "change_usd_24h": "0.5734048620043657"
            },
            {
                "name": "Constellation",
                "symbol": "DAG",
                "price_usd": "0.073525",
                "change_usd_24h": "2.6547113587194855"
            },
            {
                "name": "Convex CRV",
                "symbol": "CVXCRV",
                "price_usd": "0.792048",
                "change_usd_24h": "6.427647395434216"
            },
            {
                "name": "Horizen",
                "symbol": "ZEN",
                "price_usd": "15.01",
                "change_usd_24h": "4.08850564336485"
            },
            {
                "name": "Alchemix USD",
                "symbol": "ALUSD",
                "price_usd": "0.991302",
                "change_usd_24h": "-0.07517769887365275"
            },
            {
                "name": "LooksRare",
                "symbol": "LOOKS",
                "price_usd": "0.398768",
                "change_usd_24h": "6.390045138531308"
            },
            {
                "name": "Astar",
                "symbol": "ASTR",
                "price_usd": "0.04776",
                "change_usd_24h": "4.822837309713458"
            },
            {
                "name": "Balancer",
                "symbol": "BAL",
                "price_usd": "5.27",
                "change_usd_24h": "12.016403928063612"
            },
            {
                "name": "Gemini Dollar",
                "symbol": "GUSD",
                "price_usd": "1.002",
                "change_usd_24h": "0.24154388644751107"
            },
            {
                "name": "Polymath",
                "symbol": "POLY",
                "price_usd": "0.198389",
                "change_usd_24h": "3.9435485742989758"
            },
            {
                "name": "Secret",
                "symbol": "SCRT",
                "price_usd": "1.023",
                "change_usd_24h": "2.4601420546559662"
            },
            {
                "name": "APENFT",
                "symbol": "NFT",
                "price_usd": "0.000000637869",
                "change_usd_24h": "-0.15739879844287583"
            },
            {
                "name": "yearn.finance",
                "symbol": "YFI",
                "price_usd": "5434.58",
                "change_usd_24h": "4.980179133984612"
            },
            {
                "name": "UMA",
                "symbol": "UMA",
                "price_usd": "2.54",
                "change_usd_24h": "1.7053906606170728"
            },
            {
                "name": "HUSD",
                "symbol": "HUSD",
                "price_usd": "1.002",
                "change_usd_24h": "0.19995606563431872"
            },
            {
                "name": "Chia",
                "symbol": "XCH",
                "price_usd": "42.09",
                "change_usd_24h": "-4.649952113256281"
            },
            {
                "name": "flexUSD",
                "symbol": "FLEXUSD",
                "price_usd": "0.853409",
                "change_usd_24h": "-12.051074967002263"
            },
            {
                "name": "Reserve Rights",
                "symbol": "RSR",
                "price_usd": "0.00901636",
                "change_usd_24h": "1.7097029586500077"
            },
            {
                "name": "Liquity USD",
                "symbol": "LUSD",
                "price_usd": "1.019",
                "change_usd_24h": "-0.4941279503077494"
            },
            {
                "name": "Smooth Love Potion",
                "symbol": "SLP",
                "price_usd": "0.00408601",
                "change_usd_24h": "5.812394450991846"
            },
            {
                "name": "DigiByte",
                "symbol": "DGB",
                "price_usd": "0.01054341",
                "change_usd_24h": "6.526716247476763"
            },
            {
                "name": "Rocket Pool",
                "symbol": "RPL",
                "price_usd": "9.93",
                "change_usd_24h": "4.337870819385692"
            },
            {
                "name": "dYdX",
                "symbol": "DYDX",
                "price_usd": "1.57",
                "change_usd_24h": "10.419946840560241"
            },
            {
                "name": "PlayDapp",
                "symbol": "PLA",
                "price_usd": "0.368956",
                "change_usd_24h": "5.940778971373834"
            },
            {
                "name": "Lisk",
                "symbol": "LSK",
                "price_usd": "1.078",
                "change_usd_24h": "2.1437638286935314"
            },
            {
                "name": "JUNO",
                "symbol": "JUNO",
                "price_usd": "2.88",
                "change_usd_24h": "10.044895027566929"
            },
            {
                "name": "Dogelon Mars",
                "symbol": "ELON",
                "price_usd": "0.000000280508",
                "change_usd_24h": "5.52586990344626"
            },
            {
                "name": "Hive",
                "symbol": "HIVE",
                "price_usd": "0.402148",
                "change_usd_24h": "3.131429556348568"
            },
            {
                "name": "Render",
                "symbol": "RNDR",
                "price_usd": "0.578341",
                "change_usd_24h": "0.4040424402841387"
            },
            {
                "name": "Kyber Network Crystal",
                "symbol": "KNC",
                "price_usd": "1.41",
                "change_usd_24h": "3.5054575749595953"
            },
            {
                "name": "Casper Network",
                "symbol": "CSPR",
                "price_usd": "0.02762817",
                "change_usd_24h": "2.623793201332215"
            },
            {
                "name": "Kunci Coin",
                "symbol": "KUNCI",
                "price_usd": "0.121277",
                "change_usd_24h": "4.041244258003899"
            },
            {
                "name": "Everscale",
                "symbol": "EVER",
                "price_usd": "0.115699",
                "change_usd_24h": "-1.072581179698521"
            },
            {
                "name": "Rally",
                "symbol": "RLY",
                "price_usd": "0.04579469",
                "change_usd_24h": "22.384186453519497"
            },
            {
                "name": "Pocket Network",
                "symbol": "POKT",
                "price_usd": "0.123517",
                "change_usd_24h": "5.716790511891741"
            },
            {
                "name": "PLEX",
                "symbol": "PLEX",
                "price_usd": "0.50787",
                "change_usd_24h": "-7.290264104973929"
            },
            {
                "name": "Bancor Network",
                "symbol": "BNT",
                "price_usd": "0.520116",
                "change_usd_24h": "0.8359204076454907"
            },
            {
                "name": "GMX",
                "symbol": "GMX",
                "price_usd": "17.22",
                "change_usd_24h": "1.158874039449268"
            },
            {
                "name": "MX",
                "symbol": "MX",
                "price_usd": "1.33",
                "change_usd_24h": "-2.840881196292354"
            },
            {
                "name": "Storj",
                "symbol": "STORJ",
                "price_usd": "0.918066",
                "change_usd_24h": "30.972701669275814"
            },
            {
                "name": "PlatonCoin",
                "symbol": "PLTC",
                "price_usd": "1.15",
                "change_usd_24h": "0.4981838075079932"
            },
            {
                "name": "STASIS EURO",
                "symbol": "EURS",
                "price_usd": "1.051",
                "change_usd_24h": "0.5294691694311141"
            },
            {
                "name": "Origin Protocol",
                "symbol": "OGN",
                "price_usd": "0.255509",
                "change_usd_24h": "0.5736164267155606"
            },
            {
                "name": "DAO Maker",
                "symbol": "DAO",
                "price_usd": "1.31",
                "change_usd_24h": "3.826217487078292"
            },
            {
                "name": "Orbs",
                "symbol": "ORBS",
                "price_usd": "0.0428899",
                "change_usd_24h": "2.4770677507760053"
            },
            {
                "name": "ConstitutionDAO",
                "symbol": "PEOPLE",
                "price_usd": "0.02447668",
                "change_usd_24h": "-2.5070508243687084"
            },
            {
                "name": "Voyager VGX",
                "symbol": "VGX",
                "price_usd": "0.418325",
                "change_usd_24h": "-6.920997074343388"
            },
            {
                "name": "REN",
                "symbol": "REN",
                "price_usd": "0.121446",
                "change_usd_24h": "8.894852714439743"
            },
            {
                "name": "Chromia",
                "symbol": "CHR",
                "price_usd": "0.21397",
                "change_usd_24h": "4.440376544148118"
            },
            {
                "name": "renBTC",
                "symbol": "RENBTC",
                "price_usd": "20942",
                "change_usd_24h": "2.049644387358952"
            },
            {
                "name": "Kirobo",
                "symbol": "KIRO",
                "price_usd": "0.03021522",
                "change_usd_24h": "3.710388622293168"
            },
            {
                "name": "Status",
                "symbol": "SNT",
                "price_usd": "0.03017926",
                "change_usd_24h": "4.7667776935940065"
            },
            {
                "name": "VVS Finance",
                "symbol": "VVS",
                "price_usd": "0.00000622",
                "change_usd_24h": "3.4039740466203616"
            },
            {
                "name": "Medibloc",
                "symbol": "MED",
                "price_usd": "0.02192767",
                "change_usd_24h": "2.2013877652721443"
            },
            {
                "name": "Iron Bank EURO",
                "symbol": "IBEUR",
                "price_usd": "0.983107",
                "change_usd_24h": "-0.8369706658416638"
            },
            {
                "name": "Nervos Network",
                "symbol": "CKB",
                "price_usd": "0.00354052",
                "change_usd_24h": "1.5436927766457185"
            },
            {
                "name": "Optimism",
                "symbol": "OP",
                "price_usd": "0.543638",
                "change_usd_24h": "8.48795695699428"
            },
            {
                "name": "Acala",
                "symbol": "ACA",
                "price_usd": "0.267644",
                "change_usd_24h": "3.056358942915717"
            },
            {
                "name": "Pundi X",
                "symbol": "PUNDIX",
                "price_usd": "0.451445",
                "change_usd_24h": "-3.6099402150440802"
            },
            {
                "name": "Radio Caca",
                "symbol": "RACA",
                "price_usd": "0.00038321",
                "change_usd_24h": "1.4003700843494342"
            },
            {
                "name": "CEEK Smart VR",
                "symbol": "CEEK",
                "price_usd": "0.145718",
                "change_usd_24h": "2.231140508561448"
            },
            {
                "name": "WINkLink",
                "symbol": "WIN",
                "price_usd": "0.00011789",
                "change_usd_24h": "6.387446750397212"
            },
            {
                "name": "Synapse",
                "symbol": "SYN",
                "price_usd": "0.611719",
                "change_usd_24h": "4.844028268485413"
            },
            {
                "name": "Ergo",
                "symbol": "ERG",
                "price_usd": "2",
                "change_usd_24h": "1.4264106782297772"
            },
            {
                "name": "Revain",
                "symbol": "REV",
                "price_usd": "0.00132758",
                "change_usd_24h": "-0.5134948406042575"
            },
            {
                "name": "Nano",
                "symbol": "XNO",
                "price_usd": "0.841457",
                "change_usd_24h": "3.4420669128536954"
            },
            {
                "name": "Illuvium",
                "symbol": "ILV",
                "price_usd": "168.91",
                "change_usd_24h": "3.785845614076683"
            },
            {
                "name": "Flux",
                "symbol": "FLUX",
                "price_usd": "0.464061",
                "change_usd_24h": "3.0347855604304708"
            },
            {
                "name": "Energy Web",
                "symbol": "EWT",
                "price_usd": "2.58",
                "change_usd_24h": "3.4502025325262355"
            },
            {
                "name": "CoinEx",
                "symbol": "CET",
                "price_usd": "0.03093703",
                "change_usd_24h": "0.8481889448253075"
            },
            {
                "name": "Persistence",
                "symbol": "XPRT",
                "price_usd": "1.023",
                "change_usd_24h": "-4.356290784411905"
            },
            {
                "name": "e-Radix",
                "symbol": "EXRD",
                "price_usd": "0.067168",
                "change_usd_24h": "4.540549378822525"
            },
            {
                "name": "Beldex",
                "symbol": "BDX",
                "price_usd": "0.07171",
                "change_usd_24h": "0.48757454512187265"
            },
            {
                "name": "MrWeb Finance",
                "symbol": "AMA",
                "price_usd": "0.01053465",
                "change_usd_24h": "0.1110395430913464"
            },
            {
                "name": "Conflux",
                "symbol": "CFX",
                "price_usd": "0.052862",
                "change_usd_24h": "1.084495611252451"
            },
            {
                "name": "Velas",
                "symbol": "VLX",
                "price_usd": "0.04512405",
                "change_usd_24h": "2.1558353695842567"
            },
            {
                "name": "WazirX",
                "symbol": "WRX",
                "price_usd": "0.2247",
                "change_usd_24h": "-1.5265982522312742"
            },
            {
                "name": "COTI",
                "symbol": "COTI",
                "price_usd": "0.098057",
                "change_usd_24h": "4.839311390543174"
            },
            {
                "name": "Syscoin",
                "symbol": "SYS",
                "price_usd": "0.157441",
                "change_usd_24h": "17.306205323596924"
            },
            {
                "name": "Telcoin",
                "symbol": "TEL",
                "price_usd": "0.0016067",
                "change_usd_24h": "3.3677679189992067"
            },
            {
                "name": "MVL",
                "symbol": "MVL",
                "price_usd": "0.00477597",
                "change_usd_24h": "3.5896451083466"
            },
            {
                "name": "Ardor",
                "symbol": "ARDR",
                "price_usd": "0.101919",
                "change_usd_24h": "3.2213977073812106"
            },
            {
                "name": "XSGD",
                "symbol": "XSGD",
                "price_usd": "0.720419",
                "change_usd_24h": "0.6564842529626225"
            },
            {
                "name": "Coin98",
                "symbol": "C98",
                "price_usd": "0.539586",
                "change_usd_24h": "2.234653488602475"
            },
            {
                "name": "Merit Circle",
                "symbol": "MC",
                "price_usd": "0.769173",
                "change_usd_24h": "5.805558708655174"
            },
            {
                "name": "sUSD",
                "symbol": "SUSD",
                "price_usd": "1.004",
                "change_usd_24h": "0.13348481782937097"
            },
            {
                "name": "Project Galaxy",
                "symbol": "GAL",
                "price_usd": "2.83",
                "change_usd_24h": "3.303079503847147"
            },
            {
                "name": "USDX",
                "symbol": "USDX",
                "price_usd": "0.946695",
                "change_usd_24h": "-0.2549655621539856"
            },
            {
                "name": "Nest Protocol",
                "symbol": "NEST",
                "price_usd": "0.03347732",
                "change_usd_24h": "-0.0039382129086266635"
            },
            {
                "name": "API3",
                "symbol": "API3",
                "price_usd": "1.79",
                "change_usd_24h": "7.889384979805392"
            },
            {
                "name": "Civic",
                "symbol": "CVC",
                "price_usd": "0.144501",
                "change_usd_24h": "3.02183631059002"
            },
            {
                "name": "Function X",
                "symbol": "FX",
                "price_usd": "0.191812",
                "change_usd_24h": "9.865673994826496"
            },
            {
                "name": "Power Ledger",
                "symbol": "POWR",
                "price_usd": "0.223942",
                "change_usd_24h": "2.5158825552441657"
            },
            {
                "name": "Celer Network",
                "symbol": "CELR",
                "price_usd": "0.0167552",
                "change_usd_24h": "7.235593994179301"
            },
            {
                "name": "Keep Network",
                "symbol": "KEEP",
                "price_usd": "0.171858",
                "change_usd_24h": "2.736544046854175"
            },
            {
                "name": "Metal",
                "symbol": "MTL",
                "price_usd": "1.45",
                "change_usd_24h": "-0.10623911995994448"
            },
            {
                "name": "Biswap",
                "symbol": "BSW",
                "price_usd": "0.341785",
                "change_usd_24h": "3.2812634815513366"
            },
            {
                "name": "Hxro",
                "symbol": "HXRO",
                "price_usd": "0.210778",
                "change_usd_24h": "-0.7331223520508968"
            },
            {
                "name": "Cartesi",
                "symbol": "CTSI",
                "price_usd": "0.162443",
                "change_usd_24h": "5.36354071887193"
            },
            {
                "name": "CUBE",
                "symbol": "ITAMCUBE",
                "price_usd": "0.132261",
                "change_usd_24h": "-2.161712324644717"
            },
            {
                "name": "BTSE Token",
                "symbol": "BTSE",
                "price_usd": "4.55",
                "change_usd_24h": "9.025822338073274"
            },
            {
                "name": "Dent",
                "symbol": "DENT",
                "price_usd": "0.0009546",
                "change_usd_24h": "2.954164351936295"
            },
            {
                "name": "MiL.k Alliance",
                "symbol": "MLK",
                "price_usd": "0.392645",
                "change_usd_24h": "3.379933931140523"
            },
            {
                "name": "Injective",
                "symbol": "INJ",
                "price_usd": "1.38",
                "change_usd_24h": "0.9184664602724083"
            },
            {
                "name": "Steem",
                "symbol": "STEEM",
                "price_usd": "0.22674",
                "change_usd_24h": "3.465181320714281"
            },
            {
                "name": "TerraClassicUSD",
                "symbol": "USTC",
                "price_usd": "0.00886182",
                "change_usd_24h": "5.3405299526352135"
            },
            {
                "name": "Maple",
                "symbol": "MPL",
                "price_usd": "14.29",
                "change_usd_24h": "-5.7094428297367"
            },
            {
                "name": "Mobox",
                "symbol": "MBOX",
                "price_usd": "0.615311",
                "change_usd_24h": "1.7058075757542905"
            },
            {
                "name": "GensoKishi Metaverse",
                "symbol": "MV",
                "price_usd": "0.417427",
                "change_usd_24h": "0.577561345721984"
            },
            {
                "name": "Metis",
                "symbol": "METIS",
                "price_usd": "20.18",
                "change_usd_24h": "14.120910759151716"
            },
            {
                "name": "Raydium",
                "symbol": "RAY",
                "price_usd": "0.743084",
                "change_usd_24h": "5.252702187742656"
            },
            {
                "name": "Ocean Protocol",
                "symbol": "OCEAN",
                "price_usd": "0.197345",
                "change_usd_24h": "4.17708427922924"
            },
            {
                "name": "XYO Network",
                "symbol": "XYO",
                "price_usd": "0.00677689",
                "change_usd_24h": "7.143528036363852"
            },
            {
                "name": "inSure DeFi",
                "symbol": "SURE",
                "price_usd": "0.00321349",
                "change_usd_24h": "5.471098757511212"
            },
            {
                "name": "Decentralized Social",
                "symbol": "DESO",
                "price_usd": "8.05",
                "change_usd_24h": "-0.5964937497206131"
            },
            {
                "name": "Pirate Chain",
                "symbol": "ARRR",
                "price_usd": "0.439153",
                "change_usd_24h": "3.7157509591405677"
            },
            {
                "name": "dKargo",
                "symbol": "DKA",
                "price_usd": "0.0484533",
                "change_usd_24h": "1.6624547147304405"
            },
            {
                "name": "xSUSHI",
                "symbol": "XSUSHI",
                "price_usd": "1.65",
                "change_usd_24h": "0.3692475602073302"
            },
            {
                "name": "FUN",
                "symbol": "FUN",
                "price_usd": "0.00771418",
                "change_usd_24h": "1.0089105685337008"
            },
            {
                "name": "Vulcan Forged",
                "symbol": "PYR",
                "price_usd": "3.4",
                "change_usd_24h": "5.186870830167179"
            },
            {
                "name": "Tokamak Network",
                "symbol": "TON",
                "price_usd": "1.86",
                "change_usd_24h": "3.2276904827238098"
            },
            {
                "name": "Ultra",
                "symbol": "UOS",
                "price_usd": "0.292199",
                "change_usd_24h": "7.289266392923762"
            },
            {
                "name": "VeThor",
                "symbol": "VTHO",
                "price_usd": "0.00156192",
                "change_usd_24h": "4.460681179266876"
            },
            {
                "name": "AscendEx",
                "symbol": "ASD",
                "price_usd": "0.105658",
                "change_usd_24h": "-0.5420694386817432"
            },
            {
                "name": "Liquity",
                "symbol": "LQTY",
                "price_usd": "0.997799",
                "change_usd_24h": "0.9493718658139506"
            },
            {
                "name": "OriginTrail",
                "symbol": "TRAC",
                "price_usd": "0.209913",
                "change_usd_24h": "20.961021966219306"
            },
            {
                "name": "LUKSO",
                "symbol": "LYXE",
                "price_usd": "5.16",
                "change_usd_24h": "14.301298226531975"
            },
            {
                "name": "Nerve Finance",
                "symbol": "NRV",
                "price_usd": "0.0069098",
                "change_usd_24h": "-1.8406045438451737"
            },
            {
                "name": "Divi",
                "symbol": "DIVI",
                "price_usd": "0.02627134",
                "change_usd_24h": "2.9308308591644052"
            },
            {
                "name": "Railgun",
                "symbol": "RAIL",
                "price_usd": "1.34",
                "change_usd_24h": "6.417561660651251"
            },
            {
                "name": "Spell",
                "symbol": "SPELL",
                "price_usd": "0.00081689",
                "change_usd_24h": "0.5483800669623317"
            },
            {
                "name": "Biconomy",
                "symbol": "BICO",
                "price_usd": "0.533263",
                "change_usd_24h": "1.063329233107219"
            },
            {
                "name": "Creditcoin",
                "symbol": "CTC",
                "price_usd": "0.3667",
                "change_usd_24h": "17.92893890233304"
            },
            {
                "name": "MaidSafeCoin",
                "symbol": "EMAID",
                "price_usd": "0.175364",
                "change_usd_24h": "7.409194860694774"
            }
        ]
    })

});
//********************************//
app.use('/coin', require(__dirname + '/router/CoinDataApi'));

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    Log.d(`init express http://${host}:${port}`)

})
//********************************//
//intervalUpdateCoinPricesUtils.init()
webscoket_module.init();

