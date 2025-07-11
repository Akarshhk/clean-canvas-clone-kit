export const scrollToContact = () => {
  const contactElement = document.getElementById("contact");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleContactNavigation = (currentPath: string) => {
  if (currentPath === "/") {
    scrollToContact();
  } else {
    // Navigate to homepage and then scroll to contact
    window.location.href = "/#contact";
  }
};

// Listen for hash changes to scroll when coming from other pages
if (typeof window !== "undefined") {
  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#contact") {
      setTimeout(() => scrollToContact(), 100);
    }
  });
  
  // Handle initial load with hash
  window.addEventListener("load", () => {
    if (window.location.hash === "#contact") {
      setTimeout(() => scrollToContact(), 100);
    }
  });
}