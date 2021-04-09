import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class MyApp extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    return (
      <div>
        <Document
          file="report.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
        </Document>
        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
      </div>
    );
  }
}
