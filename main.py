from fastapi import FastAPI, UploadFile, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import os
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

# Répertoire temporaire pour sauvegarder les fichiers
TEMP_DIR = Path("temp_audio")
TEMP_DIR.mkdir(exist_ok=True)

@app.post("/upload-audio/")
async def upload_audio(file: UploadFile):
    if not file.filename.endswith((".mp3", ".wav", ".ogg", ".m4a")):
        raise HTTPException(status_code=400, detail="Unsupported file format")
    
    input_path = TEMP_DIR / file.filename

    try:
        # Sauvegarde temporaire du fichier uploadé
        with open(input_path, "wb") as buffer:
            buffer.write(await file.read())
        
        # Renvoyer l'audio tel quel
        return FileResponse(path=input_path, filename=file.filename)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing audio: {str(e)}")
    finally:
        # Nettoyage des fichiers temporaires après réponse
        if input_path.exists():
            os.remove(input_path)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
