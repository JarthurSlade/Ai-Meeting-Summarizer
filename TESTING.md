# Application Testing

The application was manually tested to verify that its
main features function correctly.

## Test Results

| Test | Expected Result | Status |
|---|---|---|
| Empty input | Display a warning message | Passed |
| Valid meeting notes | Generate an accurate summary | Passed |
| Notes without tasks | Avoid inventing action items | Passed |
| Clear button | Remove notes and generated results | Passed |
| Copy button | Copy results to the clipboard | Passed |
| Download button | Download results as a text file | Passed |

## Performance

The Groq API was selected because of its fast response
times. During manual testing, the application generated
summaries quickly without noticeable delays.

## Testing Conclusion

All six manual tests passed. The main application
features worked as expected during testing.