"use client";

const InitialDisplay = () => {
  const questions = [
    {
      id: 1,
      question: "Tìm kiếm tài khoản bên quan hệ đối tác",
    },
    {
      id: 2,
      question: "Có những tỷ giá hối đoái nào hiện tại?",
    },
    {
      id: 3,
      question: "Có những thông tin gì liên quan tới sửa chữa ôtô?",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="w-full xl:max-w-[75%] flex flex-col justify-center items-center">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold">
            Hôm nay tôi có thể giúp gì cho bạn?
          </h2>
          <p className="text-sm text-gray-500">
            Giao diện trả lời tùy biến câu lệnh
          </p>
        </div>
        <div className="p-4 flex flex-col sm:flex-row  gap-4">
          {questions.map((question, i) => (
            <div
              key={question.id}
              className={`hover:shadow-lg transition-all duration-150 ease-in-out cursor-pointer border-2 dark:bg-slate-900 dark:text-white px-3 py-2 rounded-xl md:min-h-[200px] flex items-center justify-center text-center ${
                i === 1 ? "md:mt-5" : ""
              }`}
            >
              <p>{question.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitialDisplay;
