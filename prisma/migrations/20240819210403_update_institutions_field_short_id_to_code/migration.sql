/*
  Warnings:

  - You are about to drop the column `shortId` on the `institutions` table. All the data in the column will be lost.
  - Added the required column `paymentType` to the `finances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `institutions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `institutions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'MONEY', 'PIX', 'BANK_SLIP', 'TRANSFER');

-- AlterTable
ALTER TABLE "finances" ADD COLUMN     "paymentType" "PaymentType" NOT NULL;

-- AlterTable
ALTER TABLE "institutions" DROP COLUMN "shortId",
ADD COLUMN     "code" INTEGER NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL;
