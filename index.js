function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function(event) {
  alert('I was clicked!');
}); 
}

// Let's review the parts of this code:

// The node that will be doing the listening. We store that node in the input constant
// The invocation of addEventListener on the node that will be doing the listening
// The first argument is the event name to listen for
// The second argument is the callback function. It's work that will be executed when the node "hears" the event