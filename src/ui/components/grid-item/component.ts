import Component, { tracked } from '@glimmer/component';
export default class GridItem extends Component {
  @tracked('args')
  get number () : number {
    console.count();
    return this.args.index;
  }
};
