from flask import Flask, render_template, request, jsonify
from summarizer import summarize_meeting

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json(silent=True) or {}
    notes = data.get("notes", "")

    if not isinstance(notes, str) or not notes.strip():
        return jsonify({"error": "Please enter meeting notes."}), 400

    if len(notes) > 30000:
        return jsonify({"error": "Meeting notes are too long."}), 400

    try:
        result = summarize_meeting(notes)
        return jsonify(result)

    except Exception:
        app.logger.exception("Summary generation failed")
        return jsonify({
            "error": "Unable to generate summary. Please try again."
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)