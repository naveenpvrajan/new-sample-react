import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return <h2>{this.props.fallbackMsg}</h2>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

ErrorBoundary.defaultProps = {
  fallbackMsg: 'Something went wrong'
};

// import React from 'react';
// import _isEqual from 'lodash/isEqual';

// import { saveErrorLog } from '../../utils';

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: false, errorInfo: null };
//   }

//   componentDidCatch(error, errorInfo) {
//     if (!_isEqual(this.state.error, error) && !_isEqual(this.state.errorInfo, errorInfo)) {
//       this.setState({
//         error: error,
//         errorInfo: errorInfo
//       });
//       saveErrorLog(error, this.props.name);
//     }
//   }

//   render() {
//     // const { fallbackMsg = 'Something went wrong.'} = this.props;
//     if (this.state.errorInfo) {
//       return (
//         <div>
//           {/* <h2 className="text-center">{fallbackMsg}</h2> */}
//           {this.props.children}
//         </div>
//       );
//     } else {
//       return <div>{this.props.children}</div>;
//     }
//   }
// }

// export default ErrorBoundary;
