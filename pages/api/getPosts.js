import connectDB from '../../utils/connectDB';
import Blog from '../../models/Blog';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blog = await Blog.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: blog });

    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}