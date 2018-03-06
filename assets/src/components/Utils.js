const builder = require('mongo-sql');

function looseJsonParse(jsString) {
  return Function(`"use strict";return ( ${jsString} );`)();
}

export default function convertMongoToSql(mongoString) {
  try {
    const enclosingText = mongoString.trim().match(/\{([^\b]+)\}/)[0];
    console.log(enclosingText)
    const jsCode = looseJsonParse(enclosingText);

    const result = builder.sql(jsCode);
    const values =
      result.values.length > 0
        ? `\n--Values:\n${result.values.map((v, i) => `--$${i + 1}= ${v || ''}`).join(',\n')}`
        : '';

    return {
      result: result.toString() + values,
      status: true,
      message: 'Query compiled succesfully',
      values: result.values
    };
  } catch (e) {
    return {
      result: '',
      status: false,
      message: `Error: ${e.message}`,
      values: []
    };
  }
}
