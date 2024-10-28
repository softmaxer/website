"use client";
import handleSendEmail from "@/lib/actions";
import React, { FormEvent } from "react";

export default function ContactMe() {
  const [responseMessage, setResponseMessage] = React.useState<string>();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const eventData = new FormData(event.currentTarget);

    // Clear response.
    setResponseMessage(undefined);

    const data = {
      username: eventData.get("name")?.toString(),
      email: eventData.get("email")?.toString(),
      message: eventData.get("message")?.toString(),
    };

    const { username, email, message } = data;

    if (username && email && message) {
      const response = await handleSendEmail({ username, email, message });
      if (response.error) {
        setResponseMessage(response.error);
      } else {
        setResponseMessage(response.message);
      }
    } else {
      setResponseMessage("All fields are required.");
    }
  }
  return (
    <div className="flex flex-col justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center p-12 md:p-24 lg:p-24 gap-12 font-solanelLight">
      <h1 className="text-3xl font-solanelBold">Get in touch</h1>
      <form
        className="mt-8 space-y-4  w-full md:max-w-lg lg:max-w-lg"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-transparent text-sm border-b-2 border-pink-500 dark:text-gray-300"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-transparent text-sm border-b-2 border-pink-500 dark:text-gray-300"
        />
        <input
          type="text"
          placeholder="Subject"
          id="subject"
          name="subject"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-transparent text-sm border-b-2 border-pink-500 dark:text-gray-300"
        />
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          rows={6}
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-transparent text-sm border-b-2 border-pink-500 dark:text-gray-300"
        ></textarea>
        <input
          type="submit"
          className="text-lg bg-transparent text-pink-500 hover:text-white hover:bg-pink-500 tracking-wide rounded-md  px-4 py-3 transition-all ease-in-out duration-300"
          value={"Submit"}
        ></input>
      </form>
      {responseMessage && <p className="alert">{responseMessage}</p>}
    </div>
  );
}
