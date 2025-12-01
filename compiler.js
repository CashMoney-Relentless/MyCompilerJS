const tokenizer = require('./tokenizer');
const parser = require('./parser');
const transformer = require('./transformer');
const generateCode = require('./generateCode');
module.exports = function compiler(input) {
    const tokens = tokenizer(input);
    const lispAST = parser(tokens);
    const jsAST = transformer(lispAST);
    const jsCode = generateCode(jsAST);
    return jsCode;
}
