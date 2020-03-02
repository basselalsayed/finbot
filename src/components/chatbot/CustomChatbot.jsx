import React from "react";
import ChatBot from "react-simple-chatbot";

export default function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, I'm finbot 🤖. Your personal finance educator",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please type your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Asking options to learn"
    },
    {
      id: "Asking options to learn",
      message: `Hi {previousValue}, Please click on what you
                 want to learn about!`,
      trigger: "Displaying options to learn"
    },
    {
      id: "Displaying options to learn",
      options: [
        {
          value: "saving",
          label: "Saving",
          trigger: "Saving definition"
        },
        {
          value: "diversification",
          label: "Diversification",
          trigger: "Diversification definition"
        },
        {
          value: "no",
          label: "Done",
          trigger: "Done"
        }
      ]
    },
    {
      id: "Saving definition",
      component: (
        <p>
          Here is some information on saving
          <a href="https://www.investopedia.com/terms/s/savings.asp">
            Savings 1
          </a>
          Would you like to learn more on savings?
        </p>
      ),
      asMessage: true,
      trigger: "Asking to learn more saving"
    },
    {
      id: "Asking to learn more saving",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "Saving addition"
        },
        {
          value: "false",
          label: "No",
          trigger: "Displaying options to learn"
        }
      ]
    },
    {
      id: "Saving addition",
      component: (
        <p>
          Here is more information on savings
          <a href="https://www.investopedia.com/articles/personal-finance/031215/why-saving-money-important.asp">
            Savings 2
          </a>
        </p>
      ),
      asMessage: true,
      trigger: "Asking to learn more saving"
    },
    {
      id: "Diversification definition",
      component: (
        <p>
          Here is some information on diversification{" "}
          <a href="https://www.investopedia.com/terms/d/diversification.asp">
            Diversification 1
          </a>
          Would you like to learn more on diversification?
        </p>
      ),
      asMessage: true,
      trigger: "Asking to learn more diversification"
    },
    {
      id: "Asking to learn more diversification",
      options: [
        {
          value: true,
          label: "Yes",
          trigger: "Diversification addition"
        },
        {
          value: "false",
          label: "No",
          trigger: "Displaying options to learn"
        }
      ]
    },
    {
      id: "Diversification addition",
      component: (
        <p>
          Here is more information on savings
          <a href="https://www.investopedia.com/investing/importance-diversification/">
            Diversification 2
          </a>
        </p>
      ),
      asMessage: true,
      trigger: "Displaying options to learn"
    },
    // {
    //    id: "Adding Mushroom in Pizza",
    //    options: [
    //               {
    //                 value: true,
    //                 label: "Yes",
    //                 trigger: () => {
    //                    props.eventHandler("mushroom");
    //                    return "Asking for Corn in Pizza"
    //                  }
    //               },
    //               {
    //                 value: "false",
    //                 label: "No",
    //                 trigger: "Asking for Corn in Pizza"
    //               }
    //             ]
    // },

    {
      id: "Done",
      message: "Have a great day!",
      end: true
    }
  ];

  return <ChatBot steps={steps} {...config} />;
}
