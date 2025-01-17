import { model, Schema } from "mongoose";

const messageSchema = new Schema(
  {
    content: String,
    attachments: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    chat: { type: Schema.Types.ObjectId, ref: "Chat", required: true },
  },
  {
    timestamps: true,
  }
);

export const Messages = model("Messages", messageSchema);
