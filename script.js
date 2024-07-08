document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".navbar-links");

  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  const noticeBoardBtn = document.getElementById("notice-board-btn");
  const noticeList = document.getElementById("notice-list");
  const chatbotBtn = document.getElementById("chatBot-btn");
  const chatContainer = document.getElementById("chat-container");

  chatbotBtn.addEventListener("click", () => {
    if (
      chatContainer.style.display === "none" ||
      chatContainer.style.display === ""
    ) {
      chatContainer.style.display = "block";
    } else {
      chatContainer.style.display = "none";
    }
  });

  noticeBoardBtn.addEventListener("click", () => {
    if (
      noticeList.style.display === "none" ||
      noticeList.style.display === ""
    ) {
      noticeList.style.display = "block";
    } else {
      noticeList.style.display = "none";
    }
  });
  const chatBox = document.getElementById("chat-box");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("sendBtn");

  const responses = {
    "What are the courses offered?":
      "Our college offers various undergraduate and postgraduate courses. You can find more details on our website.",
    "What is the admission process?":
      "The admission process includes entrance exams followed by counseling. Detailed information is available on the admissions page.",
    "What are the fee structures?":
      "Fee structures vary by course and are detailed on our fees page.",
    "What are the contact details?":
      "You can contact us at info@jcboseust.ac.in or call us at +91-1234567890.",
  };

  sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    addMessage(userMessage, "user-message");
    userInput.value = "";

    const botResponse = getResponse(userMessage);
    setTimeout(() => addMessage(botResponse, "bot-message"), 500);
  });

  function addMessage(text, className) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerText = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function getResponse(userMessage) {
    return (
      responses[userMessage] ||
      "I'm sorry, I don't understand that question. Please visit our website for more information."
    );
  }
});
