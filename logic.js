


  function copyToClipboard() {
    const text = document.getElementById("copyText").innerText;
    navigator.clipboard.writeText(text).then(() => {
      
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }


  function copyToClipboard2() {
    const text = document.getElementById("copyText2").innerText;
    navigator.clipboard.writeText(text).then(() => {
      
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  }