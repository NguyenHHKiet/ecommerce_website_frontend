import React, { useEffect } from "react";
import "./ChatBox.scss";

const ChatBox = () => {
    useEffect(() => {
        const chatbotToggler = document.querySelector(".chatbot-toggler");
        const closeBtn = document.querySelector(".close-btn");
        const chatInput = document.querySelector(".chat-input textarea");
        const backdrop = document.querySelector("#backdrop");

        function onChangeInput(e) {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                console.log(e.target.value);
            }
        }
        function onCloseChat() {
            document.body.classList.remove("show-chatbot");
            backdrop.classList.remove("backdrop");
        }
        function onShowChat() {
            document.body.classList.toggle("show-chatbot");
            backdrop.classList.toggle("backdrop");
        }

        closeBtn.addEventListener("click", onCloseChat);
        backdrop.addEventListener("click", onCloseChat);
        chatbotToggler.addEventListener("click", onShowChat);
        chatInput.addEventListener("keydown", onChangeInput);

        return () => {
            closeBtn.removeEventListener("click", onCloseChat);
            backdrop.removeEventListener("click", onCloseChat);
            chatbotToggler.removeEventListener("click", onShowChat);
            chatInput.removeEventListener("keydown", onChangeInput);
        };
    }, []);

    return (
        <>
            <div id="backdrop"></div>
            <button className="chatbot-toggler">
                <span>
                    <i className="bi bi-chat-fill"></i>
                </span>
                <span>
                    <i className="bi bi-x-lg"></i>
                </span>
            </button>
            <div className="chatbot">
                <header className="d-flex align-items-center justify-content-around">
                    <h5 className="fw-bolder">Customer Support</h5>
                    <button className="close-btn border-0 text-secondary px-2 fst-italic h6 mb-0">
                        Let's Chat App
                    </button>
                </header>
                <ul className="chatbox d-flex flex-column gap-2">
                    <li className="chat outcoming">
                        <p>Xin chào</p>
                    </li>
                    <li className="chat outcoming">
                        <p>Làm thế nào để xem các sản phẩm</p>
                    </li>
                    <li className="chat incoming">
                        <span>
                            <i className="bi bi-robot"></i>
                        </span>
                        <p>ADMIN: Chào bạn</p>
                    </li>
                    <li className="chat incoming">
                        <span>
                            <i className="bi bi-robot"></i>
                        </span>
                        <p>
                            ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                        </p>
                    </li>
                </ul>
                <div className="chat-input">
                    <span>
                        <i className="bi bi-robot"></i>
                    </span>
                    <textarea
                        placeholder="Enter a message!"
                        spellCheck="false"
                        required></textarea>
                    <span className="me-1">
                        <i className="bi bi-stickies"></i>
                    </span>
                    <span className="me-1">
                        <i className="bi bi-emoji-smile"></i>
                    </span>
                    <span id="send-btn">
                        <i className="bi bi-send-fill"></i>
                    </span>
                </div>
            </div>
        </>
    );
};

export default ChatBox;
