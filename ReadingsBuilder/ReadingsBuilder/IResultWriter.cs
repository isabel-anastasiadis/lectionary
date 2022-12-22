﻿using ReadingsBuilder.Model.Pipeline.DTOs;

namespace ReadingsBuilder
{
    public interface IResultWriter
    {
        void WriteResult(PipelineWorkingResult result, string filename, bool overwrite, bool logToConsole = false, string? folderPath = null);
    }
}