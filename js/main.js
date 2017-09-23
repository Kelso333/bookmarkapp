// listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save Bookmark 
function saveBookmark(e) {
  // Get form value
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  
  var bookmark = {
    name: siteName,
    url: siteUrl
  }


// Local Storage Test

  /* localStorage.setItem('test', 'hello world');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));
  */

  // Test if bookmarks is null
  if(localStorage.getItem('bookmarks') === null) {
    // init array 
    var bookmarks = [];
    // add to array
    bookmarks.push(bookmark);
    // set to local storage 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // add bookmark to array
    bookmarks.push(bookmark);
    // reset it back to local storage 
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  

// fetch bookmarks
  function fetchBookmarks() {
    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    console.log(bookmarks);
  }

// Prevent form from submitting
  e.preventDefault();
}