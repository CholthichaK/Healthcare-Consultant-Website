from flask import Flask, render_template, request, jsonify
import joblib
import numpy as np
import pandas as pd
# Create Flask App
app = Flask(__name__)

# ==============================
# LOAD MODEL FILES
# ==============================

model = joblib.load("DiseaseModel/disease_prediction_model.pkl")

encoder = joblib.load("DiseaseModel/label_encoder.pkl")

symptom_columns = joblib.load("DiseaseModel/symptom_columns.pkl")

# ==============================
# ROUTES
# ==============================
@app.route("/")
def home():
    return render_template("HOME.html")


@app.route("/explore-diseases")
def exploreDiseases():
    return render_template("ExploreDiseases.html")


@app.route("/symptom-checker")
def symptomChecker():
    return render_template("symptomsChecker.html")


@app.route("/diabetes")
def diabetes():
    return render_template("diabetesD.html")


@app.route("/cancer")
def cancer():
    return render_template("CancerD.html")


@app.route("/asthma")
def asthma():
    return render_template("asthmaD.html")


@app.route("/HealthTip1")
def health_tip1():
    return render_template("HealthTip1.html")
@app.route("/faq")
def faq():

    return render_template("commonFAQ.html")
@app.route("/contact")
def contact_us():
    return render_template("ContactUS.html")

# ==============================
# PREDICTION ROUTE
# ==============================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        selected_symptoms = data["symptoms"]

        if len(selected_symptoms) == 0:

            return jsonify({
                "prediction": "Please select at least one symptom."
            })

        symptom_vector = np.zeros(len(symptom_columns))

        for symptom in selected_symptoms:

            if symptom in symptom_columns:

                index = symptom_columns.index(symptom)

                symptom_vector[index] = 1
                symptom_df = pd.DataFrame([symptom_vector], columns=symptom_columns)

                prediction = model.predict(symptom_df)

       

        disease_name = encoder.inverse_transform(prediction)

        return jsonify({
            "prediction": disease_name[0]
        })

    except Exception as e:

        return jsonify({
            "prediction": f"Error: {str(e)}"
        })

# ==============================
# RUN APP
# ==============================

if __name__ == "__main__":
    app.run(debug=True)