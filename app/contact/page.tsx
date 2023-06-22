import { redirect } from 'next/navigation';
import db from '@data/db/db';

async function handleSubmit(formData: FormData): Promise<void> {
    'use server';
    const post = await db.post.insert({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    });
    redirect('/');
}

const ContactPage = () => {
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     console.log('Form submitted!');
    //     console.log('Form Data:', formData);
    // };
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value
    //     }));
    // }; 
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form action={handleSubmit} className="max-w-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        // value={formData.name}
                        // onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        // value={formData.message}
                        // onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        rows={4}
                        required
                    />
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;
