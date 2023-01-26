import React, { useState } from 'react';
import Level4Img from '../Imgs/Level4.jpg'





const Level4 = () => {
    return (
  
      <div className='Level4container'>
          <img class="Level4Img" src={Level4Img} />
      </div>
    )
  }
  export default Level4



















//   import React, { useState } from 'react';
//   import { Document, Page } from 'react-pdf';
  
  
  
  
  
  
//   const Level4 = () => {
  
//       const [numPages, setNumPages] = useState(null);
//       const [pageNumber, setPageNumber] = useState(1);
//       function onDocumentLoadSuccess({ numPages }) {
//           setNumPages(numPages);
//       }
  
  
//       return (
    
//         <div className='Level4container'>
//              <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
//                   <Page pageNumber={pageNumber} />
//               </Document>
//               <p>
//                   Page {pageNumber} of {numPages}
//               </p>
//         </div>
//       )
//     }
//     export default Level4
  


