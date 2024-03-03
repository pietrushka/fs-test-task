import mongoose from 'mongoose';

const FeaturesEnum = [
  'Drzwi AddWash™',
  'Panel AI Control',
  'Silnik inwerterowy',
  'Wyświetlacz elektroniczny',
];

const EnergyClassEnum = ['A', 'B', 'C'];

const Capacity = [8, 9, 10.5];

const ProductSchema = new mongoose.Schema({
  image: { type: String, required: true },
  code: { type: String, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  capacity: { type: String, required: true, enum: Capacity },
  dimensions: { type: String, required: true },
  features: [{ type: String, required: true, enum: FeaturesEnum }],
  energyClass: { type: String, required: true, enum: EnergyClassEnum },
  price: {
    value: { type: Number, required: true },
    currency: { type: String, required: true },
    installment: {
      value: { type: Number, required: true },
      period: { type: Number, required: true },
    },
    validFrom: { type: Date, required: true },
    validTo: { type: Date, required: true },
  },
});

// infering better than separate document interface,
// mongoose doesn't check if document interface lines up with schema
export type TProduct = mongoose.InferSchemaType<typeof ProductSchema>;

export default mongoose.model('product', ProductSchema);
