import {SWITCH_LANGUAGE} from '../constants';

const defaultLanguage = 'en';

export default function language(lang = defaultLanguage, action) {
  const {type, language} = action;
  switch(type) {
    case SWITCH_LANGUAGE:
      return language;
  }
  return lang;
}