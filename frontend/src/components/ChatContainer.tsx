import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
  
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {messages.map((message) => {
          const isMe = message.senderId === authUser._id;
          return (
            <div
              key={message._id}
              ref={messageEndRef}
              className={`w-full flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-end gap-3 max-w-[75%]`}>
                {!isMe && (
                  <div className="avatar shrink-0 self-end">
                    <div className="w-10 h-10 rounded-xl border shadow-sm overflow-hidden">
                      <img
                        src={selectedUser.profilePic || "/avatar.png"}
                        alt="profile"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
  
                <div className={`flex flex-col gap-1 ${isMe ? "items-end" : "items-start"}`}>
                  <div
                    className={`px-4 py-2 rounded-xl border shadow-sm break-words whitespace-pre-wrap ${
                      isMe ? "rounded-br-none" : "rounded-bl-none"
                    }`}
                  >
                    {message.image && (
                      <img
                        src={message.image}
                        alt="Attachment"
                        className="max-w-[200px] rounded-md mb-2 border"
                      />
                    )}
                    {message.text && <p className="text-sm">{message.text}</p>}
                  </div>
  
                  <span className="text-xs opacity-60 mt-0.5">
                    {formatMessageTime(message.createdAt)}
                  </span>
                </div>
  
                {isMe && (
                  <div className="avatar shrink-0 self-end">
                    <div className="w-10 h-10 rounded-xl border shadow-sm overflow-hidden">
                      <img
                        src={authUser.profilePic || "/avatar.png"}
                        alt="profile"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
  
      <MessageInput />
    </div>
  );
  
  
  
};
export default ChatContainer;