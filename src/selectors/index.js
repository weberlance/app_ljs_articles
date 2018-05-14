import {createSelector} from 'reselect';

const articlesGetter = state => state.articles;
const filtersGetter = state => state.filterState;

const commentsGetter = state => state.comments;
const commentIdGetter = (state, props) => props.id;

export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filterState) => {
    const {selection, dateRange: {startDate, endDate}} = filterState;
    return articles.filter(article => {
      const publishDate = Date.parse(article.date);
      return (
           // selected
          (!selection.length || selection.includes(article.id)) &&
          // in date range
          (
            (!startDate && !endDate) ||
            ((startDate && !endDate) && (publishDate > startDate)) ||
            ((!startDate && endDate) && (publishDate < endDate)) ||
            (startDate && endDate && (publishDate > startDate && publishDate < endDate))
          )
        );
    });
});

export const commentSelector = createSelector(commentsGetter, commentIdGetter, (comments, id) => {
  return comments[props.id];
});
