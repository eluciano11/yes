import csv

rows = []

# Open the CSV file
with open('data.csv', 'r') as file:
    # Create a CSV reader object
    csv_reader = csv.reader(file)
    header = next(csv_reader)

    outer = 1

    # Iterate over each row in the CSV file
    for row in csv_reader:
        data = {}
        categories = []
        data["id"] = outer

        cols = row[0].split('\t')

        for index, col in enumerate(cols):
            if index == 0:
                data['name'] = col
            elif col == "TRUE":
                categories.append(index)

        data['categories'] = categories
        rows.append(data)
        outer += 1


# Define the field names (CSV header)
field_names = ['id', 'name', 'categories']

# Open the CSV file in write mode
with open('dump.csv', 'w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=field_names)

    # Write the CSV header
    writer.writeheader()

    # Write each object as a row in the CSV file
    for row in rows:
        writer.writerow(row)

print("CSV file has been created successfully.")
