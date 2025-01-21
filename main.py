from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
from reportlab.pdfgen import canvas
from pathlib import Path

app = FastAPI()

# Middleware pour autoriser les requêtes CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Répertoire temporaire 
TEMP_DIR = Path("temp_files")
TEMP_DIR.mkdir(exist_ok=True)
AUDIO_DIR = TEMP_DIR / "audio"
PDF_DIR = TEMP_DIR / "pdf"
AUDIO_DIR.mkdir(exist_ok=True)
PDF_DIR.mkdir(exist_ok=True)



@app.post("/upload-audio/")
async def upload_audio(file: UploadFile):
    if not file.filename.endswith((".mp3", ".wav", ".ogg", ".m4a")):
        raise HTTPException(status_code=400, detail="Unsupported file format")
    
    audio_path = AUDIO_DIR / file.filename
    pdf_path = PDF_DIR / (file.filename + ".pdf")

    try:
        # Sauvegarde temporaire du fichier uploadé
        with open(audio_path, "wb") as buffer:
            buffer.write(await file.read())

        # Création du pdf
        create_pdf(pdf_path, f"Traitement du fichier audio : {file.filename}")

        
        # Renvoyer pdf
        return FileResponse(path=pdf_path, filename=pdf_path.name)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
