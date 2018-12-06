import * as React from 'react';
import { Divider,Form, Select, Button } from 'antd';
import { Wrapper, Segment } from 'components';
import { DataGrid } from 'axui-datagrid';

class LoadingState extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    let gridData = require('examples/data/data-basic.json');

    this.state = {
      height: 300,
      columns: [
        { key: 'id', width: 60, label: 'ID' },
        { key: 'title', width: 200, label: 'Title' },
        { key: 'writer', label: 'Writer' },
        { key: 'date', label: 'Date', formatter: 'date' },
        { key: 'money', label: 'Money', formatter: 'money', align: 'right' },
      ],
      data: [...gridData],
      filteredList: [...gridData],
      options: {},
    };
  }

  changeConfig = (props: any, value: any) => {
    const processor = {
      setHeight: () => {
        this.setState({
          height: value,
        });
      },
    };

    if (props in processor) {
      processor[props].call(this, value);
    } else {
      this.setState(value);
    }
  };


  render() {
    const { height, columns, data, options } = this.state;

    return (
      <Wrapper>
        <Segment padded>
          <h1>RowSelector</h1>
          <p>
            'options> showRowSelector' If you set the value to true, a check box
            appears, allowing you to select each row of 'datagrid'.
          </p>

          <DataGrid
            height={height}
            style={{ fontSize: '12px' }}
            columns={columns}
            data={data}
            options={options}
            rowSelector={{
              show: true,
              rowKey: '',
              selectedRowKeys: [],
              onChange: param => {
                console.log(param);
                this.setState({ filteredList: param.filteredList });
              },
            }}
          />
          <Divider />

          <h2>Data</h2>
          <textarea
            style={{ width: '100%', height: '400px', padding: '10px' }}
            value={JSON.stringify(this.state.filteredList)}
            readOnly
          />
          <Divider />

          <Button
            type="primary"
            onClick={() => this.changeConfig('setHeight', 300)}
          >
            height : 300
          </Button>
          <Button
            type="primary"
            onClick={() => this.changeConfig('setHeight', 400)}
          >
            height : 400
          </Button>
          <Button
            type="primary"
            onClick={() => this.changeConfig('setHeight', 500)}
          >
            height : 500
          </Button>



        </Segment>
      </Wrapper>
    );
  }
}

export default LoadingState;
