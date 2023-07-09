import React from "react";

export default function Contact() {
  return (
    <section id="contacts" class="container" className="relative">
      <h2>Contact Me</h2>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label text-light">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-light">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label text-light">Message</label>
          <textarea class="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}