export function createObjectListFromMap(map: Map<string, number[]>) {
  const objectsList = [];

  for (const entry of map) {
    objectsList.push({
      name: entry[0],
      data: entry[1]
    });
  }

  return objectsList;
}