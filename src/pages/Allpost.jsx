import React, { useState } from "react";
import appwriteservice from "../Appwrite/Storege";
import { Container, Postcard } from "../components/index";
import { useEffect } from "react";

function Allpost() {
  conat[(posts, setPosts)] = useState([]);
  useEffect(() => {
    appwriteservice.getposts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className=" w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Allpost;
