import {OrderedMap, Map} from 'immutable';

export function arrToMap(arr, RecordType = Map) {
  return arr.reduce((acc, item) => acc.set(item.id, RecordType(item)), new OrderedMap({}));
}

export function mapToArr(map) {
  return map.valueSeq().toArray();
}