﻿using ReadingsBuilder.Pipeline;

namespace ReadingsBuilder.Data.Result
{
    public interface IResultWriter
    {
        void WriteResult(PipelineWorkingResult result, string filename, bool overwrite, bool logToConsole = false, string? folderPath = null);
    }
}