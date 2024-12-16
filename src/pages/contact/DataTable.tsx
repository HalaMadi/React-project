// import React from 'react';
// import { TableBody } from '@mui/material';
// import { DataItem } from './type';
// import {
//     StyledContainer,
//     StyledTable,
//     StyledTableHead,
//     StyledTableRow,
//     StyledTableCell
// } from './styles';

// interface DataTableProps {
//     data: DataItem[];
// }
// const DataTable: React.FC<DataTableProps> = ({ data }) => {
//     return (
//         <StyledContainer>
//             <StyledTable>
//                 <StyledTableHead>
//                     <StyledTableRow>
//                         <StyledTableCell>Name</StyledTableCell>
//                         <StyledTableCell>Email</StyledTableCell>
//                         <StyledTableCell>Mobile</StyledTableCell>
//                         <StyledTableCell>How do you hear about us?</StyledTableCell>
//                         <StyledTableCell>Tell us more about your project</StyledTableCell>
//                     </StyledTableRow>
//                 </StyledTableHead>
//                 <TableBody>
//                     {data.map((item: DataItem) => (
//                         <StyledTableRow key={item.id}>
//                             <StyledTableCell>{item.name}</StyledTableCell>
//                             <StyledTableCell>{item.email}</StyledTableCell>
//                             <StyledTableCell>{item.mobile}</StyledTableCell>
//                             <StyledTableCell>{item.hearAbout}</StyledTableCell>
//                             <StyledTableCell>{item.projectDetails}</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </StyledTable>
//         </StyledContainer>
//     );
// };

// export default DataTable;
