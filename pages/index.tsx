import { Box, Button, Breadcrumbs, Typography, Link } from '@mui/material';
import { DataTable, Column } from '@/components';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { GetServerSideProps } from 'next';
import { prisma } from '@/lib/prisma';
import { convertToCSV, downloadCSV } from '@/utils/csvExport';

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

  const handleDownloadCSV = () => {
    try {
      if (!clients || clients.length === 0) {
        console.warn('No clients to export');
        return;
      }

      const headers: Array<{ key: keyof typeof clients[0]; label: string }> = [
        { key: 'clientName', label: 'Client Name' },
        { key: 'address', label: 'Address' },
        { key: 'date', label: 'Date' },
        { key: 'email', label: 'Email' },
        { key: 'cell', label: 'Cell' },
        { key: 'comments', label: 'Comments' },
      ];

      const csvContent = convertToCSV(clients, headers);
      const timestamp = new Date().toISOString().split('T')[0];
      downloadCSV(csvContent, `clients-${timestamp}.csv`);
    } catch (error) {
      console.error('Error downloading CSV:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 60px)', width: '100%' }}>
      <Box sx={{ backgroundColor: '#F9F9F9', flex: 1, pt: { xs: 2, sm: 3 }, px: { xs: 2, sm: 3 }, pb: 0, display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link
            underline="hover"
            href="/"
            sx={{ fontSize: { xs: '13px', md: '14px' }, color: '#000' }}
          >
            Dashboard
          </Link>
          <Typography sx={{ fontSize: { xs: '13px', md: '14px' }, color: '#86937F', fontWeight: 500 }}>
            Clients
          </Typography>
        </Breadcrumbs>

        <Box sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            endIcon={<FileUploadOutlinedIcon />}
            onClick={handleDownloadCSV}
            sx={{
              textTransform: 'none',
              color: '#333',
              borderColor: '#D0D0D0',
              fontSize: { xs: '13px', md: '14px' },
              fontWeight: 500,
              px: { xs: 2, sm: 2.5 },
              py: { xs: 0.8, sm: 1 },
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
    </Box>
  );
}

