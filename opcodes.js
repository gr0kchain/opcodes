const opcodes = require("bitcoin-ops")

function serialize(filter = false) {
	var data = []
	Object.keys(opcodes).forEach((code) => {
		data.push({code: code, dec: opcodes[code], hex: opcodes[code].toString(16)})
	})
	return data;
}


module.exports = {   
  serialize 
};
