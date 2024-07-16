export function formatColumnSetSQL (object)  {
  if (typeof object !== 'object') {
      throw new Error('Invalid input');
  }
  const keys = Object.keys(object);
  const values = Object.values(object);
  const columnsSet = keys.map(key => `${key} = ?`).join(', ');
  return {
      columnsSet,
      values
  };
};

