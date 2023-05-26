import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    registrationType: 'user',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // axios
    //   .post('/api/login', formData)
    //   .then((response) => {
    //     // Handle successful response
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     // Handle error
    //     console.error(error);
    //   });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="registrationType">
              Register Yourself As
            </label>
            <select
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-indigo-500"
              id="registrationType"
              name="registrationType"
              value={formData.registrationType}
              onChange={handleInputChange}
            >
              <option value="user">User</option>
              <option value="company">Company</option>
            </select>
          </div>
          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
