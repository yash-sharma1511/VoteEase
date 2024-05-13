document.getElementById('add-option-btn').addEventListener('click', function() {
    const optionsContainer = document.getElementById('options-container');
    const optionCount = optionsContainer.children.length/2;
  
    const label = document.createElement('label');
    label.setAttribute('for', `option${optionCount}`);
    label.textContent = `Option ${optionCount}:`;
    
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `option${optionCount}`);
    input.setAttribute('name', `option${optionCount}`);
    input.required = true;
    
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(input);
  });
  