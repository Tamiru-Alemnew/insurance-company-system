import mongoose from "mongoose";
const Payment = mongoose.Schema({
  UserId: { type: String, required: true },
  PaymentId: { type: String, required: true },
  Payer: { type: String, required: true },
  PolicyId: { type: String, required: true },
  PaymentAmount: { type: String, required: true },
  PaymentDate: { type: String, required: true },
  Reason: { type: String, required: true },
  TransactionMethod: { type: String, required: true },
  PaymentReason: { type: String, required: true },
});
export default mongoose.models.Payment || mongoose.model("Payment", Payment);
