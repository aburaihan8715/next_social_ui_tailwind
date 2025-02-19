"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <SectionHeading heading="Login" />
        </div>
        <form className="space-y-6">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <label htmlFor="email" className="block text-sm font-medium text-green-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md shadow-sm bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 sm:text-sm"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }}>
              <label htmlFor="password" className="block text-sm font-medium text-green-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md shadow-sm bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 sm:text-sm"
              />
            </motion.div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md group hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
            >
              Submit
            </button>
          </div>
        </form>
        <motion.div className="mt-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="font-medium text-green-700 hover:text-green-800">
              Register
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
