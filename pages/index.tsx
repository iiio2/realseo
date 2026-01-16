import { Box, Button, Breadcrumbs, Typography, Link } from '@mui/material';
import { DataTable, Column } from '@/components';
import DownloadIcon from '@mui/icons-material/Download';

const columns: Column[] = [
  { id: 'clientName', label: 'Client Name', sortable: true, width: '150px' },
  { id: 'address', label: 'Address', sortable: true, width: '180px' },
  { id: 'date', label: 'Date', sortable: true, width: '120px' },
  { id: 'email', label: 'Email', sortable: true, width: '180px' },
  { id: 'cell', label: 'Cell', sortable: true, width: '140px' },
  { id: 'comments', label: 'Comments', sortable: true },
];

const rows = [
  {
    clientName: 'Tommie Bennett',
    address: '13th St, New York, NY',
    date: '09/19/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: "You'll get the most out of this guide if your desire to learn search engine optimization (SEO) is exceeded only by your...",
  },
  {
    clientName: 'Margarita Fisk',
    address: '13th St, New York, NY',
    date: '09/22/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: "I'd be happy to provide some reviews! However, I'll need more specific information about what you'd like a review of...",
  },
  {
    clientName: 'Peter A. Ayotte',
    address: '13th St, New York, NY',
    date: '09/26/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: 'Creative Niloy is a best SEO service provider in Bangladesh I have ever seen. He does a great job of providing top-notch...',
  },
  {
    clientName: 'Katia Alexander',
    address: '13th St, New York, NY',
    date: '09/28/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: 'Creative Niloy is a best seo service provider in Bangladesh. We are offering professional web design and seo services like...',
  },
  {
    clientName: 'Rochelle Curry',
    address: '13th St, New York, NY',
    date: '09/30/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: "You'll get the most out of this guide if your desire to learn search engine optimization (SEO) is exceeded only by your...",
  },
  {
    clientName: 'Elizabeth Lawson',
    address: '13th St, New York, NY',
    date: '10/01/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: "I'd be happy to provide some reviews! However, I'll need more specific information about what you'd like a review of...",
  },
  {
    clientName: 'Reba M. Kirn',
    address: '13th St, New York, NY',
    date: '10/02/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: 'I was looking for a reputable SMM agency for my social media page management and run a small campaign.',
  },
  {
    clientName: 'Christopher Roach',
    address: '13th St, New York, NY',
    date: '10/03/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: 'Creative Niloy is a best seo service provider in Bangladesh. We are offering professional web design and seo services like...',
  },
  {
    clientName: 'Martha Nelson',
    address: '13th St, New York, NY',
    date: '12/04/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: "You'll get the most out of this guide if your desire to learn search engine optimization (SEO) is exceeded only by your...",
  },
  {
    clientName: 'Michelle Crivello',
    address: '13th St, New York, NY',
    date: '24/04/2024',
    email: 'testdrive@snss.com',
    cell: '+16102441567',
    comments: 'Most probably the best SEO service company in Bangladesh. THEY ALSO offer website design, SMM, Digital Marketing...',
  },
];

export default function Home() {
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
      <DataTable columns={columns} rows={rows} onSort={handleSort} />
    </Box>
  );
}
