import Image from "next/image";

const Benefits = () => {
  return (
    <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      <div className="flex items-center justify-center w-full lg:w-1/2 ">
        <div>
          <img
            alt="Benefits"
            loading="lazy"
            width="521"
            height="548"
            decoding="async"
            data-nimg="1"
            className="object-cover"
            src="/img/benefit-one.png"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center w-full lg:w-1/2 ">
        <div>
          <div className="flex flex-col w-full mt-4">
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight  lg:leading-tight lg:text-4xl dark:text-white">
              Never bother with regular courses
            </h3>
            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              You can use this space to highlight your first benefit or a
              feature of your product. It can also contain an image or
              Illustration like in the example along with some bullet points.
            </p>
          </div>
          <div className="w-full mt-5">
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-7 h-7 text-indigo-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium  dark:text-gray-200">
                  Understand your customers
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Then explain the first point breifly in one or two lines.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-7 h-7 text-indigo-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium  dark:text-gray-200">
                  Improve acquisition
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  Here you can add the next benefit point.
                </p>
              </div>
            </div>
            <div className="flex items-start mt-8 space-x-3">
              <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-7 h-7 text-indigo-50"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-medium  dark:text-gray-200">
                  Drive customer retention
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  This will be your last bullet point in this section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
