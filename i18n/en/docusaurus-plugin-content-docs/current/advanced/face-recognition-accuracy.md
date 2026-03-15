---
sidebar_label: 'Adjust Face Recognition Accuracy'
---

# Adjust Face Recognition Accuracy
Albumie’s face recognition AI calculates facial similarity from 0% to 100%.
By default, if a registered person and a person in a photo are 80% or more similar,
they are recognized as the same person.
You can change this similarity threshold.
Setting a higher value makes face matching stricter.

Steps:

1. Click the settings icon (gear icon) in the header.


2. Click the down-arrow button on the right side of the face recognition accuracy settings section.
   A similarity slider appears.


3. Set similarity between 80% and 100%.
   After adjusting the slider, click **Update**.
   After updating, album auto-selection and the album **People View** page follow the new threshold.

:::caution
For photos with large differences from registration photos (e.g., masks, big smiles),
similarity tends to be lower.
So if you set a very high threshold, the same person may no longer be recognized as the same person.
In **About Similarity** you can check existing photo similarity values.
Before adjusting, we recommend checking actual similarity values in your data.
:::

:::tip About similarity
You can check AI similarity percentages on the **People View** page.
For example, if a photo is wrongly judged as containing a person,
check that photo’s similarity value and set the threshold higher than that value.
Then it will no longer be judged as containing that person.
:::
