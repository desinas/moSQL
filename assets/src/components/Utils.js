const builder = require('mongo-sql');

function looseJsonParse(jsString) {
  return Function(`"use strict";return ( ${jsString} );`)();
}

export default function convertMongoToSql(mongoString) {
  const enclosingText = mongoString.trim().match(/\{([^)]+)\}/)[0];
  const jsCode = looseJsonParse(enclosingText);
  const result = builder.sql(jsCode);
  const values = result.values.length > 0 ? `\n--Values = ${result.values.map((v,i) => `$${i+1}= ${v}`).join(', ')}`: '';
  return result.toString() + values;
}
