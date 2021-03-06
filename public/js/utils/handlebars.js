import {moment, Handlebars} from './lib.js';

    Handlebars.registerHelper('isChecked', function (importance, input) {
      return parseInt(importance) === parseInt(input) ? 'checked' : '';
    });

    Handlebars.registerHelper('isDone', function (done) {
      return done === true ? 'checked disabled' : '';
    });

    Handlebars.registerHelper('dateFormat', function (context, block) {
      if (moment) {
        let f = block.hash.format || "YYYY-MMM-DD";
        return moment(context).format(f);
      } else {
        return context;   //  moment plugin not available. return data as is.
      }
    });

    Handlebars.registerHelper('dateFromNow', function (context) {
      if (moment) {
        return moment(context).fromNow();
      } else {
        return context;
      }
    });

    Handlebars.registerHelper('times', function (n, block) {
      let count = '';
      for (let i = 1; i < parseInt(n) + 1; ++i) {
        block.data.index = i;
        count += block.fn(this);
      }
      return count;
    });

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
  return options.inverse(this);
  }
    return options.fn(this);
});

Handlebars.registerHelper('linebreaks', function (text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
  return new Handlebars.SafeString(text);
});