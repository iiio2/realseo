import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const clients = await prisma.client.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });

      return res.status(200).json(clients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      return res.status(500).json({ error: 'Failed to fetch clients' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}