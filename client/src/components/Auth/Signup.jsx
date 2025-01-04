import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Signup = ({ isOpen, setIsOpen, setSigninOpen }) => {
    const [userData, setUserData] = useState({ email: "", password: "", fullName: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const closeModal = () => {
        setIsOpen(false);
        setUserData({ email: "", password: "", fullName: "" }); // Clear form data
        setError(""); // Clear error
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("https://zomatocom-api.vercel.app/api/Users", userData);
            alert(data.message); // Success message
            navigate("/Homepage"); 
            closeModal();
        } catch (error) {
            setError("Email already exists.");
        }
    };

    const googleSignUp = () => (window.location.href = "https://www.zomato.com/404_page_error");

    const handleSigninRedirect = () => {
        closeModal();
        navigate("/dashboard"); 
        // setSigninOpen(true); // Open Signin form
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl">
                                <div className="flex flex-col gap-3">
                                    <button
                                        className="py-2 flex items-center justify-center gap-2 border border-gray-400 rounded-lg hover:bg-gray-100"
                                        onClick={googleSignUp}
                                    >
                                        Sign Up With Google <FcGoogle />
                                    </button>

                                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="fullName">Full Name</label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                value={userData.fullName}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full border px-3 py-2 rounded-lg focus:border-zomato-400"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={userData.email}
                                                onChange={handleChange}
                                                placeholder="user@email.com"
                                                className="w-full border px-3 py-2 rounded-lg focus:border-zomato-400"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                value={userData.password}
                                                onChange={handleChange}
                                                placeholder="*********"
                                                className="w-full border px-3 py-2 rounded-lg focus:border-zomato-400"
                                            />
                                        </div>

                                        {error && (
                                            <div className="text-red-500 text-center">
                                                {error}{" "}
                                                <span
                                                    className="text-blue-500 cursor-pointer"
                                                    onClick={handleSigninRedirect}
                                                >
                                                    Please Sign in.
                                                </span>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            className="text-center bg-zomato-400 text-white rounded-lg py-2 cursor-pointer"
                                        >
                                            Sign Up
                                        </button>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Signup;






