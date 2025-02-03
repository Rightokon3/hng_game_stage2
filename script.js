// Sample blog post data
const blogPosts = [
  {
    title: "My Motivation for becoming a front-end developer",
    date: "2025-01-30",
    content: "My motivation for becoming a front-end developer is my dad he was the one who always motivated my computer carrer ever since i was 10 years old he always encourage into tech since he saw my computer skills and when i was done with high school he bought me a laptop and phone to help to start coding, later he paid for my 8 months course on full stack development which has been a huge impact in my web developing carrer.",
  },
  {
    title: "How HNG will help me grow in the field",
    date: "2025-01-30",
    content: "HNG has been the best internship i have ever since . it helps me to improve my coding skills and offers me a good and easy tasks with are truly amazing this will help me grow and improve my coding skills and if make it to the stage 10 i'll really go from beginner to pro . ",
    
  },
  {
    title: "My Goal for the internship",
    date: "2025-01-30",
    content: "This internship has offer me with the best expernice of being a front-end developer , my goal is to reach the stage 10 of the internship, but i have to achieve them by working hard on my tasks given to me by the internship. if you are looking for web devlopers to create or manage your site click on one of this links to hire .",
    link: "https://hng.tech/hire/web-developers",
  },
]

// Function to create a blog post element
function createBlogPostElement(post) {
  const article = document.createElement("article")
  article.classList.add("blog-post")

  const title = document.createElement("h2")
  title.textContent = post.title

  const date = document.createElement("p")
  date.textContent = `Published on ${post.date}`

  const content = document.createElement("p")
  content.textContent = post.content

  article.appendChild(title)
  article.appendChild(date)
  article.appendChild(content)

  // Add the "Read more" link only if the post has a link property
  if (post.link) {
    const link = document.createElement("a")
    link.href = post.link
    link.textContent = "Hire web developers"
    link.classList.add("read-more")
    article.appendChild(link)
  }

  return article
}

// Function to load blog posts
function loadBlogPosts() {
  const blogPostsSection = document.getElementById("blog-posts")
  const recentPostsList = document.getElementById("recent-posts")

  blogPosts.forEach((post) => {
    const postElement = createBlogPostElement(post)
    blogPostsSection.appendChild(postElement)

    // Add to recent posts
    const listItem = document.createElement("li")
    listItem.textContent = post.title
    recentPostsList.appendChild(listItem)
  })
}

// Load blog posts when the page is ready
document.addEventListener("DOMContentLoaded", loadBlogPosts)

