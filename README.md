# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon error encountered when using MongoDB's `$inc` operator within the `updateOne` method. The issue arises when attempting to decrement a counter below zero.

## Problem

The `$inc` operator is intended to increment or decrement a numerical field in a document. However, when used to decrement a counter below zero, it unexpectedly returns 0 instead of allowing a negative value. This behavior might lead to inaccuracies in applications using counters to track values.

## Solution

To address this, the solution involves explicitly checking the counter value before the decrement operation.  This ensures the counter doesn't go below zero, avoiding the unexpected zero return from `$inc`. A more robust implementation might use a different approach for handling negative counters depending on application requirements. 
