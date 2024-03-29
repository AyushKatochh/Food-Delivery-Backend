import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.organization.create({
    data: {
      name: 'Viga Entertainment',
      pricing: {
        create: [
          {
            item: {
              create: {
                type: 'perishable',
                description: 'Fresh Pizza',
              },
            },
            zone: 'central',
            base_distance_in_km: 5,
            km_price: 1.5,
            fix_price: 10,
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
