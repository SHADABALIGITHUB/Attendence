class Card {
    constructor({ updateStateInApp }, shadab) {
      this.updateStateInApp = updateStateInApp;
      this.shadab = shadab;
      this.isDiv1Visible = true;
      this.isDiv2Visible = false;
      this.value = false;
    }
  
    handleLinkClick(event) {
      this.value = !this.value;
      this.updateStateInApp(() => (this.value ? 'block' : 'hidden'));
  
      event.preventDefault();
      this.isDiv1Visible = !this.isDiv1Visible;
      this.isDiv2Visible = !this.isDiv2Visible;
    }
  
    render() {
      const div = document.createElement('div');
      div.classList.add('flex', 'items-center', 'justify-center');
  
      const card = document.createElement('div');
      card.classList.add('w-64', 'rounded-lg', 'border-2', 'border-indigo-500', 'bg-transparent', 'p-4', 'text-center', 'shadow-lg', 'dark:bg-gray-800');
  
      const figure = document.createElement('figure');
      figure.classList.add('mx-auto', 'mb-4', 'flex', 'h-16', 'w-16', 'items-center', 'justify-center', 'rounded-full', 'bg-indigo-500', 'dark:bg-indigo-600');
  
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', 48);
      svg.setAttribute('height', 48);
      svg.setAttribute('fill', 'currentColor');
      svg.classList.add('bi', 'bi-person-fill', 'text-white', 'dark:text-indigo-300');
      svg.setAttribute('viewBox', '0 0 16 16');
  
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z');
  
      svg.appendChild(path);
      figure.appendChild(svg);
      figure.appendChild(document.createTextNode(this.isDiv1Visible ? 'John Doe, Web Developer' : ''));
  
      const heading = document.createElement('h2');
      heading.classList.add('mt-4', 'text-xl', 'font-bold', 'text-teal-700');
      heading.innerText = this.shadab;
  
      const paragraph = document.createElement('p');
      paragraph.classList.add('mb-4', 'text-gray-600', 'dark:text-gray-300');
      paragraph.innerText = 'Number of Classes:';
  
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('flex', 'items-center', 'justify-center');
  
      const attendanceButton = document.createElement('button');
      attendanceButton.classList.add('rounded-full', 'bg-indigo-600', 'px-4', 'py-2', 'text-white', 'hover:bg-indigo-700', 'dark:bg-indigo-400', 'dark:hover:bg-indigo-500');
      attendanceButton.innerText = 'Attendence';
      attendanceButton.addEventListener('click', this.handleLinkClick.bind(this));
  
      const detailsLink = document.createElement('a');
      detailsLink.classList.add('ml-4', 'rounded-full', 'bg-gray-300', 'px-4', 'py-2', 'hover:bg-gray-400', 'dark:bg-gray-700', 'dark:hover:bg-gray-600');
      detailsLink.href = '/';
      detailsLink.innerText = 'Details';
  
      buttonDiv.appendChild(attendanceButton);
      buttonDiv.appendChild(detailsLink);
  
      card.appendChild(figure);
      
card.appendChild(heading);
card.appendChild(paragraph);
card.appendChild(buttonDiv);
div.appendChild(card);

return div;
}

}


  