from groq import Groq
import json

def summarize_meeting(notes):
    client = Groq(timeout=30.0, max_retries=0)

    prompt = """
    Analyze the following meeting notes and return a JSON object
    containing:

    - summary: A short overview of the meeting.
    - decisions: A list of important decisions.
    - action_items: A list of tasks, including responsible people
      and deadlines when mentioned.

    Do not invent information that is not in the meeting notes.
    Keep the results concise.
    """

    response = client.chat.completions.create(
        model="openai/gpt-oss-20b",
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": notes}
        ],
        reasoning_effort="low",
        temperature=0.2,
        max_completion_tokens=1500,
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)
    