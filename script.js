

document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');
  
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
  
        if (content.style.maxHeight) {
          // If already open, close it
          content.style.maxHeight = null;
          content.style.padding = '0 15px';
        } else {
          // If not open, open it
          // First, close any currently open sections
          document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = null;
            c.style.padding = '0 15px';
          });
  
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.padding = '15px';
        }
      });
    });
  });
  