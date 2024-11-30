"use client";
import Loading from "@/components/buttons/loading";
import IconInstagram from "@/components/icons/instagram";
import IconTwitter from "@/components/icons/twitter";
import handleSendEmail from "@/lib/actions";
import Link from "next/link";
import React, { FormEvent } from "react";

export default function ContactMe() {
  const [responseMessage, setResponseMessage] = React.useState<string>();
  const [submitLoading, setSubmitLoading] = React.useState<boolean>(false);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const eventData = new FormData(event.currentTarget);

    // Clear response.
    setResponseMessage(undefined);
    setSubmitLoading(true);

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
        setSubmitLoading(false);
      } else {
        setSubmitLoading(false);
        setResponseMessage("Message submitted");
      }
    } else {
      setSubmitLoading(false);
      setResponseMessage("All fields are required.");
    }
  }
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-around items-center mt-24 gap-20">
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="font-solanelLight text-xl">Reach out on social media</p>
        <div className="flex flex-row items-center justify-center gap-12">
          <Link
            href={
              "https://music.youtube.com/playlist?list=OLAK5uy_nVk7A_F1Tt1cJ_0olZpj-axaL2CtbJGSU&si=Fb9YzvThusRvGilr"
            }
            className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
          >
            <IconInstagram />
          </Link>

          <Link
            href={
              "https://music.youtube.com/playlist?list=OLAK5uy_nVk7A_F1Tt1cJ_0olZpj-axaL2CtbJGSU&si=Fb9YzvThusRvGilr"
            }
            className="hover:scale-125 translate-y-3 transition-all hover:text-pink-500"
          >
            <IconTwitter />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start md:justify-center md:items-center lg:justify-center lg:items-center p-12 md:p-24 lg:p-24 gap-12 font-solanelLight">
        <h1 className="text-3xl font-solanelBold">Send a message</h1>
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
          {submitLoading ? (
            <Loading />
          ) : (
            <input
              type="submit"
              className="text-lg bg-transparent text-pink-500 hover:text-white hover:bg-pink-500 tracking-wide rounded-md  px-4 py-3 transition-all ease-in-out duration-300"
              value={"Submit"}
            ></input>
          )}
        </form>
        {responseMessage && <p className="alert">{responseMessage}</p>}
      </div>
    </div>
  );
}
