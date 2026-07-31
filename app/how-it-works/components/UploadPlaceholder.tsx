"use client";

import { AlertCircle, CheckCircle2, FilePlus2, Loader2, Plus } from "lucide-react";
import { type ChangeEvent, useRef, useState } from "react";

const ACCEPTED_EXTENSIONS = [".csv", ".xlsx", ".json"];
const MAX_FILE_SIZE_MB = 500;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const UploadPlaceholder = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFiles = (files: FileList | null) => {
        if (!files || files.length === 0) return;

        const validFiles: File[] = [];
        const invalidReasons: string[] = [];

        Array.from(files).forEach((file) => {
            const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
            const isSupported = ACCEPTED_EXTENSIONS.includes(extension);
            const isWithinLimit = file.size <= MAX_FILE_SIZE_BYTES;

            if (!isSupported) {
                invalidReasons.push(`${file.name} uses an unsupported format.`);
                return;
            }

            if (!isWithinLimit) {
                invalidReasons.push(`${file.name} exceeds the ${MAX_FILE_SIZE_MB}MB limit.`);
                return;
            }

            validFiles.push(file);
        });

        if (invalidReasons.length > 0) {
            setError(invalidReasons.join(" "));
        } else {
            setError(null);
        }

        if (validFiles.length === 0) {
            setSelectedFiles([]);
            setIsUploading(false);
            return;
        }

        setSelectedFiles(validFiles);
        setIsUploading(true);
        setMessage("Preparing your files for review...");

        window.setTimeout(() => {
            setIsUploading(false);
            setMessage(`${validFiles.length} file${validFiles.length > 1 ? "s" : ""} ready for analysis.`);
        }, 900);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFiles(event.target.files);
        event.target.value = "";
    };

    const openPicker = () => {
        inputRef.current?.click();
    };

    return (
        <div className="flex h-full w-full items-center justify-center rounded-3xl bg-[#EDEDFC] p-6 sm:p-8">
            <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-2xl border-2 border-[#C8C6F7] bg-white px-6 py-8 text-center shadow-sm">
                <input
                    ref={inputRef}
                    type="file"
                    accept={ACCEPTED_EXTENSIONS.join(",")}
                    multiple
                    onChange={handleChange}
                    className="hidden"
                />

                <button
                    type="button"
                    onClick={openPicker}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDEDFC] text-[#4F46E5] transition hover:scale-110 cursor-pointer"
                >
                    {isUploading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5" />}
                </button>

                <div className="w-full">
                    <p className="text-sm font-semibold text-[#191919]">Upload your data</p>
                    <p className="mt-1 text-xs text-[#191919]/80">Support for .csv, .xlsx, .json up to 500MB</p>
                </div>

                {selectedFiles.length > 0 && (
                    <div className="w-full rounded-xl border border-[#EDEDFC] bg-[#F8F8FE] p-3 text-left">
                        <div className="flex items-center gap-2 text-sm font-medium text-[#191919]">
                            <FilePlus2 className="h-4 w-4 text-[#4F46E5]" />
                            <span>{selectedFiles.length} file{selectedFiles.length > 1 ? "s" : ""} selected</span>
                        </div>
                        <ul className="mt-2 space-y-1 text-xs text-[#191919]/80">
                            {selectedFiles.map((file) => (
                                <li key={`${file.name}-${file.size}`} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E]" />
                                    <span className="truncate">{file.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {error ? (
                    <p className="flex items-center gap-2 text-sm text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                    </p>
                ) : (
                    <p className="text-sm text-[#191919]/80">{message}</p>
                )}
            </div>
        </div>
    )
}

export default UploadPlaceholder