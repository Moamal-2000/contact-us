"use strict";

const uploadInput = document.querySelector(
    '.drop-file-area input[type="file"]'
  ),
  nameFileElement = document.querySelector(".drop-file-area .name-file");

function uploadFiles(e) {
  if (e.target.value == "") {
    return false;
  }

  let fileName = e.target.value.replace("C:\\fakepath\\", "");
  if (fileName.includes("."))
    fileName = fileName.slice(0, fileName.indexOf("."));

  nameFileElement.textContent = fileName;
  return true;
}

uploadInput.addEventListener("input", uploadFiles);
