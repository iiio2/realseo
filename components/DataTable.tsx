import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from '@mui/material';
import Image from 'next/image';

export interface Column {
  id: string;
  label: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
  width?: string;
}

export interface DataTableProps {
  columns: Column[];
  rows: any[];
  onSort?: (columnId: string) => void;
}

const DataTable = ({ columns, rows, onSort }: DataTableProps) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#729E5A33',
            }}
          >
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                sx={{
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#333',
                  py: 2,
                  px: 2.5,
                  borderBottom: '1px solid #E0E0E0',
                  width: column.width,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  {column.label}
                  {column.sortable && (
                    <IconButton
                      size="small"
                      onClick={() => onSort?.(column.id)}
                      sx={{
                        padding: 0,
                        color: '#666',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                     <Image src="/arrow.png" alt="Sort" width={16} height={16} style={{ objectFit: 'contain' }} /> 
                    </IconButton>
                  )}
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9F9F9',
                '&:hover': {
                  // backgroundColor: '#F5F5F5',
                },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  sx={{
                    fontSize: '14px',
                    color: '#333',
                    py: 2,
                    px: 2.5,
                    borderBottom: '1px solid #E0E0E0',
                  }}
                >
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
