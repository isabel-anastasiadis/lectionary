﻿using ReadingsBuilder.Model;
using ReadingsBuilder.Model.Result;

namespace ReadingsBuilder.Pipeline.Steps.Utility
{
    public interface IByDayOfWeekRuleSetApplier
    {
        PipelineWorkingResult ApplyRulesByDayOfWeek(PipelineWorkingResult workingResult, 
            List<RuleData> applicableRules, 
            DateOnly dateOfFirstDayRuleAppliesTo, 
            RuleData? ruleDataToStartWith, 
            DateOnly? dateOfLastDayRuleAppliesTo,
            bool rulesLoopAround = false);
    }
}