<script
    window.onload = function() {
        // Wait for the page to fully load before executing the download logic
        setTimeout(function() {
            const fileKey = "file1"; // Change this to the appropriate file key if needed

            // Create a hidden download link
            const downloadLink = document.createElement("a");
            downloadLink.href = `https://cdn.zoompr0.com/download.php?file=${fileKey}`;
            downloadLink.style.display = "none";
            downloadLink.setAttribute("download", ""); // Suggest the browser to download

            // Append the link to the document and trigger the download
            document.body.appendChild(downloadLink);

            // Check if the link exists before triggering the download
            if (downloadLink) {
                downloadLink.click();
                document.body.removeChild(downloadLink); // Clean up by removing the link after clicking
            } else {
                console.error("Download link not created successfully");
            }

            // Wait for a short time to ensure the download starts before showing the next page
            setTimeout(function() {
                // Transition to the final "Thank You" page (Page 3)
                showPage('page3');
            }, 3000); // Delay to ensure the download has started (adjust timing if needed)

        }, 500); // Delay slightly to ensure page is fully loaded
    };
</script>