/* globals google */

import XYChart from '../lib/g-xychart';
import Ember from 'ember';

export default XYChart.extend({
  classNames: ['g-barchart'],

  packages: Ember.computed ('material', function () {
    let material = this.getWithDefault ('material', false);
    return material ? ['bar'] : ['corechart'];
  }),

  chartOptionsMapping: {
    barGroupWidth: 'bar.groupWidth',
    bars: 'bars',
    isStacked: 'isStacked'
  },

  createChart () {
    let material = this.getWithDefault ('material', false);
    let Chart = material ? google.charts.Bar : google.visualization.BarChart;

    return new Chart (this.element);
  },

  convertOptions (opts) {
    let newOptions = Ember.merge ({bars: 'horizontal'}, opts);
    return google.charts.Bar.convertOptions (newOptions);
  }
});
