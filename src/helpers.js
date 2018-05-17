import {Map} from 'immutable';

export function arrToMap(arr, RecordType = Map) {
  return arr.reduce((acc, item) => acc.set(item.id, RecordType(item)), new Map({}));

  // return arr.reduce((acc, item) => {
  //   acc[item.id] = item;
  //   return acc;
  // }, {});
}

export function mapToArr(map) {
  return map.valueSeq().toArray();

  // return Object.keys(obj).map(key => obj[key]);
}