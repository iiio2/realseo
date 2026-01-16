import { Box, Button, Breadcrumbs, Typography, Link } from '@mui/material';
import { DataTable, Column } from '@/components';
import DownloadIcon from '@mui/icons-material/Download';
import { GetServerSideProps } from 'next';
import { prisma } from '@/lib/prisma';

const columns: Column[] = [
  { id: 'clientName', label: 'Client Name', sortable: true, width: '150px' },
  { id: 'address', label: 'Address', sortable: true, width: '180px' },
  { id: 'date', label: 'Date', sortable: true, width: '120px' },
  { id: 'email', label: 'Email', sortable: true, width: '180px' },
  { id: 'cell', label: 'Cell', sortable: true, width: '140px' },
  { id: 'comments', label: 'Comments', sortable: true },
];

interface HomeProps {
  clients: Array<{
    id: number;
    clientName: string;
    address: string;
    date: string;
    email: string;
    cell: string;
    comments: string;
  }>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        clientName: true,
        address: true,
        date: true,
        email: true,
        cell: true,
        comments: true,
      },
    });

    return {
      props: {
        clients: JSON.parse(JSON.stringify(clients)),
      },
    };
  } catch (error) {
    console.error('Error fetching clients:', error);
    return {
      props: {
        clients: [],
      },
    };
  }
};

export default function Home({ clients }: HomeProps) {
  const handleSort = (columnId: string) => {
    console.log('Sort by:', columnId);
  };

  return (
    <Box sx={{ backgroundColor: '#F9F9F9', minHeight: '100%', p: 3 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ fontSize: '14px', color: '#666' }}
        >
          Dashboard
        </Link>
        <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>
          Clients
        </Typography>
      </Breadcrumbs>

      {/* Download CSV Button */}
      <Box sx={{ mb: 3 }}>
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          sx={{
            textTransform: 'none',
            color: '#333',
            borderColor: '#D0D0D0',
            fontSize: '14px',
            fontWeight: 500,
            px: 2.5,
            py: 1,
            '&:hover': {
              borderColor: '#A0A0A0',
              backgroundColor: '#F9F9F9',
            },
          }}
        >
          Download CSV
        </Button>
      </Box>

      {/* Data Table */}
      <DataTable columns={columns} rows={clients} onSort={handleSort} />
    </Box>
  );
}

