export const CONVERT_MONGO_SQL = 'CONVERT_MONGO_SQL';

export function convertMongoSql(mongoString) {
  return {
    type: CONVERT_MONGO_SQL,
    value: mongoString
  };
}
