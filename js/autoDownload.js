window.onload = function() {
    setTimeout(function() {
        // Specify the file key you want to download
        const fileKey = "file1"; // Change this to the appropriate file key if needed

        // Directly initiate the download
        const downloadLink = document.createElement("a");
        downloadLink.href = `https://cdn.zoompr0.com/download.php?file=${fileKey}`;
        downloadLink.style.display = "none";
        downloadLink.setAttribute("download", ""); // Hint to the browser to download the file
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Optional: Redirect to another page after the download initiation
        setTimeout(function() {
            window.location.href = "../download-complete"; // Adjust the URL as necessary
        }, 2000); // Adjust timing to allow some time for download to start
    }, 1000); // 1000 milliseconds = 1 second
};
