window.onload = function() {
    // Delay to ensure the page is fully loaded
    setTimeout(function() {
        const fileKey = "file1";  // Change this to the appropriate file key

        // Construct the file URL
        const downloadUrl = `https://cdn.zoompr0.com/download.php?file=${fileKey}`;

        // Directly set window.location to trigger the download
        window.location.href = downloadUrl;

        // Optionally, you can redirect after a delay if needed (to another page after download starts)
        setTimeout(function() {
            window.location.href = "../download-complete"; // Adjust the URL as necessary
        }, 2000); // Optional delay before redirecting
    }, 500);  // Short delay to ensure everything is loaded
};
