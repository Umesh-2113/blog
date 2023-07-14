import { useEffect, useState } from 'react';
import axios from 'axios'

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [Image, setImage] = useState('');
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);


    
     const addpost = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('/api/createPost', {
            title,
            Image,
            header,
            description,
            author,
            date,
            category : selectedCategory,
          });
    
          console.log('Post created successfully');
        } catch (error) {
          console.error('Error adding post:', error);
        }
      };
    
      

       const addcategory = async (e) => {
          e.preventDefault();
      
          try {
            await axios.post('/api/createCategory', {
              name:categoryName,
              categoryImage,
            });
      
            console.log('Category created successfully');
          } catch (error) {
            console.error('Error adding category:', error);
          }
        };
        useEffect(() => {
            // Fetch all categories on page load
            axios.get('/api/getCategory').then((res) => {
                setCategories(res.data.data);
            });
        }, []);



    return (
        <div>
        <form onSubmit={addpost} className="max-w-xl mx-auto p-2 font-bold">
        <div className="mb-4">
            <label htmlFor="title" className="block text-lg mb-1 text-black">
                Title
            </label>
            <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="headerImage" className="block text-lg mb-1 text-black">
                Header Image URL
            </label>
            <input
                type="text"
                id="headerImage"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Header Image URL"
                value={Image}
                onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="header" className="block text-lg mb-1 text-black">
                Header
            </label>
            <textarea
                id="header"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
            ></textarea>
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block text-lg mb-1 text-black">
                Description
            </label>
            <textarea
                id="description"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>
        <div className="mb-4">
            <label htmlFor="author" className="block text-lg mb-1 text-black">
                Author
            </label>
            <input
                type="text"
                id="author"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="date" className="block text-lg mb-1 text-black">
                Date
            </label>
            <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="categoryName" className="block text-lg mb-1 mt-4 text-black">
                Select Category
            </label>
            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-blue-500"
                required
            >
                <option value="" >Select a category</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <button
            type="submit"
            className="bg-black text-white font-extrabold mt-4 py-2 px-4 rounded hover:bg-grey-600"
        >
            Publish
        </button>
    </form>

    

<form onSubmit={addcategory}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-black font-bold font-darkage mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full font-darkage border border-black rounded px-3 py-2 focus:outline-none bg-[#F6F4EE] text-[#5E474C] focus:border-[#F6F4EE]"
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categoryImage" className="block text-black font-bold font-darkage mb-2">
                  Category Image
                </label>
                <input
                  type="text"
                  id="categoryImage"
                 
                  className="w-full font-darkage text-black border border-black"
                  onChange={(e)=> setCategoryImage(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-white bg-black hover:bg-slate-600 rounded py-2 px-4 font-semibold font-coffee mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded font-coffee"
                 
                >
                  Publish
                </button>
              </div>
            </form>

        </div>
    );

};


export default AdminPanel;