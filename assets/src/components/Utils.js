const builder = require('mongo-sql');

export default function convertMongoToSql(mongoString) {
  const jsCode = JSON.parse(mongoString.trim());
  const result = builder.sql(jsCode);
  return result.toString();
}
