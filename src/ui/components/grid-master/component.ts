import Component, { tracked } from "@glimmer/component";
import { GridArea, GridItem, GridRow } from "../../../utils/types";

export default class GridMaster extends Component {
  defaultWidth : number = 80;
  defaultHeight : number = 80;
  colsLength : number = 8;
  rowsLength : number = 12;
  grid : Array<any> = [];

  constructor(options){
    super(options);
    console.log('consturcting');
    this.grid = this.generateGrid(this.colsLength, this.rowsLength);
  }

  generateGrid(colsLength, rowsLength){
    console.log('generateGrid');

    return this.generateArray(colsLength).map((arr, index) => {
      return this.generateRow(index, rowsLength);
    });
  }

  generateRow(y: number, rowsLength: number) : GridRow {
    console.log('generating Row');

    return this.generateArray(this.rowsLength).map((item, x) => {
      return {
      };
    });
  }

  generateArray(length: number) : Array<any> {
    console.log('generating Array');
    return (new Array(length)).fill({});
  }
}
