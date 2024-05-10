import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

import { PDFViewerProps } from '@/shared/interfaces';

//@ts-ignore
// import url from 'pdfjs-dist/build/pdf.worker';
import url from '../../../pdf.worker.js'

pdfjs.GlobalWorkerOptions.workerSrc = url;

const PDFViewer = (props: PDFViewerProps) => {
  const { url } = props;

  const [pages, setPages] = useState<number>(0);

  const onLoadSuccess = ({ numPages }: any) => {
    setPages(numPages);
  };

  return (
    <div className="p-10">
      <Document
        onLoadError={console.error}
        onLoadSuccess={onLoadSuccess}
        file={{
          url: url,
        }}
      >
        {pages > 0 &&
          Array(pages)
            .fill(' ')
            .map((_, index) => (
              <div key={index}>
                <Page
                  height={500}
                  pageIndex={index}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
                <p className="font-poppins font-medium text-[8px] text-gray-400">
                  Page {index + 1} of {pages}
                </p>
              </div>
            ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
