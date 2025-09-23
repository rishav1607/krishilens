var tl = gsap.timeline()

tl.from("#navbar h2",{
    y:-30,
    opacity:0,
    duration:1,
    dealy:1
})

tl.from("#navbar img",{
    y:+20,
    opacity:0,
    duration:1,
    scale:0.2
})


const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");
const addPhoto = document.getElementById("addPhoto");
const analyzeBtn = document.getElementById("analyzeBtn");
const loadingIndicator = document.getElementById("loadingIndicator");
const breedName = document.getElementById("breedName");
const breedDescription = document.getElementById("breedDescription");
const allBreedsSection = document.getElementById("allBreedsSection");
const breedsList = document.getElementById("breedsList");

// Store the current uploaded file
let currentFile = null;

// Separate backend changes :)
const API_BASE_URL = 'https://krishilens-backend.vercel.app';
const ANALYZE_ENDPOINT = `${API_BASE_URL}/api/analyze`;

// When gallery icon is clicked, open file explorer
gallery.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click();
});

// When file is selected, display it inside #addPhoto (Changes made by Rishav)
fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        currentFile = file;
        const reader = new FileReader();
        reader.onload = function(e) {
            gallery.src = e.target.result; // replace placeholder with uploaded image
            gallery.style.position = "static"; // reset absolute positioning
            gallery.style.width = "100%";
            gallery.style.height = "100%";
            gallery.style.objectFit = "cover"; // make it fit nicely
            
            // Show analyze button when image is uploaded
            analyzeBtn.style.display = "block";
            
            // Reset breed information
            breedName.textContent = "Breed Name will appear here";
            breedDescription.textContent = "Upload an image to see breed details here.";
            allBreedsSection.style.display = "none";
            breedsList.innerHTML = "";
        }
        reader.readAsDataURL(file);
    }
});

//Below are all backend functions

// Analyze button click handler
analyzeBtn.addEventListener("click", async () => {
    if (!currentFile) {
        alert("Please select an image first!");
        return;
    }
    
    try {
        await analyzeImage(currentFile);
    } catch (error) {
        console.error("Error analyzing image:", error);
        alert("Error analyzing image. Please try again.");
        hideLoading();
    }
});

// Function to convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // Remove the data:image/jpeg;base64, part
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = error => reject(error);
    });
}

// Function to show loading state
function showLoading() {
    loadingIndicator.style.display = "block";
    analyzeBtn.style.display = "none";
    gallery.style.opacity = "0.5";
}

// Function to hide loading state
function hideLoading() {
    loadingIndicator.style.display = "none";
    analyzeBtn.style.display = "block";
    gallery.style.opacity = "1";
}

// Function to display all detected breeds
function displayAllBreeds(predictions) {
    allBreedsSection.style.display = "block";
    breedsList.innerHTML = "";
    
    // Create a container for the breeds list
    const breedsContainer = document.createElement("div");
    breedsContainer.style.cssText = "display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-top: 10px;";
    
    predictions.forEach((pred, index) => {
        const confidence = (pred.confidence * 100).toFixed(1);
        const breedInfo = getBreedInfo(pred.class);
        
        // Create breed item as clickable button
        const breedItem = document.createElement("div");
        breedItem.className = "breed-item";
        breedItem.style.cssText = `
            position: relative;
            display: inline-block;
            padding: 8px 15px;
            background: ${index === 0 ? '#4CAF50' : '#f0f0f0'};
            color: ${index === 0 ? 'white' : '#333'};
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            font-weight: ${index === 0 ? '600' : '400'};
            border: 2px solid transparent;
        `;
        
        breedItem.innerHTML = `
            <span>${breedInfo.name}</span>
            <span style="margin-left: 5px; opacity: 0.8; font-size: 12px;">${confidence}%</span>
        `;
        
        // Add click event to update description
        breedItem.addEventListener("click", () => {
            // Update the main breed name
            let confidenceMessage = "";
            if (confidence >= 70) {
                confidenceMessage = "High confidence";
            } else if (confidence >= 40) {
                confidenceMessage = "Medium confidence";
            } else if (confidence >= 20) {
                confidenceMessage = "Low confidence";
            } else {
                confidenceMessage = "Very low confidence";
            }
            
            breedName.textContent = `${breedInfo.name} (${confidence}% - ${confidenceMessage})`;
            
            // Update the description
            let description = breedInfo.description;
            if (confidence < 40) {
                description = `⚠️ Low confidence detection (${confidence}%). Please verify with a clearer image or expert consultation.\n\n` + description;
            }
            breedDescription.textContent = description;
            
            // Update visual feedback for all breed items
            const allBreedItems = breedsContainer.querySelectorAll('.breed-item');
            allBreedItems.forEach((item, idx) => {
                if (item === breedItem) {
                    // Highlight the clicked item
                    item.style.background = '#4CAF50';
                    item.style.color = 'white';
                    item.style.fontWeight = '600';
                    item.style.border = '2px solid #4CAF50';
                } else {
                    // Reset other items
                    item.style.background = '#f0f0f0';
                    item.style.color = '#333';
                    item.style.fontWeight = '400';
                    item.style.border = '2px solid transparent';
                }
            });
            
            // Smooth scroll to description if needed
            breedDescription.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        
        // Add hover effects for visual feedback
        breedItem.addEventListener("mouseenter", () => {
            if (breedItem.style.background !== 'rgb(76, 175, 80)') { // If not already selected
                breedItem.style.transform = "scale(1.05)";
                breedItem.style.border = "2px solid #4CAF50";
            }
        });
        
        breedItem.addEventListener("mouseleave", () => {
            if (breedItem.style.background !== 'rgb(76, 175, 80)') { // If not already selected
                breedItem.style.transform = "scale(1)";
                breedItem.style.border = "2px solid transparent";
            }
        });
        
        breedsContainer.appendChild(breedItem);
    });
    
    breedsList.appendChild(breedsContainer);
}

// Function to analyze image using Roboflow API
async function analyzeImage(file) {
    showLoading();
    
    try {
        // Convert file to base64 (without data: prefix)
        const base64Image = await fileToBase64(file);

        const response = await fetch(ANALYZE_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ imageBase64: base64Image, confidence: "0.01" })
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Error Response:", errorText);
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log("Roboflow response:", data);
        
        // Extract breed name from predictions - show ANY prediction, even very low confidence :)
        if (data.predictions && data.predictions.length > 0) {
            console.log(`Found ${data.predictions.length} predictions:`, data.predictions);
            
            // Sort predictions by confidence (highest first)
            const sortedPredictions = [...data.predictions].sort((a, b) => b.confidence - a.confidence);
            
            // Get the best prediction
            const bestPrediction = sortedPredictions[0];
            const detectedBreed = bestPrediction.class;
            const confidence = (bestPrediction.confidence * 100).toFixed(1);
            
            console.log(`Best prediction: ${detectedBreed} with ${confidence}% confidence`);
            
            const breedInfo = getBreedInfo(detectedBreed);
            
            let confidenceMessage = "";
            if (confidence >= 70) {
                confidenceMessage = "High confidence";
            } else if (confidence >= 40) {
                confidenceMessage = "Medium confidence";
            } else if (confidence >= 20) {
                confidenceMessage = "Low confidence";
            } else {
                confidenceMessage = "Very low confidence";
            }
            
            breedName.textContent = `${breedInfo.name} (${confidence}% - ${confidenceMessage})`;
            
            let description = breedInfo.description;
            if (confidence < 40) {
                description = `⚠️ Low confidence detection (${confidence}%). Please verify with a clearer image or expert consultation.\n\n` + description;
            }
            
            breedDescription.textContent = description;
            
            // Display all detected breeds if there are multiple
            if (sortedPredictions.length > 1) {
                displayAllBreeds(sortedPredictions);
            }
            
            console.log(`Detected breed: ${detectedBreed} with ${confidence}% confidence`);
            
            // Log all predictions for debugging (imp)
            sortedPredictions.forEach((pred, index) => {
                console.log(`Prediction ${index + 1}: ${pred.class} (${(pred.confidence * 100).toFixed(1)}%)`);
            });
        } else {
            console.log("No predictions found in response");
            breedName.textContent = "No cattle detected";
            breedDescription.textContent = "No cattle or breed could be detected in this image. Please ensure the image contains a clear view of cattle and try again.";
        }
        
    } catch (error) {
        console.error("Error in analyzeImage:", error);
        breedName.textContent = "Analysis failed";
        breedDescription.textContent = "There was an error analyzing the image. Please check your internet connection and try again.";
        
        if (error.message.includes('401')) {
            breedDescription.textContent = "API authentication failed. Please check the API key.";
        } else if (error.message.includes('network')) {
            breedDescription.textContent = "Network error. Please check your internet connection.";
        }
        
        throw error;
    } finally {
        hideLoading();
    }

}
