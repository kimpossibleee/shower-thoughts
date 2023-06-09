import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {
    type: String,
    required: [true, 'Post required.'],
  },
});

const Post = models.Post || model('Post', PostSchema);

export default Post;
