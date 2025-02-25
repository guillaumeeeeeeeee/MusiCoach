from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
from pathlib import Path
from backend.model.main_back_front import finish
from backend.model.main_back_front import scoring  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Répertoires
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

    # Chemins des fichiers
    audio_path = AUDIO_DIR / file.filename
    pdf_path = AUDIO_DIR / (file.filename + ".pdf")  # Même nom que le fichier audio, mais avec extension PDF

    try:
        # Sauvegarde temporaire du fichier uploadé
        with open(audio_path, "wb") as buffer:
            buffer.write(await file.read())

        # Génération de la partition et du PDF via `finish`
        finish(file_name=audio_path.stem)

        # Vérification que le PDF a bien été généré
        if not pdf_path.exists():
            raise HTTPException(status_code=500, detail="PDF file not generated")

        # Renvoyer le PDF généré
        return FileResponse(path=pdf_path, filename=pdf_path.name)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")

@app.post("/upload-lecon/")
async def upload_audio(file: UploadFile):
    if not file.filename.endswith((".mp3", ".wav", ".ogg", ".m4a")):
        raise HTTPException(status_code=400, detail="Unsupported file format")

    # Chemins des fichiers
    audio_path = AUDIO_DIR / file.filename
    pdf_path = AUDIO_DIR / (file.filename + ".pdf")  # Même nom que le fichier audio, mais avec extension PDF

    try:
        # Sauvegarde temporaire du fichier uploadé
        with open(audio_path, "wb") as buffer:
            buffer.write(await file.read())

        # Génération de la partition et du PDF via `finish`
        scoring(file_name=audio_path.stem)

        # Vérification que le PDF a bien été généré
        if not pdf_path.exists():
            raise HTTPException(status_code=500, detail="PDF file not generated")

        # Renvoyer le PDF généré
        return FileResponse(path=pdf_path, filename=pdf_path.name)
    except Exception as e:
        print(e)
        raise HTTPException(status_code=500, detail=f"Error processing file: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
