var cwd = console.log(process.cwd());
var axios = require('axios');
const {stdin, stdout } = require('axios')
var rl = require('readline').createInterface({input, output})

async function main() {
    var versions, builds;
    axios.get('https://api.papermc.io/v2/projects/paper').then(function (r) {
        // String[] ["1.8.8", ... "1.20.2"]
        versions = r.versions
        
    })
    axios.get('')
}
