import {normalizedComments as defaultComments} from '../fixtures';

const mapComments = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc;
}, {});

export default (commentsState = mapComments, action) => {
  const {type, payload} = action;

  switch(type) {
  }

  return commentsState;
};