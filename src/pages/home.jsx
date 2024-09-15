import React, { useState } from 'react';
import LoginButton from '../components/js/login-button';
import "../components/css/home.css"

const Home = () => {
    const [postContent, setPostContent] = useState('');
    const [showTweets, setShowTweets] = useState(false);
    const [tweets, setTweets] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);


    const handlePostToLinkedIn = async () => {
      if (!postContent.trim()) {
          alert("Please enter some text for your LinkedIn post.");
          return;
      }

      const formData = new FormData();
      formData.append('text', postContent);
      if (uploadedImage) {
          formData.append('image', uploadedImage);
      }

      try {
          const response = await fetch('YOUR_ENDPOINT_URL', {
              method: 'POST',
              body: formData,
          });

          if (response.ok) {
              console.log('Posted to LinkedIn successfully');
          } else {
              console.error('Failed to post to LinkedIn');
          }
      } catch (error) {
          console.error('Error posting to LinkedIn:', error);
      }
  };

    const handleConvertToTweets = () => {
        // Mock conversion logic (replace with actual conversion)
        const convertedTweets = postContent.split('\n\n').slice(0, 3);
        setTweets(convertedTweets);
        setShowTweets(true);
    };

    const handlePostToTwitter = (tweet) => {
        // Logic for posting to Twitter
        console.log('Posting to Twitter:', tweet);
    };

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
          setUploadedImage(file);
      } else {
          alert("Please upload a PNG or JPG image.");
      }
  };

    return (
        <div className="container mx-auto w-3/5 flex flex-col p-4 mt-8">
            <div className="relative">
                <textarea
                    className="w-full font-inter p-2 rounded bg-transparent border-2 border-transparent focus:outline-none relative z-10"
                    rows="15"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Write your Linkedin post here..."
                />
                <div className="absolute inset-0 rounded gradient-border"></div>
            </div>
            <div className="mt-4">
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="imageUpload"
                />
                <label
                    htmlFor="imageUpload"
                    className="px-4 py-2 ml-4 bg-custom-navy hover:bg-dark-blue text-white text-sm font-semibold rounded-md transition duration-300 ease-in-out cursor-pointer"
                >
                    Upload Picture
                </label>
                {uploadedImage && <span className="ml-2">{uploadedImage.name}</span>}
            </div>
            <div className="mt-4 flex">
                <LoginButton
                    href="#"
                    text="Post to LinkedIn"
                    onClick={handlePostToLinkedIn}
                />
                <LoginButton
                    href="#"
                    text="Convert to Tweets"
                    onClick={handleConvertToTweets}
                />
            </div>
            {showTweets && (
                <div className="mt-8">
                    <div className="flex mb-8 mt-12">
                      <div className="hero-sub-heading text-3xl text-dark-blue font-bold font-inter"> Viral</div>
                      <div className="hero-sub-heading text-3xl pl-2 font-bold font-inter"> Tweets </div>
                    </div>
                    <div className="space-y-4">
                        {tweets.map((tweet, index) => (
                            <div key={index} className="p-4 border font-inter border-gray-300 w-1/3 rounded">
                                <p>{tweet}</p>
                                <button
                                    onClick={() => handlePostToTwitter(tweet)}
                                    className="px-4 py-1 z-10 bg-custom-navy hover:bg-dark-blue text-white text-sm font-semibold rounded-md transition duration-300 ease-in-out"
                                >
                                    Post to Twitter
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;