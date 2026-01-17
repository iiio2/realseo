import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import * as v from 'valibot';

const createClientSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.minLength(1, 'First name is required'),
    v.maxLength(50, 'First name is too long')
  ),
  lastName: v.pipe(
    v.string(),
    v.minLength(1, 'Last name is required'),
    v.maxLength(50, 'Last name is too long')
  ),
  address: v.pipe(
    v.string(),
    v.minLength(1, 'Address is required')
  ),
  dateOfBirth: v.pipe(
    v.string(),
    v.minLength(1, 'Date of birth is required')
  ),
  contactEmail: v.pipe(
    v.string(),
    v.email('Please enter a valid email address')
  ),
  contactCell: v.pipe(
    v.string(),
    v.minLength(1, 'Contact number is required')
  ),
  companyName: v.optional(v.string()),
  package: v.optional(v.string()),
  comments: v.optional(v.string()),
});

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

  if (req.method === 'POST') {
    try {
      const validationResult = v.safeParse(createClientSchema, req.body);

      if (!validationResult.success) {
        const firstError = validationResult.issues[0];
        return res.status(400).json({
          error: firstError.message || 'Validation failed'
        });
      }

      const { firstName, lastName, address, dateOfBirth, contactEmail, contactCell, companyName, package: packageValue, comments } = validationResult.output;

      const clientName = `${firstName.trim()} ${lastName.trim()}`;

      const client = await prisma.client.create({
        data: {
          clientName,
          companyName: companyName?.trim() || null,
          address: address.trim(),
          date: dateOfBirth,
          email: contactEmail.trim(),
          cell: contactCell.trim(),
          package: packageValue?.trim() || null,
          comments: comments?.trim() || '',
        },
      });

      return res.status(201).json({
        success: true,
        client,
        message: 'Client created successfully'
      });

    } catch (error) {
      console.error('Error creating client:', error);
      return res.status(500).json({ error: 'Failed to create client' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}