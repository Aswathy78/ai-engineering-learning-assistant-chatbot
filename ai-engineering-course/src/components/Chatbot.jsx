import React, { useState } from "react";

import {
  Bot,
  Send,
  X
} from "lucide-react";


export default function Chatbot() {


  const [isOpen, setIsOpen] = useState(false);


  const [question, setQuestion] = useState("");


  const [loading, setLoading] = useState(false);


  const [messages, setMessages] = useState([

    {

      role: "assistant",

      content:
        "Hi! 👋 I am your AI Engineering Learning Assistant. Ask me about AI, Machine Learning, Deep Learning, LLMs and RAG."

    }

  ]);


  // ----------------------------------------
  // SEND MESSAGE
  // ----------------------------------------

  const sendMessage = async () => {


    if (!question.trim()) {

      return;

    }


    const userQuestion = question;


    // Add user message
    setMessages((previousMessages) => [

      ...previousMessages,

      {

        role: "user",

        content: userQuestion

      }

    ]);


    // Clear input
    setQuestion("");


    // Start loading
    setLoading(true);


    try {


      const response = await fetch(

        "http://localhost:8000/chat",

        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body: JSON.stringify({

            question: userQuestion

          })

        }

      );


      const data = await response.json();


      // Check backend error
      if (data.error) {

        throw new Error(
          data.error
        );

      }


      // Add AI answer
      setMessages((previousMessages) => [

        ...previousMessages,

        {

          role: "assistant",

          content: data.answer

        }

      ]);


    }


    catch (error) {


      console.error(error);


      setMessages((previousMessages) => [

        ...previousMessages,

        {

          role: "assistant",

          content:
            "Sorry, I could not connect to the AI server. Please make sure the backend is running."

        }

      ]);


    }


    finally {


      setLoading(false);


    }


  };


  // ----------------------------------------
  // ENTER KEY
  // ----------------------------------------

  const handleKeyDown = (event) => {


    if (

      event.key === "Enter"

      &&

      !loading

    ) {


      sendMessage();


    }


  };


  return (


    <>


      {/* CHAT BUTTON */}

      <button

        onClick={() => setIsOpen(!isOpen)}

        className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        rounded-full
        bg-blue-600
        text-white
        shadow-lg
        flex
        items-center
        justify-center
        z-50
        "

      >


        {isOpen ? (

          <X size={24} />

        ) : (

          <Bot size={24} />

        )}


      </button>



      {/* CHAT WINDOW */}

      {isOpen && (


        <div

          className="
          fixed
          bottom-24
          right-6
          w-96
          max-w-[90vw]
          bg-white
          rounded-2xl
          shadow-2xl
          border
          overflow-hidden
          z-50
          "

        >


          {/* HEADER */}

          <div

            className="
            bg-blue-600
            text-white
            p-4
            flex
            items-center
            gap-2
            "

          >


            <Bot size={22} />


            <div>


              <h2 className="font-semibold">

                AI Engineering Assistant

              </h2>


              <p className="text-xs opacity-80">

                Multi-RAG Learning Assistant

              </p>


            </div>


          </div>



          {/* MESSAGES */}

          <div

            className="
            h-96
            overflow-y-auto
            p-4
            space-y-4
            "

          >


            {messages.map(

              (message, index) => (


                <div

                  key={index}

                  className={

                    message.role === "user"

                      ?

                      "flex justify-end"

                      :

                      "flex justify-start"

                  }

                >


                  <div

                    className={

                      message.role === "user"

                        ?

                        `
                        bg-blue-600
                        text-white
                        px-4
                        py-3
                        rounded-2xl
                        max-w-[80%]
                        `

                        :

                        `
                        bg-gray-100
                        text-gray-800
                        px-4
                        py-3
                        rounded-2xl
                        max-w-[80%]
                        `

                    }

                  >


                    {/* ANSWER TEXT ONLY */}

                    <p className="text-sm whitespace-pre-wrap">

                      {message.content
                        .replace(/\*\*/g, "")
                        .replace(/^\s*-\s*/gm, "")
                        .replace(/^\s*\*\s*/gm, "")
                      }

                    </p>


                  </div>


                </div>


              )

            )}



            {loading && (


              <div className="flex justify-start">


                <div

                  className="
                  bg-gray-100
                  px-4
                  py-3
                  rounded-2xl
                  "

                >


                  🤖 Searching knowledge base...


                </div>


              </div>


            )}


          </div>



          {/* INPUT */}

          <div

            className="
            border-t
            p-3
            flex
            gap-2
            "

          >


            <input

              type="text"

              value={question}

              onChange={(event) =>

                setQuestion(
                  event.target.value
                )

              }

              onKeyDown={
                handleKeyDown
              }

              placeholder="Ask an AI Engineering question..."

              disabled={loading}

              className="
              flex-1
              border
              rounded-full
              px-4
              py-2
              outline-none
              "

            />


            <button

              onClick={sendMessage}

              disabled={loading}

              className="
              bg-blue-600
              text-white
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              "

            >


              <Send size={18} />


            </button>


          </div>


        </div>


      )}


    </>


  );


}