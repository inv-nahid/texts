import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="relative z-10 w-full px-4 pb-4 pt-2 backdrop-blur-md">
      {/* Preview */}
      {imagePreview && (
        <div className="mb-3 flex items-center gap-3">
          <div className="relative group transition-transform hover:scale-[1.02]">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 rounded-xl object-cover border border-zinc-500 shadow-lg"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute -top-2 -right-2 p-1 rounded-full bg-base-300 hover:bg-base-200 transition-all shadow-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        className="relative flex items-center gap-3 bg-base-200/70 border border-base-300 backdrop-blur-md shadow-xl px-5 py-3 rounded-2xl"
      >
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none placeholder:italic placeholder:text-sm sm:placeholder:text-base text-base"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Attach Image */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`transition-all duration-200 p-2 rounded-full hover:scale-110 ${
            imagePreview ? "text-emerald-500" : "text-zinc-400"
          }`}
        >
          <Image size={22} />
        </button>

        {/* Send */}
        <button
          type="submit"
          disabled={!text.trim() && !imagePreview}
          className="transition-transform duration-200 p-2 rounded-full bg-primary text-primary-content hover:scale-110 shadow-md disabled:opacity-50"
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
