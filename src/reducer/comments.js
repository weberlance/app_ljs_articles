import {normalizedComments as defaultComments} from '../fixtures';
import {arrToMap} from '../helpers';

const mapComments = arrToMap(defaultComments);

export default (commentsState = mapComments, action) => {
  const {type, payload} = action;

  switch(type) {
  }

  return commentsState;
};