<?php
header("Access-Control-Allow-Origin: *");

include 'config.php';

// Get the file key from the query string
$fileKey = $_GET['file'] ?? null;

// Check if the requested file key exists
if ($fileKey && isset($downloadFiles[$fileKey])) {
    $fileUrl = $downloadFiles[$fileKey];

    // Set headers to prompt download
    header("Content-Description: File Transfer");
    header("Content-Type: application/octet-stream");
    header("Content-Disposition: attachment; filename=\"" . basename($fileUrl) . "\"");
    header("Expires: 0");
    header("Cache-Control: must-revalidate");
    header("Pragma: public");

    // Use readfile() to output the file contents
    readfile($fileUrl);
    exit;
} else {
    echo json_encode(["error" => "File not Found"]);
}
?>
