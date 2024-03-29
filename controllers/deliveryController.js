import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line consistent-return
export const calculateDelivery = async (req, res) => {
  const {
    zone, organizationId, totalDistance, itemType,
  } = req.body;

  try {
    const item = await prisma.item.findFirst({ where: { type: itemType } });
    if (!item) {
      return res.status(404).send('Item type not found.');
    }

    const pricing = await prisma.pricing.findFirst({
      where: {
        organizationId: parseInt(organizationId, 10),
        itemId: 3,
        zone,
      },
    });

    if (!pricing) {
      return res.status(404).send('Pricing information not found.');
    }

    const additionalDistance = Math.max(totalDistance - pricing.base_distance_in_km, 0);
    const distanceCharge = additionalDistance * pricing.km_price;
    const totalPrice = pricing.fix_price + distanceCharge;

    res.json({ totalPrice: totalPrice.toFixed(2) });
  } catch (error) {
    console.error('Error calculating delivery cost:', error);
    res.status(500).send('An error occurred while calculating the delivery cost');
  }
};
